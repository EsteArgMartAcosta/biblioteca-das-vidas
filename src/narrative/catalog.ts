import { books } from "./books/books";
import { homeStories } from "../eternities/stories";
import { additionalContent } from "../config/personal";
export const stories = [...books, ...homeStories, ...additionalContent];
export const storyById: Record<string, import("./types").Story> = Object.assign(
  Object.create(null),
  Object.fromEntries(stories.map((s) => [s.id, s])),
);
export function storyTitle(id: string, p: import("./types").Progress) {
  if (id !== "anomalia") return storyById[id]?.title ?? "";
  return p.flags["farol.final"] === "travessia"
    ? "O livro das duas margens"
    : p.flags["farol.final"] === "cartas"
      ? "O livro das respostas que ficaram"
      : storyById[id].title;
}
export { books, homeStories };
export const items = [
  {
    id: "bussola",
    name: "A bússola sem norte",
    origin: "farol",
    icon: "compass",
    description: "A agulha procura algo que nenhum mapa inclui.",
    after:
      "A agulha não procura um lugar. Procura uma chegada que ainda pode acontecer.",
    pair: "bilhete",
  },
  {
    id: "relogio",
    name: "O relógio das 25 horas",
    origin: "tempo",
    icon: "clock",
    description: "Existe uma hora a mais entre o medo e a próxima manhã.",
    after:
      "Uma hora impossível virou tempo suficiente para escutar. Na casa, os ponteiros voltam a andar.",
    pair: "semente",
  },
  {
    id: "esfera",
    name: "Uma estrela guardada",
    origin: "estrelas",
    icon: "star",
    description: "A luz sobrevive àquilo que a produziu.",
    after:
      "Vista de cima, sua constelação tem a disposição de uma mesa para duas pessoas.",
    pair: "fotografia",
  },
  {
    id: "fotografia",
    name: "A fotografia sem ninguém",
    origin: "desencontro",
    icon: "image",
    description:
      "Um banco vazio. Duas sombras de árvores. Nenhuma vida incompleta.",
    after:
      "O espaço vazio não é uma falha. É o lugar que uma imagem deixa para o que não sabe.",
    pair: "esfera",
  },
  {
    id: "semente",
    name: "A semente sem previsão",
    origin: "jardim",
    icon: "leaf",
    description: "Não tem data de florescimento escrita na casca.",
    after: "A planta cresce quando recebe água, não quando recebe garantias.",
    pair: "relogio",
  },
  {
    id: "bilhete",
    name: "O bilhete sem estação",
    origin: "trem",
    icon: "ticket",
    description: "O campo de chegada está em branco.",
    after:
      "A bússola aponta para esse espaço. Sala Zero: uma entrada que o catálogo não podia prever.",
    pair: "bussola",
  },
  {
    id: "pagina",
    name: "A página ainda morna",
    origin: "anomalia",
    icon: "book",
    description:
      "Nenhuma tinta. A impressão de que alguém acaba de retirar a mão.",
    after: "Não falta uma história. Falta vivê-la.",
    pair: "semente",
  },
];
export const connections = [
  {
    id: "chegada",
    from: "farol",
    to: "trem",
    title: "Uma direção sem endereço",
    objects: ["bussola", "bilhete"],
    text: "No farol, a bússola recusava o norte. No trem, apontou para o campo vazio do bilhete. As duas coisas indicam uma chegada ainda não registrada, não um destino obrigatório.",
  },
  {
    id: "intervalo",
    from: "tempo",
    to: "jardim",
    title: "O tempo não é uma promessa",
    objects: ["relogio", "semente"],
    text: "O relógio guarda uma hora que não cabe no dia. A semente guarda um futuro que não cabe numa previsão. Ambos pedem espaço para algo mudar.",
  },
  {
    id: "ausencia",
    from: "estrelas",
    to: "desencontro",
    title: "O que um espaço vazio conserva",
    objects: ["esfera", "fotografia"],
    text: "O observatório lê as lacunas entre estrelas. A fotografia conserva uma praça sem os seus visitantes. Ausência de registro não é ausência de uma vida valiosa.",
  },
];
