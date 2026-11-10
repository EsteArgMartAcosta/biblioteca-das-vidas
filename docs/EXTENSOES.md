# Acrescentar uma vida

O núcleo está em `src/narrative/types.ts`. Cada história é um grafo dirigido de cenas. O campo `id` da história e os IDs das cenas/escolhas precisam permanecer estáveis após a publicação.

```ts
import type { Story } from "../narrative/types";
const novaHistoria: Story = {
  id: "um-novo-dia",
  title: "Um novo dia",
  subtitle: "Uma possibilidade ficcional.",
  roman: "IX",
  kind: "home",
  art: "house",
  start: "inicio",
  nodes: {
    inicio: {
      id: "inicio",
      title: "Uma janela",
      text: ["Texto definitivo da cena."],
      choices: [
        {
          id: "abrir",
          label: "Abrir a janela.",
          to: "ar",
          effects: { flags: { "um-novo-dia.janela": "aberta" } },
        },
        {
          id: "ficar",
          label: "Ficar junto ao vidro.",
          to: "vidro",
          effects: { flags: { "um-novo-dia.janela": "fechada" } },
        },
      ],
    },
    ar: {
      id: "ar",
      title: "O vento entrou",
      text: ["Um desfecho completo."],
      choices: [],
      ending: "O vento",
    },
    vidro: {
      id: "vidro",
      title: "A chuva desenhou o vidro",
      text: ["Outro desfecho completo."],
      choices: [],
      ending: "A chuva",
    },
  },
};
```

Inclua o objeto em `additionalContent`, no arquivo `src/config/personal.ts`. Capítulos adicionais aparecem na seção “Outros dias” da casa depois que ela é descoberta e não impedem o final original. O exemplo acima explica o formato; substitua seus textos por uma narrativa desenvolvida antes de publicá-lo.

`requires` aceita tokens exatos: `item:bussola`, `done:farol`, `flag:farol.final=travessia`. Todas as condições de uma lista precisam ser satisfeitas. Uma cena pode ter `variants: [{requires: [...], text: [...]}]`. Variantes acrescentam texto, sem alterar o texto de base.

`effects.flags` define consequências; `effects.items` concede objetos do catálogo. Registre novos objetos no catálogo antes de usá-los. Não use condições aleatórias e mantenha ao menos uma escolha válida em cada estado alcançável.

O teste de grafo identifica destinos ausentes, IDs inconsistentes, ciclos, objetos desconhecidos e cenas inacessíveis. Os testes de percurso enumeram ramificações e verificam as condições. Ao adicionar uma história, acrescente cenários que comprovem suas regras de acesso.

Para conteúdo real, use `realMemories` e `authorized: true` somente após autorização. Imagens podem ficar em `public/assets/memorias/`; use caminhos relativos como `./assets/memorias/viagem.jpg`. A interface identifica esses registros como “memória real”. Nunca transforme uma possibilidade ficcional em recordação presumida.
