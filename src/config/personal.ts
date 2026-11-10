export const personal = {
  brideName: "",
  authorName: "",
  nickname: "Sumercé Linda",
  specialDate: "",
  dedication:
    "Para você, que torna habitável até o que eu ainda não sei imaginar.",
  closing:
    "Não sei que forma terão os nossos dias. Gostaria de descobri-la com você — com espaço para os seus sonhos, para os meus, e para aquilo que aprenderemos a construir juntos.",
  trueDetails: [] as string[],
};
/** Acrescente capítulos no mesmo formato de Story. Memórias e fotos reais exigem consentimento. */
export const additionalContent: import("../narrative/types").Story[] = [];
export const realMemories: {
  id: string;
  title: string;
  text: string;
  image?: string;
  authorized: boolean;
}[] = [];
