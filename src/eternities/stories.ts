import type { Story } from "../narrative/types";

/** Futuros ficcionais: nenhum episódio pretende registrar uma memória do casal. */
export const homeStories: Story[] = [
  {
    id: "domingo",
    title: "Um domingo qualquer",
    subtitle: "A xícara, a frigideira e uma pequena catástrofe",
    roman: "I",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "Onze e dez",
        text: [
          "Nesta possibilidade, ninguém colocou o despertador. Quando Mara chega à cozinha, Tomás está imóvel diante do fogão, segurando uma espátula como quem acaba de receber uma notícia delicada.",
          "— Antes que você pergunte: eu queria fazer uma surpresa.\n— Conseguiu. Tem uma panqueca no escorredor.",
          "A chuva cobre a janela. Não há visita marcada, tarefa urgente nem motivo para transformar o café da manhã em uma prova de competência. Na tigela ainda resta massa; no armário, pão. Tomás olha para os dois com a mesma desconfiança.",
        ],
        choices: [
          {
            id: "panquecas",
            label: "Tentar outra panqueca, desta vez a quatro mãos",
            to: "panquecas",
            effects: { flags: { "domingo.cafe": "panquecas" } },
          },
          {
            id: "torradas",
            label: "Declarar aberta a temporada das torradas",
            to: "torradas",
            effects: { flags: { "domingo.cafe": "torradas" } },
          },
        ],
      },
      panquecas: {
        id: "panquecas",
        title: "Uma nova técnica",
        text: [
          "Mara segura o prato. Tomás diminui o fogo. Eles decidem abolir o arremesso, que parecia essencial no vídeo e claramente não era.",
          "A primeira panqueca sai dobrada. A segunda tem um buraco. A terceira parece um país que ainda não existe. Mara coloca geleia na região montanhosa.\n— Esse aqui tem um sistema político complicado.\n— Mas a fronteira é de morango.",
          "Comem as bordas em pé, esperando a última ficar pronta. Ninguém fotografa. A tigela vazia ocupa exatamente o lugar onde, uma hora antes, haveria pressa.",
        ],
        choices: [
          { id: "sentar", label: "Levar a travessa para a mesa", to: "mesa" },
        ],
      },
      torradas: {
        id: "torradas",
        title: "O plano oficialmente revisado",
        text: [
          "Tomás escreve “panquecas geométricas” num pedaço de papel, risca e acrescenta “pão”. Mara põe a chaleira no fogo. A cozinha deixa de ser um laboratório e volta a ser cozinha.",
          "A primeira torrada também passa do ponto. Os dois se encaram.\n— Talvez a surpresa seja pedir ajuda ao pão de ontem.\n— Ele tem experiência.",
          "Raspam as bordas mais escuras e inventam uma mistura de manteiga com canela. Funciona. A receita fica presa à geladeira, com uma observação: “Retirar antes de começar a investigar a chuva”.",
        ],
        choices: [
          { id: "sentar", label: "Levar o café para a mesa", to: "mesa" },
        ],
      },
      mesa: {
        id: "mesa",
        title: "O que fazer de um dia livre",
        text: [
          "Mara afasta o jornal para caberem os pratos. Tomás encontra uma lista de coisas que pretendiam fazer quando tivessem tempo. São dezessete itens. “Descansar” foi acrescentado à margem.",
          "— A gente podia resolver pelo menos uma coisa.\n— Podia. Mas não precisa prestar contas para o domingo.",
          "Do lado de fora, alguém abre um guarda-chuva vermelho. O café ainda está quente. A lista pode esperar; também pode fornecer uma ideia pequena.",
        ],
        choices: [
          {
            id: "janela",
            label: "Levar as xícaras para perto da chuva",
            to: "fim_chuva",
            effects: { flags: { "domingo.plano": "janela" } },
          },
          {
            id: "receita",
            label: "Anotar a receita que deu certo",
            to: "fim_receita",
            effects: { flags: { "domingo.plano": "receita" } },
          },
        ],
      },
      fim_chuva: {
        id: "fim_chuva",
        title: "Duas cadeiras",
        text: [
          "Arrastam duas cadeiras até a janela. O barulho incomoda o gato do vizinho, que os observa do outro lado do pátio com desaprovação profissional.",
          "Tomás pergunta se aquilo conta como um passeio. Mara responde que sim, mas que a paisagem exige silêncio. Ele fica quieto durante quatro segundos.",
          "Mais tarde, lavarão a frigideira. Agora existe apenas o pequeno calor de uma xícara entre as mãos. As cadeiras permanecem perto da janela.",
        ],
        choices: [],
        ending: "Um passeio sem sair de casa",
      },
      fim_receita: {
        id: "fim_receita",
        title: "A receita do que quase deu certo",
        text: [
          "No caderno, Mara escreve as quantidades. Tomás acrescenta: “Uma pessoa para impedir que a outra jogue comida para o alto”. Ela devolve a caneta.\n— Isso não é ingrediente.\n— É infraestrutura.",
          "A receita recebe a data de um domingo imaginário. Há uma mancha de café no canto e espaço para corrigir as medidas.",
          "Guardam o caderno na prateleira baixa. Numa manhã futura, talvez abram exatamente nessa página e descubram que o café da manhã já começou antes do primeiro gole.",
        ],
        choices: [],
        ending: "Uma receita com espaço para errar",
      },
    },
  },
  {
    id: "insomnia",
    title: "A cozinha às duas da manhã",
    subtitle: "Nem toda pergunta precisa de resposta",
    roman: "II",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "A luz debaixo da porta",
        text: [
          "Em outra noite possível, Mara encontra a cozinha acesa. Tomás está sentado com um copo de água intacto. Quando ela entra, ele endireita as costas, como se precisasse justificar estar acordado.",
          "— Estou pensando naquele trabalho. E em mais umas oito coisas que escolheram este horário para fazer reunião.",
          "Mara encosta na bancada. Também não conseguia dormir, mas por enquanto não precisa contar. Pergunta se ele quer conversar. Tomás respira, olhando a marca circular que o copo deixou na madeira.",
        ],
        choices: [
          {
            id: "conversa",
            label: "Sentar e perguntar qual preocupação chegou primeiro",
            to: "conversa",
            effects: { flags: { "insomnia.escuta": "conversa" } },
          },
          {
            id: "silencio",
            label: "Oferecer companhia sem precisar conversar",
            to: "silencio",
            effects: { flags: { "insomnia.escuta": "silencio" } },
          },
        ],
      },
      conversa: {
        id: "conversa",
        title: "A primeira cadeira",
        text: [
          "Ele teme aceitar uma oportunidade e descobrir que não dá conta. Teme recusá-la e ficar imaginando o que perdeu. Mara não escolhe um dos medos para desmentir.",
          "— Você quer que eu pense nas opções com você?\n— Ainda não. Primeiro eu queria conseguir dizer que estou com medo sem virar uma reunião de planejamento.",
          "Ela concorda. Tomás conta mais devagar. Há uma pausa comprida entre duas frases. Mara não a preenche. Quando ele termina, a oportunidade continua complicada, mas já não ocupa a cozinha inteira.",
        ],
        choices: [
          { id: "continuar", label: "Ficar mais um pouco", to: "depois" },
        ],
      },
      silencio: {
        id: "silencio",
        title: "A segunda cadeira",
        text: [
          "Mara puxa uma cadeira. Não pergunta novamente. Tomás se levanta para buscar outro copo, agradecido por uma tarefa com começo e fim.",
          "Ficam olhando o reflexo da lâmpada na janela. Depois de algum tempo, ele aponta uma migalha que parece um barco. Mara discorda: é evidentemente um sapato. A discussão dura o bastante para que ambos se esqueçam de verificar as horas.",
          "— Obrigado por não tentar arrumar tudo — ele diz.\n— Eu mal consegui arrumar meu travesseiro.",
          "O silêncio seguinte já tem lugar para duas pessoas.",
        ],
        choices: [
          { id: "continuar", label: "Ficar mais um pouco", to: "depois" },
        ],
      },
      depois: {
        id: "depois",
        title: "Uma coisa para amanhã",
        text: [
          "Mara conta que também está acordada pensando em algo que deseja aprender. Parece absurdo começar agora; parece triste nunca começar. Tomás escuta sem anunciar que ela certamente será brilhante.",
          "— Se você quiser, amanhã a gente procura por onde começar.\n— Amanhã. Agora eu aceito um biscoito.",
          "O pacote tem exatamente dois. Pela primeira vez naquela noite, uma conta fecha sem esforço. O relógio muda de minuto.",
        ],
        variants: [
          {
            requires: ["flag:domingo.plano=receita"],
            text: [
              "O caderno de receitas está na prateleira baixa. Tomás aponta a anotação sobre a infraestrutura das panquecas. Mara quase ri de boca cheia. Há conversas que uma cozinha consegue guardar.",
            ],
          },
        ],
        choices: [
          {
            id: "papel",
            label: "Anotar uma pergunta para amanhã",
            to: "fim_papel",
            effects: { flags: { "insomnia.amanha": "pergunta" } },
          },
          {
            id: "dormir",
            label: "Deixar amanhã chegar sem uma tarefa nova",
            to: "fim_descanso",
            effects: { flags: { "insomnia.amanha": "descanso" } },
          },
        ],
      },
      fim_papel: {
        id: "fim_papel",
        title: "Não esquecer sem continuar pensando",
        text: [
          "Escrevem uma pergunta cada um. Não fazem uma lista de soluções. Dobram o papel e o prendem sob o pote de açúcar, onde a manhã poderá encontrá-lo.",
          "Tomás lava os copos enquanto Mara apaga a luz da sala. Na porta do quarto, ele pergunta se ela acha que vão dormir.",
          "— Não sei. Mas podemos tentar deitados.",
          "O papel fica na cozinha. As perguntas não desapareceram; apenas deixaram de precisar de alguém vigiando-as.",
        ],
        choices: [],
        ending: "Duas perguntas sob o açúcar",
      },
      fim_descanso: {
        id: "fim_descanso",
        title: "Sem dever de casa",
        text: [
          "Guardam o pacote vazio para lembrar de comprar biscoitos. É o único compromisso que a noite recebe.",
          "No corredor, Tomás comenta que talvez uma migalha possa ser um barco e um sapato. Mara considera isso uma concessão importante. Ele faz uma reverência tão pequena que quase não se distingue de um bocejo.",
          "Voltam ao quarto sem decidir o futuro. A luz da cozinha se apaga. Ainda se pode ouvir a chuva, agora de um lugar mais confortável.",
        ],
        choices: [],
        ending: "Uma noite sem respostas obrigatórias",
      },
    },
  },
  {
    id: "dificil",
    title: "Uma tarde difícil",
    subtitle: "Perguntar antes de tentar consertar",
    roman: "III",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "O casaco na cadeira",
        text: [
          "Mara chega a esta tarde imaginada sem vontade de contar como foi. Pendura o casaco pela metade; ele acaba no encosto da cadeira. Um projeto em que trabalhou bastante foi recusado. O motivo da recusa nem sequer ficou claro.",
          "Tomás quase começa uma frase sobre outras oportunidades. Para antes de terminá-la.\n— Você quer companhia, ajuda para pensar ou um tempo sozinha?",
          "A pergunta não torna o dia mais fácil. Torna a casa um lugar onde ela não precisa desempenhar também o papel de pessoa que está bem.",
        ],
        choices: [
          {
            id: "companhia",
            label: "Pedir companhia, sem discutir o problema",
            to: "companhia",
            effects: { flags: { "dificil.cuidado": "companhia" } },
          },
          {
            id: "espaco",
            label: "Pedir meia hora de silêncio e espaço",
            to: "espaco",
            effects: { flags: { "dificil.cuidado": "espaco" } },
          },
        ],
      },
      companhia: {
        id: "companhia",
        title: "A distância de um braço",
        text: [
          "Tomás se senta na outra ponta do sofá, perto o suficiente para ficar e longe o suficiente para não exigir nada. Mara encosta o pé no dele. Esse é o pedido de aproximação.",
          "Ele conta uma coisa banal: o mercado mudou todos os produtos de corredor. Foram precisos vinte minutos para encontrar o arroz. Ela protesta contra essa injustiça administrativa com um pouco mais de energia do que esperava ter.",
          "Depois ficam quietos. O projeto continua recusado. Tomás não transforma o pequeno sorriso dela numa prova de que a tristeza acabou.",
        ],
        variants: [
          {
            requires: ["flag:insomnia.escuta=silencio"],
            text: [
              "Ele se lembra da cozinha às duas da manhã. Naquela noite, também descobrira que companhia não precisava vir acompanhada de perguntas. Agora reconhece o pedido sem tomá-lo para si.",
            ],
          },
        ],
        choices: [
          { id: "continuar", label: "Deixar a tarde seguir", to: "depois" },
        ],
      },
      espaco: {
        id: "espaco",
        title: "Uma porta encostada",
        text: [
          "— Tudo bem. Vou estar na cozinha — ele responde. Não pergunta se ela tem certeza. Não passa no corredor três vezes para verificar se já foi perdoado por um erro que não cometeu.",
          "Mara fecha a porta do quarto sem bater. Tira os sapatos, deita sobre a colcha e observa uma pequena imperfeição na pintura. Durante alguns minutos, não precisa escolher palavras para ninguém.",
          "Quando volta, há água numa jarra e um prato separado. Tomás pergunta se ela quer comer agora ou depois. A meia hora foi recebida como um pedido, não como uma rejeição.",
        ],
        choices: [
          {
            id: "continuar",
            label: "Voltar quando estiver pronta",
            to: "depois",
          },
        ],
      },
      depois: {
        id: "depois",
        title: "O tamanho de hoje",
        text: [
          "O celular de Mara acende com outra mensagem sobre o projeto. Ela lê a primeira linha e coloca o aparelho virado para baixo.",
          "— Não sei se quero responder.\n— Precisa ser hoje?\n— Não.",
          "Ela percebe que parte do cansaço vinha de tratar cada pedido como urgente. Tomás oferece duas possibilidades pequenas. Nenhuma delas promete que amanhã será ótimo. Ambas cabem no pouco de tarde que ainda resta.",
        ],
        choices: [
          {
            id: "volta",
            label: "Dar uma volta curta pelo quarteirão",
            to: "fim_volta",
            effects: { flags: { "dificil.depois": "passeio" } },
          },
          {
            id: "sopa",
            label: "Esquentar a sopa e deixar o celular longe",
            to: "fim_sopa",
            effects: { flags: { "dificil.depois": "sopa" } },
          },
        ],
      },
      fim_volta: {
        id: "fim_volta",
        title: "Uma volta, apenas",
        text: [
          "Saem sem calcular passos. Na esquina, Mara decide que já caminhou o bastante. Voltam pelo mesmo caminho. Tomás não tenta esticar o passeio para justificar os sapatos.",
          "Ela para diante de uma planta crescendo numa rachadura e pergunta se ele sabe o nome. Ele não sabe. Por alguns segundos, o desconhecimento é uma coisa leve.",
          "Em casa, Mara pendura o casaco direito. O dia não foi recuperado nem desperdiçado. Terminou com espaço para ela estar cansada.",
        ],
        choices: [],
        ending: "O caminho de volta também conta",
      },
      fim_sopa: {
        id: "fim_sopa",
        title: "Dois pratos fundos",
        text: [
          "A sopa está mais grossa do que lembravam. Tomás acrescenta água; Mara acrescenta sal. Nenhum deles sabe se isso constitui uma nova receita.",
          "Comem na cozinha, sem abrir notícias. Antes de recolher o prato, ela diz que talvez peça explicações sobre a recusa no dia seguinte. Ele pergunta se gostaria de uma segunda leitura da mensagem. Talvez. Amanhã ela decide.",
          "O celular permanece na sala. Há uma tarefa que conseguiram terminar: jantar. Por hoje, basta.",
        ],
        choices: [],
        ending: "Uma refeição que não exige melhora",
      },
    },
  },
  {
    id: "conversa",
    title: "Uma discussão e uma reconciliação",
    subtitle: "Um sábado pertence a duas pessoas",
    roman: "IV",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "Sábado, aparentemente livre",
        text: [
          "Tomás convidou dois amigos para almoçar no sábado. Só depois avisou Mara. Ela tinha separado a manhã para trabalhar e a tarde para não fazer nada. Ele achou que, por ela estar em casa, não haveria problema.",
          "— Estar aqui não significa estar disponível — ela diz.\n— Eu posso cozinhar.\n— Não é só a comida.",
          "Ele percebe que respondeu a uma questão prática para escapar da outra. O convite pode ser alterado. Antes disso, precisam decidir como conversar sem transformar uma discordância num inventário de falhas.",
        ],
        choices: [
          {
            id: "agora",
            label: "Conversar agora, um de cada vez",
            to: "agora",
            effects: { flags: { "conversa.ritmo": "agora" } },
          },
          {
            id: "pausa",
            label: "Combinar uma pausa e voltar em vinte minutos",
            to: "pausa",
            effects: { flags: { "conversa.ritmo": "pausa" } },
          },
        ],
      },
      agora: {
        id: "agora",
        title: "O que cada um ouviu",
        text: [
          "Mara explica que ficou com a sensação de que seu descanso era um espaço vazio que podia ser ocupado. Tomás repete a frase com suas palavras, para verificar se entendeu. Dessa vez, entende.",
          "Ele conta que estava com saudade dos amigos e agiu depressa. Isso explica o convite; não o justifica.\n— Eu devia ter perguntado antes. Desculpa.\n— Eu não quero que você deixe de vê-los. Quero poder decidir sobre o meu sábado.",
          "O problema encolhe até o tamanho que realmente tem: um convite, um limite e uma conversa que chegou atrasada.",
        ],
        choices: [
          {
            id: "combinar",
            label: "Encontrar um acordo concreto",
            to: "acordo",
          },
        ],
      },
      pausa: {
        id: "pausa",
        title: "Vinte minutos combinados",
        text: [
          "Marcam a volta para as seis. Mara fica na sala; Tomás desce para levar a reciclagem. Nenhum deles usa a pausa para desaparecer ou obrigar o outro a procurá-lo.",
          "Às seis, ele volta à mesa. Mara começa dizendo que o convite não era uma prova de desamor. Ainda assim, foi uma decisão que a afetava e que ela não pôde tomar.",
          "— Eu estava me defendendo antes de ouvir — ele admite.\n— Eu também já estava discutindo o próximo convite, que nem existe.",
          "Conseguem finalmente falar deste sábado.",
        ],
        choices: [
          {
            id: "combinar",
            label: "Encontrar um acordo concreto",
            to: "acordo",
          },
        ],
      },
      acordo: {
        id: "acordo",
        title: "Uma mudança verificável",
        text: [
          "Tomás vai encontrar os amigos fora de casa. Mara manterá seus planos. Ele escreve para avisá-los; ela não precisa administrar a correção do convite que não fez.",
          "Resta uma pergunta menos elegante e mais útil: como evitar que a mesma distração se repita? Não procuram uma regra perfeita. Procuram um lembrete que ambos realmente usem.",
          "Há um calendário na parede e um bloco de papel ao lado do telefone. Mara oferece a caneta.",
        ],
        choices: [
          {
            id: "calendario",
            label: "Marcar também os períodos de descanso no calendário",
            to: "fim_calendario",
            effects: { flags: { "conversa.acordo": "calendario" } },
          },
          {
            id: "bilhete",
            label: "Deixar um bilhete: “Antes de convidar, perguntar”",
            to: "fim_bilhete",
            effects: { flags: { "conversa.acordo": "bilhete" } },
          },
        ],
      },
      fim_calendario: {
        id: "fim_calendario",
        title: "Descanso também ocupa espaço",
        text: [
          "No sábado, Mara escreve “manhã de trabalho; tarde minha”. Tomás acrescenta seu almoço fora. O calendário parece menos uma cobrança e mais um mapa de duas pessoas que nem sempre estarão no mesmo lugar.",
          "— Quer um abraço? — ele pergunta.\n— Quero. Ainda estou um pouco irritada.\n— As duas coisas cabem.",
          "O abraço não apaga a conversa. No dia seguinte, o calendário continua ali, fazendo o trabalho discreto de lembrar o que combinaram.",
        ],
        choices: [],
        ending: "Duas agendas na mesma parede",
      },
      fim_bilhete: {
        id: "fim_bilhete",
        title: "Uma frase sem assinatura",
        text: [
          "O bilhete fica perto do telefone. Não tem o nome de quem errou. A regra serve para os dois.",
          "Tomás coloca água para ferver. Mara pergunta se ainda sobrou aquele chá ruim. Ele responde que sobrou porque é ruim. Pela primeira vez desde o convite, riem da mesma coisa.",
          "A noite segue com algum cuidado, sem fingir que nada aconteceu. Na semana seguinte, antes de marcar uma visita, Mara aponta o bilhete. Tomás pega o calendário. A conversa deixou uma ferramenta.",
        ],
        choices: [],
        ending: "Um acordo pequeno, posto em uso",
      },
    },
  },
  {
    id: "mudanca",
    title: "A casa que muda conosco",
    subtitle: "Uma parede não é uma promessa de permanência",
    roman: "V",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "Duas amostras",
        text: [
          "A casa desta possibilidade envelheceu alguns anos. A estante cresceu; a mesa ganhou um risco que ninguém sabe explicar. Mara e Tomás querem pintar a parede da sala. Testaram duas cores em retângulos tão pequenos que ambas parecem corretas.",
          "— Talvez a gente devesse pintar só esses dois retângulos — ele sugere.\n— Uma reforma muito eficiente.",
          "Os móveis estão cobertos. Ao retirar um quadro, encontram a tinta antiga, mais clara que o restante. A parede guardou a forma de uma escolha que já não precisa continuar igual.",
        ],
        choices: [
          {
            id: "verde",
            label: "Escolher o verde que conversa com as plantas",
            to: "verde",
            effects: { flags: { "mudanca.parede": "verde" } },
          },
          {
            id: "barro",
            label: "Escolher o tom de barro que aquece a tarde",
            to: "barro",
            effects: { flags: { "mudanca.parede": "barro" } },
          },
        ],
      },
      verde: {
        id: "verde",
        title: "Uma sala mais perto do jardim",
        text: [
          "O verde parece escuro demais na primeira demão. Tomás se afasta para avaliar; pisa no jornal molhado e leva metade da proteção junto com o pé.",
          "Mara resgata o jornal. Ele resgata a dignidade com menos sucesso. Ao secar, a cor fica mais suave. As folhas da planta deixam de parecer objetos postos diante de uma parede e começam a fazer parte da sala.",
          "Mudam a poltrona de lugar. A luz chega ao livro por outro ângulo. A reforma criou um novo canto para uma atividade antiga.",
        ],
        choices: [
          { id: "guardar", label: "Voltar a colocar os livros", to: "livros" },
        ],
      },
      barro: {
        id: "barro",
        title: "Uma tarde dentro da tinta",
        text: [
          "O tom de barro devolve à sala uma luz que ela só costumava ter perto das cinco. Tomás declara que descobriram uma maneira razoável de guardar o sol. Mara pede que guarde também a tampa da lata.",
          "A cadeira azul agora parece mais azul. Eles a deslocam para perto da estante. A mudança abre uma faixa de chão onde antes esbarravam todas as manhãs.",
          "Não compraram uma casa nova. Apenas escutaram melhor as dificuldades da antiga. A lata fechada fica com um pouco de tinta para os inevitáveis retoques.",
        ],
        choices: [
          { id: "guardar", label: "Voltar a colocar os livros", to: "livros" },
        ],
      },
      livros: {
        id: "livros",
        title: "Na margem da página quarenta",
        text: [
          "Mara abre um livro enquanto o limpa. Encontra uma anotação sua que hoje considera injusta. Logo abaixo há uma pergunta de Tomás, escrita anos depois. Nenhum dos dois lembrava daquela conversa feita em tempos diferentes.",
          "— Eu pensava outra coisa — ela diz.\n— Ainda bem que você não precisou pedir autorização à página.",
          "Entre as folhas há um papel com a primeira disposição dos móveis. A mesa nem cabia. Podem guardar o desenho ou dar à página uma resposta nova.",
        ],
        variants: [
          {
            requires: ["flag:conversa.acordo=bilhete"],
            text: [
              "O bilhete sobre perguntar antes de convidar também precisa voltar ao lugar. A tinta mudou; esse acordo ainda lhes serve. Tomás limpa a moldura pequena antes de pendurá-lo.",
            ],
          },
          {
            requires: ["flag:conversa.acordo=calendario"],
            text: [
              "No calendário que retiraram da parede há períodos reservados para cada um. Mara o recoloca com cuidado. Mudar a sala não exige mudar todos os acordos que a tornaram habitável.",
            ],
          },
        ],
        choices: [
          {
            id: "mapa",
            label: "Guardar o desenho numa moldura pequena",
            to: "fim_mapa",
            effects: { flags: { "mudanca.memoria": "mapa" } },
          },
          {
            id: "anotar",
            label: "Escrever na margem o que pensam agora",
            to: "fim_nota",
            effects: { flags: { "mudanca.memoria": "nota" } },
          },
        ],
      },
      fim_mapa: {
        id: "fim_mapa",
        title: "O mapa de uma casa que não coube",
        text: [
          "O desenho fica na estante, não para provar como tudo começou, mas para conservar a graça de dois adultos convencidos de que medir era opcional.",
          "À noite, Tomás esbarra por hábito no lugar onde havia uma cadeira. Mara percebe e abre espaço para que ele tente de novo. Ri apenas quando ele também ri.",
          "Sentam na sala pintada. Os objetos conhecidos parecem ter outras opiniões sobre a luz. Há lugar para conhecê-los novamente.",
        ],
        choices: [],
        ending: "Uma casa que aprendeu outra disposição",
      },
      fim_nota: {
        id: "fim_nota",
        title: "Ainda há margem",
        text: [
          "Mara escreve uma resposta curta. Tomás acrescenta uma pergunta. Nenhum deles risca as frases antigas; deixa que a página mostre o movimento.",
          "O livro volta à estante com mais peso do que tinha ao sair, embora a balança não pudesse perceber. Do lado de fora, a tarde acaba. Dentro, a tinta ainda cheira a mudança.",
          "Antes de dormir, decidem onde pendurar o quadro. Escolhem outro lugar. A marca antiga ficou sob a cor nova, sem precisar ser negada.",
        ],
        choices: [],
        ending: "Uma conversa que continuou no papel",
      },
    },
  },
  {
    id: "velhinhos",
    title: "Quando formos velhinhos",
    subtitle: "Uma cadeira ao sol e uma história repetida",
    roman: "VI",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "O paradeiro dos óculos",
        text: [
          "Este futuro não é prometido; está apenas aberto sobre a mesa. Nele, o cabelo dos dois mudou de cor e a cadeira do jardim tem uma almofada nova. Tomás procura os óculos. Mara acompanha a investigação, que começa na cozinha e ameaça chegar à rua.",
          "— Você já procurou na cabeça?\n— Esse esconderijo é muito previsível.",
          "Os óculos estavam na cabeça. Ele os coloca no rosto e examina dois vasos vazios. Ainda querem plantar alguma coisa, embora agora prefiram trabalhar sentados.",
        ],
        choices: [
          {
            id: "flor",
            label: "Plantar uma flor para acompanhar a estação",
            to: "flor",
            effects: { flags: { "velhinhos.jardim": "flor" } },
          },
          {
            id: "erva",
            label: "Plantar uma erva para usar na cozinha",
            to: "erva",
            effects: { flags: { "velhinhos.jardim": "erva" } },
          },
        ],
      },
      flor: {
        id: "flor",
        title: "Uma exigência modesta",
        text: [
          "Mara escolhe uma muda de flores amarelas. Tomás lê as instruções em voz alta, usando os óculos finalmente recuperados. Descobrem que a planta pede mais sol do que aquele canto recebe.",
          "Em vez de discutir com a botânica, movem o vaso. Levam juntos, devagar. No novo lugar, será possível vê-lo da cozinha.",
          "— E se não florescer?\n— A gente aprende o nome das folhas.",
          "Colocam uma etiqueta com a data. O jardim não precisa parecer jovem para continuar começando coisas.",
        ],
        choices: [
          {
            id: "sentar",
            label: "Descansar nas cadeiras do jardim",
            to: "historia",
          },
        ],
      },
      erva: {
        id: "erva",
        title: "Uma horta de um vaso",
        text: [
          "Escolhem alecrim. Mara aperta uma folha entre os dedos e aproxima a mão de Tomás. Ele reconhece o cheiro antes de lembrar o nome.",
          "— Vai ficar bom nas batatas.\n— Você já está ameaçando uma planta que acabou de chegar.",
          "Enchem o vaso sentados, com um jornal no colo. Um pouco de terra vai para o chão. Agora sabem que varrer depois costuma ser mais simples do que impedir cada grão de cair. O alecrim fica ao alcance da janela da cozinha.",
        ],
        choices: [
          {
            id: "sentar",
            label: "Descansar nas cadeiras do jardim",
            to: "historia",
          },
        ],
      },
      historia: {
        id: "historia",
        title: "Essa eu já contei?",
        text: [
          "Tomás começa a contar a vez em que tentaram montar uma prateleira sem ler as instruções. Pergunta se Mara já ouviu. Ela responde que sim, inclusive porque segurava a outra ponta.",
          "Ele diz que isso lhe confere uma perspectiva parcial. Mara considera uma acusação grave e pede direito de resposta.",
          "As cadeiras estão na sombra. Não precisam voltar para dentro imediatamente. Podem disputar a versão do episódio ou deixar a história descansar junto com eles.",
        ],
        choices: [
          {
            id: "outra_versao",
            label: "Contar a versão de quem segurava a prateleira",
            to: "fim_historia",
            effects: { flags: { "velhinhos.tarde": "historia" } },
          },
          {
            id: "quietos",
            label: "Ficar olhando a muda recém-plantada",
            to: "fim_jardim",
            effects: { flags: { "velhinhos.tarde": "jardim" } },
          },
        ],
      },
      fim_historia: {
        id: "fim_historia",
        title: "Uma testemunha muito envolvida",
        text: [
          "Na versão de Mara, a prateleira estava direita e a casa, torta. Tomás aceita a hipótese por alguns segundos; depois pergunta por que o nível discordou.",
          "Eles riem. A lembrança inventada por esse futuro já foi contada de várias maneiras. Nenhuma precisa vencer para que a tarde seja boa.",
          "Quando entram, Tomás oferece o braço. Mara segura porque quer, não porque ele decidiu que ela precisa. Antes de fechar a porta, ambos olham para o vaso.",
        ],
        choices: [],
        ending: "Duas versões e uma muda nova",
      },
      fim_jardim: {
        id: "fim_jardim",
        title: "Uma história pode esperar",
        text: [
          "Tomás para no meio da frase e acompanha o olhar de Mara. Um inseto percorre a borda do vaso. Ela abre a mão sobre o braço da cadeira; ele pousa a sua ao lado, deixando que os dedos se encontrem.",
          "Depois de um tempo, Mara pergunta se a prateleira chegou a cair. Ele diz que não, mas que nunca deixou de ameaçar.",
          "Entram para fazer café. A história continua disponível. A muda ficou do lado de fora, ocupada em um trabalho que ninguém pode apressar.",
        ],
        choices: [],
        ending: "A companhia que não precisa preencher o silêncio",
      },
    },
  },
  {
    id: "tarde",
    title: "A tarde em que nada aconteceu",
    subtitle: "Uma fotografia sem ocasião especial",
    roman: "VII",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "O ruído de uma página",
        text: [
          "É uma tarde possível, sem data marcada. Mara lê perto da janela. Tomás tenta descobrir qual dos pés da mesa é responsável pelo balanço. Não parece contrariado; parece interessado no assunto.",
          "A janela está entreaberta. A chuva parou e o ar ainda tem o cheiro de antes. Mara encontra uma frase de que gosta, mas decide terminar o parágrafo antes de mostrá-la.",
          "Há uma câmera sobre a estante. Nada merece uma fotografia no sentido habitual da palavra. Talvez seja justamente por isso que ela a pega.",
        ],
        choices: [
          {
            id: "janela",
            label: "Fotografar a luz na janela",
            to: "janela",
            effects: { flags: { "tarde.foto": "janela" } },
          },
          {
            id: "cadeira",
            label: "Fotografar a cadeira com o livro aberto",
            to: "cadeira",
            effects: { flags: { "tarde.foto": "cadeira" } },
          },
        ],
      },
      janela: {
        id: "janela",
        title: "Um pouco de luz sobre a madeira",
        text: [
          "A fotografia guarda a janela, a ponta de uma cortina e o desenho irregular que a água deixou no vidro. Ninguém aparece. Ainda assim, há duas pessoas por perto: uma atrás da câmera, outra dizendo que descobriu o pé culpado.",
          "Mara mostra a imagem. Tomás comenta que a janela parece estar esperando alguma coisa.\n— Está aberta. Isso não significa que esteja esperando.",
          "Ele considera a diferença enquanto dobra um pedaço de papel para colocar sob a mesa. A luz muda antes que concordem.",
        ],
        choices: [
          {
            id: "voltar",
            label: "Guardar a fotografia e voltar ao livro",
            to: "livro",
          },
        ],
      },
      cadeira: {
        id: "cadeira",
        title: "O lugar de quem acabou de levantar",
        text: [
          "A cadeira conserva a pequena depressão da almofada. Sobre o assento, o livro aberto parece um telhado baixo. Mara fotografa sem arrumar a manta que caiu de lado.",
          "Tomás olha a imagem.\n— Parece que você saiu para buscar alguma coisa.\n— Saí. A câmera.",
          "Não é necessário haver mistério. A cadeira está vazia porque alguém se levantou e pode voltar a sentar. Mara decide conservar a foto assim, sem melhorar a composição. A manta torta sabe onde estava.",
        ],
        choices: [
          {
            id: "voltar",
            label: "Guardar a fotografia e voltar ao livro",
            to: "livro",
          },
        ],
      },
      livro: {
        id: "livro",
        title: "Uma frase emprestada",
        text: [
          "Mara reencontra o parágrafo. Chama Tomás, que finalmente estabilizou a mesa. Ele vem trazendo a tira de papel que sobrou, orgulhoso demais de uma intervenção quase invisível.",
          "Ela poderia ler a frase em voz alta. Poderia apenas guardar a página para mostrar depois. A tarde permite que uma coisa boa permaneça pequena, sem virar programa.",
          "Lá fora, uma pessoa assobia duas notas e esquece a terceira. Nenhum dos dois comenta. A mesa, enfim, não balança.",
        ],
        choices: [
          {
            id: "ler",
            label: "Ler o parágrafo em voz alta",
            to: "fim_leitura",
            effects: { flags: { "tarde.gesto": "leitura" } },
          },
          {
            id: "marcar",
            label: "Usar a tira de papel como marcador",
            to: "fim_marca",
            effects: { flags: { "tarde.gesto": "marcador" } },
          },
        ],
      },
      fim_leitura: {
        id: "fim_leitura",
        title: "Um parágrafo para dois",
        text: [
          "Mara lê devagar. Tropeça numa palavra comprida, volta e tenta outra vez. Tomás pede para ouvir a última frase de novo. Depois diz o que ela lhe fez lembrar. Não é o que Mara tinha pensado.",
          "Conversam durante alguns minutos, sem transformar a diferença numa disputa de interpretação. O livro comporta os dois.",
          "A fotografia fica na prateleira. Quando a tarde termina, não há uma história surpreendente para contar. Há apenas uma página que agora abre de maneira um pouco diferente.",
        ],
        choices: [],
        ending: "A mesma página, duas leituras",
      },
      fim_marca: {
        id: "fim_marca",
        title: "O papel que sobrou",
        text: [
          "Tomás oferece a tira de papel com uma solenidade exagerada. Mara a aceita como se fosse um objeto raro. Na ponta, escreve: “Para ler depois”.",
          "Voltam às próprias ocupações. De vez em quando, um deles olha para o outro e encontra alguém inteiramente ocupado em ser uma pessoa. Isso não os afasta.",
          "A fotografia fica na prateleira, o marcador no livro e a mesa, firme. Nenhuma dessas coisas precisa explicar a tarde. Elas estiveram lá.",
        ],
        choices: [],
        ending: "Um lugar guardado na página",
      },
    },
  },
  {
    id: "mesa",
    title: "A mesa preparada para dois",
    subtitle: "Um lugar vazio porque ainda vai ser ocupado",
    roman: "VIII",
    kind: "home",
    art: "house",
    start: "inicio",
    nodes: {
      inicio: {
        id: "inicio",
        title: "Antes de alguém chegar",
        text: [
          "A cozinha está pronta para uma cena que ainda não aconteceu. Existem dois pratos, dois guardanapos e uma cadeira ligeiramente afastada. O lugar vazio não anuncia uma perda. É apenas um lugar disponível.",
          "Por um momento, você escuta passos que podem ser de Mara, de Tomás ou de ninguém: esta casa não sabe antecipar quem seremos. A água esquenta. Do lado de fora, chove sem pressa.",
          "Sobre a bancada há quatro coisas pequenas. Você pode escolher uma para a mesa. Ela permanecerá aqui quando sair e acompanhará o livro que ainda está por abrir. Não será uma promessa sobre o futuro; será uma maneira de preparar espaço para ele.",
        ],
        choices: [
          {
            id: "flor",
            label: "Uma flor, num copo simples",
            to: "flor",
            effects: { flags: { "mesa.objeto": "flor" } },
          },
          {
            id: "livro",
            label: "Um livro com uma página marcada",
            to: "livro",
            effects: { flags: { "mesa.objeto": "livro" } },
          },
          {
            id: "xicara",
            label: "Uma xícara que cabe bem nas mãos",
            to: "xicara",
            effects: { flags: { "mesa.objeto": "xicara" } },
          },
          {
            id: "vela",
            label: "Uma vela pequena, longe da cortina",
            to: "vela",
            effects: { flags: { "mesa.objeto": "vela" } },
          },
        ],
      },
      flor: {
        id: "flor",
        title: "Uma flor não precisa saber durar",
        text: [
          "Você coloca a flor num copo e acrescenta um pouco de água. Ela se inclina para um lado. Em vez de corrigir, move o copo para que ninguém esbarre nele ao servir a comida.",
          "Nessa versão, alguém entra e pergunta de onde veio. A outra pessoa responde que estava ali, esperando um recipiente. A conversa muda para o mercado, para uma janela aberta, para o que cada um fez durante o dia.",
          "A flor permanece no centro da mesa. Vai durar o que durar. O cuidado pode ser renovado amanhã, com água limpa.",
        ],
        choices: [],
        ending: "Água para a flor de amanhã",
      },
      livro: {
        id: "livro",
        title: "Uma conversa que pode começar depois",
        text: [
          "Você coloca o livro ao lado dos pratos, distante o bastante para escapar da água. Há uma página marcada. Ninguém precisa lê-la antes do jantar.",
          "Nessa versão, uma pessoa aponta a capa e pergunta se é bom. A outra demora um pouco para responder. “Ainda estou descobrindo.” É uma resposta permitida naquela mesa.",
          "O livro permanece ali, disponível para uma conversa ou para um silêncio acompanhado. A página pode esperar até que ambos tenham vontade. O lugar vazio continua sendo um convite, nunca uma cobrança.",
        ],
        choices: [],
        ending: "Uma página sem hora marcada",
      },
      xicara: {
        id: "xicara",
        title: "O calor que cabe nas mãos",
        text: [
          "Você escolhe a xícara pela alça confortável. A cor é um detalhe secundário; a mão sabe por quê. Coloca-a perto da cadeira afastada.",
          "Nessa versão, alguém chega cansado e segura a bebida antes de conseguir contar o dia. A outra pessoa espera. Depois surge uma história curta, talvez engraçada, talvez difícil. Ninguém pergunta por que demorou tanto para começar.",
          "A xícara permanece na mesa. Um objeto capaz de oferecer calor não precisa também fornecer respostas. Quando esvaziar, poderá ser lavado e usado de novo.",
        ],
        choices: [],
        ending: "Um lugar para pousar as mãos",
      },
      vela: {
        id: "vela",
        title: "Luz suficiente",
        text: [
          "Você acende a vela e afasta o castiçal da cortina. A chama ilumina apenas uma pequena parte da mesa. Não tenta competir com a lâmpada.",
          "Nessa versão, alguém pergunta se há uma ocasião especial. A outra pessoa olha os pratos e responde: “A comida está pronta”. Parece uma ocasião razoável. Sentam antes que esfrie.",
          "A vela permanece como detalhe escolhido, mas será apagada quando deixarem a cozinha. Cuidar também é lembrar dessas coisas. O futuro não recebeu uma garantia; recebeu uma mesa preparada com atenção.",
        ],
        choices: [],
        ending: "Uma luz que pode ser apagada com cuidado",
      },
    },
  },
];
