import type { Progress } from "./types";
import { personal } from "../config/personal";
import { books, homeStories } from "./catalog";
export function composeEnding(p: Progress): string[] {
  const f = p.flags;
  const patient = f["dificil.cuidado"] === "espaco";
  const listens = f["insomnia.escuta"] === "silencio";
  const object = f["mesa.objeto"] ?? "livro";
  const opening =
    p.links.length === 3
      ? "Você reuniu uma direção, um intervalo e um espaço vazio. Nenhum deles provava que duas pessoas estavam obrigadas a se encontrar. Juntos, deixavam lugar para que um encontro fosse possível."
      : "Você trouxe o que conseguiu carregar. A biblioteca não pede uma coleção perfeita: pede atenção ao que cada objeto mudou em suas mãos.";
  const care =
    patient && listens
      ? "Na madrugada, você deixou que o silêncio ficasse à mesa. Na tarde difícil, abriu espaço sem retirar a companhia. A casa aprendeu duas medidas diferentes de proximidade: uma cadeira ao lado e uma porta que pode ser fechada sem medo."
      : patient
        ? "Houve uma conversa que você quis ouvir inteira e uma tarde em que preferiu dar espaço. O cuidado não teve sempre a mesma forma. Talvez por isso tenha parecido uma casa: havia onde conversar e onde respirar."
        : listens
          ? "Você ficou perto na tarde difícil e não exigiu palavras na madrugada. Alguém pôde estar acompanhado sem precisar explicar tudo. Essa foi uma das poucas coisas que o catálogo não soube medir."
          : "Você escolheu escutar na madrugada e estar perto na tarde difícil. Nenhuma dessas escolhas consertou o mundo. Mas, naquela cozinha, uma preocupação deixou de precisar de uma voz sozinha.";
  const table: Record<string, string> = {
    flor: "A flor escolhida para a mesa não promete durar. Um dia será preciso trocar a água, depois a própria flor. O lugar preparado continua ali.",
    livro:
      "O livro escolhido para a mesa não está aberto na mesma página para os dois. Há tempo para cada leitura e para o momento de levantar os olhos.",
    xicara:
      "A xícara escolhida para a mesa já permite imaginar um ruído pequeno: a louça tocando a madeira quando alguém chega. Ainda não aconteceu. Você deixou um lugar para isso.",
    vela: "A vela escolhida para a mesa não ilumina a casa inteira. Ilumina o bastante para reconhecer quem se senta diante de você. Às vezes, é uma boa medida.",
  };
  const distance = f["farol.final"] === "travessia";
  const journey = f["trem.final"] === "viagem";
  const worlds =
    distance && journey
      ? "Você atravessou o mar e deixou que o trem continuasse. Nessas duas histórias, partir não foi uma garantia de chegar: foi uma escolha acompanhada de provisões, dúvidas e uma rota de volta. Aqui, pode pousar o que trouxe."
      : distance
        ? "No farol, houve uma travessia. No fim dos trilhos, você ajudou a fazer um abrigo. Encontrar alguém e construir um lugar não foram o mesmo gesto; cada um pediu um tipo de coragem."
        : journey
          ? "As cartas continuaram entre duas margens, e o trem voltou a viajar. Você deixou que a distância tivesse mais de uma resposta. Nem todo vínculo precisa caber na mesma geografia para merecer cuidado."
          : "Você conservou a correspondência e escolheu o abrigo. De maneiras diferentes, deu continuidade ao que já podia sustentar: uma resposta do outro lado da água, uma lâmpada junto aos trilhos.";
  const time =
    f["tempo.final"] === "gradual" && f["jardim.final"] === "vaso"
      ? "Devolveu as horas aos poucos e deixou a semente num vaso que podia viajar. A mudança não precisou começar arrancando tudo de onde estava. Talvez a casa também possa aprender esse ritmo."
      : "O relógio voltou a andar. A semente ficou sob seus cuidados. Você não recebeu em troca uma estação sem chuva nem uma vida sem perdas; recebeu a possibilidade de continuar trabalhando com aquilo que muda.";
  return [
    opening,
    worlds,
    time,
    care,
    ...(p.drawer
      ? [
          "Na gaveta, encontrou uma carta que não pedia uma vida sem dificuldades. Pedia licença para participar dela. Você pode guardá-la sem transformar o futuro numa dívida.",
        ]
      : []),
    table[object] ?? table.livro,
    personal.closing,
  ];
}
export function endingFragments(p: Progress) {
  return [...books, ...homeStories]
    .filter((s) => p.completed[s.id])
    .map((s) => {
      const ids = p.completed[s.id];
      const n = s.nodes[ids[ids.length - 1]];
      return {
        id: s.id,
        title: s.title,
        ending: n.ending ?? "",
        lastChoice:
          p.decisions
            .filter(
              (d) => d.book === s.id && s.nodes[d.node].choices.length > 1,
            )
            .at(-1)?.label ?? "",
      };
    });
}
