export interface Effects {
  flags?: Record<string, string>;
  items?: string[];
}
export interface Choice {
  id: string;
  label: string;
  to: string;
  effects?: Effects;
  requires?: string[];
}
export interface Scene {
  id: string;
  title: string;
  text: string[];
  choices: Choice[];
  ending?: string;
  variants?: { requires: string[]; text: string[] }[];
}
export interface Story {
  id: string;
  title: string;
  subtitle: string;
  roman: string;
  kind: "book" | "home";
  art: string;
  start: string;
  nodes: Record<string, Scene>;
  object?: string;
}
export type Action =
  | { type: "start"; book: string }
  | { type: "choose"; book: string; node: string; choice: string }
  | { type: "link"; id: string }
  | { type: "zero" }
  | { type: "drawer" }
  | { type: "common" };
export interface Progress {
  cursors: Record<string, string>;
  visited: string[];
  completed: Record<string, string[]>;
  flags: Record<string, string>;
  items: string[];
  links: string[];
  zero: boolean;
  drawer: boolean;
  common: boolean;
  decisions: { book: string; node: string; choice: string; label: string }[];
}
export interface Settings {
  reduced: boolean;
  volume: number;
  textSize: number;
}
export interface Save {
  version: 2;
  uid: string;
  events: Action[];
  settings: Settings;
  wish: string;
  route: string;
  introSeen: boolean;
  houseSeen: boolean;
}
