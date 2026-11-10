import type { Action, Progress, Story } from "../types";
import { storyById, books, homeStories, connections, items } from "../catalog";
export const blankProgress = (): Progress => ({
  cursors: {},
  visited: [],
  completed: {},
  flags: {},
  items: [],
  links: [],
  zero: false,
  drawer: false,
  common: false,
  decisions: [],
});
const unique = (values: string[]) => [...new Set(values)];
export function tokens(p: Progress): Set<string> {
  return new Set([
    ...p.items.map((x) => "item:" + x),
    ...Object.keys(p.completed).map((x) => "done:" + x),
    ...Object.entries(p.flags).map(([k, v]) => "flag:" + k + "=" + v),
    ...p.links.map((x) => "link:" + x),
    ...(p.zero ? ["zero"] : []),
  ]);
}
export function matches(p: Progress, requires: string[] = []): boolean {
  const t = tokens(p);
  return requires.every((x) => t.has(x));
}
export function unlocked(id: string, p: Progress): boolean {
  const s = storyById[id];
  if (!s) return false;
  if (s.kind === "home") return !!p.completed.anomalia;
  if (id === "anomalia")
    return (
      books
        .filter((b) => b.id !== "anomalia")
        .every((b) => p.completed[b.id]) && p.zero
    );
  return true;
}
export const canFinal = (p: Progress) =>
  !!p.completed.anomalia &&
  homeStories.every((s) => p.completed[s.id]) &&
  p.common;
export const canZero = (p: Progress) =>
  connections.every((c) => p.links.includes(c.id));
export const canDrawer = (p: Progress) =>
  !!p.completed.anomalia &&
  p.links.includes("chegada") &&
  p.links.includes("intervalo") &&
  !!p.completed.insomnia &&
  !!p.completed.velhinhos;
export function apply(p: Progress, a: Action): Progress {
  const next: Progress = JSON.parse(JSON.stringify(p));
  switch (a.type) {
    case "start": {
      const s = storyById[a.book];
      if (!s || !unlocked(a.book, p))
        throw new Error("Esta passagem ainda não está disponível.");
      next.cursors[a.book] = s.start;
      next.visited = unique([...p.visited, a.book]);
      break;
    }
    case "choose": {
      const s = storyById[a.book];
      const n = s?.nodes[a.node];
      const c = n?.choices.find((c) => c.id === a.choice);
      if (
        !s ||
        !n ||
        !c ||
        p.cursors[a.book] !== a.node ||
        !matches(p, c.requires) ||
        !s.nodes[c.to]
      )
        throw new Error("A escolha não pertence à página aberta.");
      if (c.effects?.items?.some((i) => !items.some((x) => x.id === i)))
        throw new Error("Objeto desconhecido.");
      Object.assign(next.flags, c.effects?.flags ?? {});
      next.items = unique([...p.items, ...(c.effects?.items ?? [])]);
      next.cursors[a.book] = c.to;
      next.decisions.push({
        book: a.book,
        node: a.node,
        choice: c.id,
        label: c.label,
      });
      if (s.nodes[c.to].ending)
        next.completed[a.book] = [
          ...(p.completed[a.book] ?? []).filter((id) => id !== c.to),
          c.to,
        ];
      break;
    }
    case "link": {
      const c = connections.find((c) => c.id === a.id);
      if (
        !c ||
        !p.completed[c.from] ||
        !p.completed[c.to] ||
        !c.objects.every((i) => p.items.includes(i))
      )
        throw new Error("Leia as duas vidas antes de reconhecer esta ligação.");
      next.links = unique([...p.links, a.id]);
      break;
    }
    case "zero":
      if (!canZero(p))
        throw new Error("Três relações ainda precisam ser compreendidas.");
      next.zero = true;
      break;
    case "drawer":
      if (!canDrawer(p))
        throw new Error(
          "O relógio e a bússola ainda não encontraram seu lugar na casa.",
        );
      next.drawer = true;
      break;
    case "common":
      if (!homeStories.every((s) => p.completed[s.id]))
        throw new Error("Ainda há dias para conhecer.");
      next.common = true;
      break;
    default:
      throw new Error("Registro de jornada desconhecido.");
  }
  return next;
}
export const replay = (events: Action[]) =>
  events.reduce(apply, blankProgress());
/** The final uses concluded readings, retaining earlier endings during an unfinished reread. */
export function completedProgress(events: Action[]): Progress {
  const last: Record<string, number> = {};
  events.forEach((a, i) => {
    if (a.type === "choose") {
      const s = storyById[a.book];
      const c = s.nodes[a.node].choices.find((c) => c.id === a.choice);
      if (c && s.nodes[c.to].ending) last[a.book] = i;
    }
  });
  return replay(
    events.filter((a, i) =>
      a.type === "start" || a.type === "choose"
        ? i <= (last[a.book] ?? -1)
        : true,
    ),
  );
}
/** Validates references, reachability, cycles, object ids and reachable endings. */
export function validateStory(s: Story): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const stack = new Set<string>();
  function walk(id: string) {
    if (stack.has(id)) {
      errors.push(`${s.id}: ciclo em ${id}`);
      return;
    }
    if (seen.has(id)) return;
    const n = s.nodes[id];
    if (!n) {
      errors.push(`${s.id}: destino ausente ${id}`);
      return;
    }
    seen.add(id);
    stack.add(id);
    if (n.id !== id) errors.push(`${s.id}: id inconsistente ${id}`);
    if (!n.ending && !n.choices.length)
      errors.push(`${s.id}: cena sem saída ${id}`);
    if (n.ending && n.choices.length)
      errors.push(`${s.id}: desfecho com saída ${id}`);
    if (new Set(n.choices.map((c) => c.id)).size !== n.choices.length)
      errors.push(`${s.id}: escolha duplicada ${id}`);
    for (const c of n.choices) {
      for (const item of c.effects?.items ?? [])
        if (!items.some((i) => i.id === item))
          errors.push(`${s.id}: objeto desconhecido ${item}`);
      walk(c.to);
    }
    stack.delete(id);
  }
  walk(s.start);
  for (const id of Object.keys(s.nodes))
    if (!seen.has(id)) errors.push(`${s.id}: cena inacessível ${id}`);
  if (!Object.values(s.nodes).some((n) => n.ending))
    errors.push(`${s.id}: nenhum desfecho`);
  return errors;
}
export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
export function constellation(uid: string, p: Progress) {
  return books
    .filter((b) => p.visited.includes(b.id))
    .map((b, i) => {
      const choices = p.decisions
        .filter((d) => d.book === b.id)
        .map((d) => d.choice)
        .join("|");
      const h = hash(uid + b.id + choices);
      return {
        id: b.id,
        title: b.title,
        x: 14 + (h % 7300) / 100,
        y: 18 + ((h >>> 8) % 6000) / 100,
        r: 2 + (h % 4),
        index: i,
      };
    });
}
