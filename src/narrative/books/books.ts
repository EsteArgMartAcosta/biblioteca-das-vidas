import type { Story } from "../types";

export const books: Story[] = [
  {
    id: "farol",
    title: "O Farol no Fim do Mundo",
    subtitle: "Uma carta chega antes de ser escrita.",
    roman: "I",
    kind: "book",
    art: "lighthouse",
    start: "margem",
    object: "bussola",
    nodes: {
      margem: {
        id: "margem",
        title: "A margem que faltava",
        text: [
          "Mara desenhava ilhas por encomenda. Não eram ilhas existentes: eram lugares que alguém teria encontrado se o vento soprasse noutra direção. Certa manhã, o mar deixou uma carta debaixo da porta. O papel estava seco; a maçaneta, coberta de sal.",
          "“A porta do seu ateliê é azul?” Ela escreveu sim. Antes que a tinta secasse, surgiu outra linha: “Então ainda tenho tempo. Amanhã, não acenda o farol”. A assinatura dizia Tomás. Na parede, a única bússola da casa apontava para a carta, contrariando todos os mapas.",
        ],
        choices: [
          {
            id: "testar",
            label: "Pedir uma prova antes de confiar.",
            to: "prova",
            effects: { flags: { "farol.confianca": "prova" } },
          },
          {
            id: "avisar",
            label: "Levar o aviso imediatamente ao porto.",
            to: "aviso",
            effects: { flags: { "farol.confianca": "gesto" } },
          },
        ],
      },
      prova: {
        id: "prova",
        title: "O peso de uma resposta",
        text: [
          "“Diga alguma coisa que eu possa verificar.” A resposta demorou até a água da chaleira esfriar: “Atrás do seu armário há um mapa sem margem”. Mara afastou o móvel. Encontrou uma folha que nunca vira e, no rodapé, sua própria letra envelhecida.",
          "Escreveu que aquilo não provava boa intenção. “Não”, respondeu Tomás. “Só prova que alguém conhece o armário.” A honestidade a convenceu mais que a adivinhação. Enquanto procuravam outras provas, um pescador voltou com a vela rasgada: havia pedras novas na entrada da baía.",
        ],
        choices: [
          { id: "seguir", label: "Desenhar as pedras no mapa.", to: "porto" },
        ],
      },
      aviso: {
        id: "aviso",
        title: "As pedras novas",
        text: [
          "O capitão riu da carta, mas levou a sério o medo dela. Mandou duas embarcações sondarem a entrada. Voltaram antes do escurecer: onde ontem havia água funda, agora existia um recife. Os barcos maiores ficaram no cais.",
          "Mara escreveu: “Você salvou gente que não conhece”. Tomás respondeu: “Eu só vi a luz apagar do outro lado”. O papel revelou o contorno de um farol. Não era o dela. A luz das duas torres atravessava, por uma noite, o mesmo pedaço de mar. Quando coincidiam, confundiam os navegantes.",
        ],
        choices: [
          { id: "seguir", label: "Procurar uma rota segura.", to: "porto" },
        ],
      },
      porto: {
        id: "porto",
        title: "Uma carta não é uma ponte",
        text: [
          "Tomás guardava um farol no extremo de outro oceano. Encontrava cartas dentro das conchas, todas de pessoas que desistiram de enviá-las. A de Mara era a primeira a responder. Às vezes chegava antes da pergunta; às vezes, meses depois. Nenhuma data era confiável.",
          "“E se a resposta que espero nunca vier?”, ela perguntou. “Teremos de viver enquanto isso.” Mara abriu a janela. Havia trabalho esperando, um vizinho pedindo ajuda e pão acabando. Antes de cuidar disso, precisava decidir o que fazer com a descoberta.",
        ],
        choices: [
          {
            id: "publica",
            label: "Convidar o porto a construir um correio entre margens.",
            to: "correio",
            effects: { flags: { "farol.carta": "publica" } },
          },
          {
            id: "reservada",
            label: "Manter a correspondência entre os dois por enquanto.",
            to: "dobras",
            effects: { flags: { "farol.carta": "reservada" } },
          },
        ],
      },
      correio: {
        id: "correio",
        title: "A oficina das cartas",
        text: [
          "A notícia trouxe mais perguntas do que envelopes. Uma mulher queria encontrar o irmão; uma criança queria saber se peixes dormiam. Mara explicou que o correio não prometia destinatários. Mesmo assim, abriram uma mesa no porto.",
          "Tomás recebeu a primeira remessa três semanas depois. A carta sobre os peixes chegou a uma professora. A outra voltou sem resposta. Na oficina, aprenderam a registrar as devoluções sem chamar ninguém de esquecido. Entre tanto papel, Mara e Tomás passaram a escrever também sobre o almoço. Parecia uma informação necessária.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Guardar um envelope para a próxima maré.",
            to: "travessia",
          },
        ],
      },
      dobras: {
        id: "dobras",
        title: "Aquilo que cabe num envelope",
        text: [
          "Mara fechou a gaveta e voltou aos mapas. Não queria oferecer a uma cidade uma promessa que ainda não entendia. Nas cartas, ela e Tomás trocaram receitas, dúvidas e pequenas irritações. Ele fazia café forte demais. Ela tinha o hábito de responder primeiro à pergunta mais difícil.",
          "Uma noite, nenhuma palavra apareceu. Outra também não. Na terceira, chegou: “Estive doente. Não era silêncio contra você”. Mara percebeu quanto havia preenchido o vazio com suposições. Escreveu: “Na próxima vez, pode mandar só um ponto”. Veio um ponto. Depois, dois.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Deixar espaço para a próxima resposta.",
            to: "travessia",
          },
        ],
      },
      travessia: {
        id: "travessia",
        title: "A agulha",
        text: [
          "No solstício, uma faixa de água imóvel ligou os oceanos. A bússola apontou para ela. Tomás propôs encontrar-se numa ilha intermediária; Mara tinha um barco pequeno e um trabalho que poderia terminar na volta.",
          "“Não consigo garantir que o caminho permaneça”, ele avisou. “Nem eu.” Não era preciso atravessar para provar o valor das cartas. Também não era preciso ficar por medo de estragar o que já existia. Mara colocou a bússola sobre a mesa e tomou uma decisão que nenhum mapa podia tomar por ela.",
        ],
        choices: [
          {
            id: "atravessar",
            label:
              "Combinar a travessia, levando provisões e uma rota de volta.",
            to: "ilha",
            effects: {
              flags: { "farol.final": "travessia" },
              items: ["bussola"],
            },
          },
          {
            id: "margens",
            label: "Continuar nas próprias margens e manter o correio.",
            to: "margens",
            effects: { flags: { "farol.final": "cartas" }, items: ["bussola"] },
          },
        ],
      },
      ilha: {
        id: "ilha",
        title: "O rosto depois da letra",
        text: [
          "Na ilha, Tomás foi menor que a silhueta imaginada e bem pior ao atracar. Mara segurou a corda. Os dois riram do excesso de solenidade com que haviam preparado o encontro. Passaram a tarde consertando uma vela e descobrindo o intervalo entre suas vozes.",
          "Voltaram antes que a passagem fechasse. Não tinham decidido onde morar. Tinham combinado a próxima carta. No bolso de Mara, a bússola virou-se para uma direção sem terra. Dentro do vidro, surgiu uma inscrição minúscula: “Onde ainda cabe uma resposta”.",
        ],
        choices: [],
        ending: "A ilha entre duas margens",
      },
      margens: {
        id: "margens",
        title: "O mar aprende um endereço",
        text: [
          "Mara enviou um mapa da baía corrigido. Tomás respondeu com o desenho da própria janela. Continuaram distantes, ocupados, às vezes atrasados. O valor da correspondência não dependeu de uma chegada que nenhum dos dois prometera.",
          "Anos depois, uma aprendiz perguntou para onde apontava aquela bússola. Mara tentou dizer “para alguém”, mas a agulha mudou de direção quando a menina abriu um envelope em branco. No vidro, apareceu uma frase: “Onde ainda cabe uma resposta”. A aprendiz começou a escrever.",
        ],
        choices: [],
        ending: "O correio das duas margens",
      },
    },
  },
  {
    id: "tempo",
    title: "A Cidade Onde o Tempo Parou",
    subtitle: "Uma tarde perfeita demais para durar.",
    roman: "II",
    kind: "book",
    art: "clock",
    start: "tarde",
    object: "relogio",
    nodes: {
      tarde: {
        id: "tarde",
        title: "Dezessete e quarenta e dois",
        text: [
          "O copo caía todos os dias às dezessete e quarenta e dois. Antes de tocar o chão, reaparecia na mão da garçonete. A cidade repetia uma tarde amarela. Seus habitantes caminhavam, compravam, discutiam; ao primeiro badalar, esqueciam. Só Mara, restauradora de relógios, e Tomás, padeiro, conservavam o dia anterior.",
          "Na vigésima repetição, Tomás já sabia fazer um pão quase perfeito. Na trigésima, queimou todos de propósito. “Até errar está ficando igual.” Mara lhe mostrou um relógio encontrado sob a praça. Tinha vinte e cinco marcas. A última estava vazia.",
        ],
        choices: [
          {
            id: "anotar",
            label: "Registrar os pequenos acontecimentos que o ciclo apaga.",
            to: "caderno",
            effects: { flags: { "tempo.memoria": "registro" } },
          },
          {
            id: "escutar",
            label: "Ouvir os moradores antes do próximo badalar.",
            to: "vozes",
            effects: { flags: { "tempo.memoria": "vozes" } },
          },
        ],
      },
      caderno: {
        id: "caderno",
        title: "Uma cidade a lápis",
        text: [
          "Mara anotou o resultado do jogo na esquina, a frase de uma criança, o nome que uma senhora ensaiava dizer ao telefone. O caderno atravessava os reinícios porque estava guardado junto ao relógio defeituoso.",
          "Ao ler as notas, Tomás encontrou uma conversa consigo mesmo: em certo ciclo, negara pão fiado a um homem. No seguinte, oferecera. “Qual deles sou eu?” Mara apontou as duas linhas. Guardaram o caderno na bolsa. Não devolvia as tardes perdidas, mas impedia que virassem uma única tarde, sem diferenças.",
        ],
        choices: [
          { id: "seguir", label: "Descer sob a praça.", to: "maquina" },
        ],
      },
      vozes: {
        id: "vozes",
        title: "O que se pode ouvir numa tarde",
        text: [
          "Perguntaram aos moradores o que fariam amanhã. Uma menina queria aprender a nadar. Um viúvo queria que amanhã demorasse mais um pouco. A garçonete planejava pedir demissão e achou estranho ninguém acreditar que ela pudesse gostar de outro trabalho.",
          "Tomás repetiu essas respostas em voz alta até decorá-las. Mara pensara na cidade como um mecanismo avariado; agora ouvia desejos incompatíveis dentro dela. A tarde parada protegia algumas pessoas de uma despedida, mas impedia todas as outras de chegar. Desceram à máquina levando esse desacordo, sem tentar resolvê-lo por votação.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Levar as vozes até a máquina.",
            to: "maquina",
          },
        ],
      },
      maquina: {
        id: "maquina",
        title: "O pêndulo debaixo da praça",
        text: [
          "A máquina havia sido construída depois de uma enchente. Seu projeto prometia conservar “a última tarde sem perdas”. Uma placa trazia os nomes de quem a financiara. Não havia vilão escondido: havia medo transformado em engenharia.",
          "Mara encontrou duas falhas. O pêndulo não conseguia avançar porque recebia ordens para voltar; a engrenagem de retorno sustentava parte do abrigo subterrâneo. Desligar tudo de uma vez faria o teto ceder. Antes de tocar nos controles, precisavam preparar a cidade para a mudança.",
        ],
        choices: [
          {
            id: "abrigo",
            label:
              "Reforçar o abrigo para que ninguém precise deixá-lo às pressas.",
            to: "escoras",
            effects: { flags: { "tempo.preparo": "abrigo" } },
          },
          {
            id: "praca",
            label: "Organizar uma mudança coletiva para a parte alta.",
            to: "mudanca",
            effects: { flags: { "tempo.preparo": "praca" } },
          },
        ],
      },
      escoras: {
        id: "escoras",
        title: "O trabalho que recomeça",
        text: [
          "Os materiais voltavam ao lugar no fim de cada ciclo. Só peças marcadas com o relógio permaneciam. Mara passou noites gravando pequenos círculos em vigas; Tomás transportou madeira numa carroça emprestada. Aprenderam a trocar de tarefa quando os braços cansavam.",
          "No último reforço, discutiram por uma medida errada. Ficaram uma hora sem falar. Depois Tomás trouxe água e perguntou qual marca deveria corrigir. Não resolveram a fadiga com um discurso. Corrigiram a medida. O abrigo ficou seguro, com um teto remendado que todos poderiam ver.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Voltar ao painel de controle.",
            to: "amanha",
          },
        ],
      },
      mudanca: {
        id: "mudanca",
        title: "Subir com aquilo que importa",
        text: [
          "Era difícil convencer alguém a sair de uma casa que, para essa pessoa, nunca havia estado ameaçada. Mara fez um desenho do teto; Tomás assou pão suficiente para uma tarde inteira de conversa. A mudança aconteceu por etapas, em carroças e carrinhos de feira.",
          "Uma senhora se recusou a deixar uma roseira. Levaram também a terra. A praça alta ficou cheia de colchões, mesas e vasos. Os moradores chamaram aquilo de festival. Talvez fosse a única palavra disponível para uma despedida que ainda não conseguiam lembrar.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Retornar enquanto a praça está pronta.",
            to: "amanha",
          },
        ],
      },
      amanha: {
        id: "amanha",
        title: "A vigésima quinta marca",
        text: [
          "A última marca do relógio não era uma hora adicional. Era a posição reservada ao próximo movimento, ainda sem número. Mara encaixou o mostrador no painel. A máquina ofereceu dois procedimentos seguros: libertar o pêndulo de uma vez ou devolver um minuto a cada badalada.",
          "Tomás pensou no pão que poderia queimar para sempre, sem recomeço. Mara pensou nas conversas que terminariam antes de ficar perfeitas. “Vai dar saudade desta luz”, ele disse. Ela concordou. Sentir falta não tornava aquela tarde um lugar onde fosse possível morar.",
        ],
        choices: [
          {
            id: "inteiro",
            label: "Devolver à cidade seu próximo dia inteiro.",
            to: "dia",
            effects: {
              flags: { "tempo.final": "inteiro" },
              items: ["relogio"],
            },
          },
          {
            id: "aos_poucos",
            label: "Devolver o movimento aos poucos, acompanhando a transição.",
            to: "minutos",
            effects: {
              flags: { "tempo.final": "gradual" },
              items: ["relogio"],
            },
          },
        ],
      },
      dia: {
        id: "dia",
        title: "O copo chega ao chão",
        text: [
          "O copo se quebrou. A garçonete xingou, pediu uma vassoura e começou a recolher os cacos. Em volta, ninguém compreendia o tamanho do acontecimento. Mara chorou de alívio; Tomás achou melhor não explicar.",
          "Veio a noite. Pela manhã, o pão saiu um pouco escuro e foi vendido assim mesmo. Na vitrine da oficina, Mara deixou o relógio de vinte e cinco marcas. A posição vazia agora se movia junto com as outras. Não guardava uma tarde: abria espaço para a seguinte.",
        ],
        choices: [],
        ending: "A manhã seguinte",
      },
      minutos: {
        id: "minutos",
        title: "Um minuto de cada vez",
        text: [
          "Na primeira badalada, a sombra da praça avançou a largura de um dedo. Os moradores perceberam o estranho retorno e, depois, a diferença. Durante uma semana, puderam se despedir daquela luz sem precisar fingir que não gostavam dela.",
          "Mara e Tomás dormiram em turnos ao lado do painel. No oitavo dia, a máquina ficou desnecessária. Transformaram a sala numa oficina comunitária. O relógio voltou ao bolso de Mara, com a última marca em branco. Havia coisas que só poderiam receber nome depois de acontecer.",
        ],
        choices: [],
        ending: "A cidade reaprende a passar",
      },
    },
  },
  {
    id: "estrelas",
    title: "O Observatório das Estrelas Ausentes",
    subtitle: "Às vezes, o que falta também é um dado.",
    roman: "III",
    kind: "book",
    art: "observatory",
    start: "erro",
    object: "esfera",
    nodes: {
      erro: {
        id: "erro",
        title: "O espaço entre dois pontos",
        text: [
          "Mara conferiu o telescópio três vezes antes de acordar Tomás. Uma estrela faltava no catálogo da noite. Não estava apagada atrás de uma nuvem: sua posição havia desaparecido também das fotografias antigas. Nessa civilização ficcional, placas de cristal conservavam imagens que mudavam junto com o céu. Era uma propriedade daquele mundo, não uma lei do nosso.",
          "Tomás chegou com meias diferentes. “Instrumento ou estrela?” Ela não sabia. As regiões vazias formavam intervalos regulares. Padrão não era explicação. Antes de anunciar qualquer descoberta, precisavam decidir que dúvida investigar primeiro.",
        ],
        choices: [
          {
            id: "calibrar",
            label: "Testar o instrumento com observações independentes.",
            to: "teste",
            effects: { flags: { "estrelas.metodo": "calibracao" } },
          },
          {
            id: "comparar",
            label: "Comparar as ausências com os arquivos de outras épocas.",
            to: "arquivo",
            effects: { flags: { "estrelas.metodo": "arquivo" } },
          },
        ],
      },
      teste: {
        id: "teste",
        title: "A estrela e o parafuso",
        text: [
          "Passaram a noite trocando lentes e girando o aparelho. Encontraram, de fato, um parafuso frouxo. Tomás parecia quase ofendido: “Seria tão conveniente culpar isto”. Corrigiram o defeito e perderam duas horas repetindo as medidas. As ausências continuaram.",
          "Um observatório do outro hemisfério confirmou o resultado. Isso eliminava uma explicação, sem provar as demais. Mara escreveu a distinção no quadro. Ao nascer do dia, ambos tinham menos certezas e um dado melhor. O pequeno parafuso ficou sobre a mesa como lembrança de uma hipótese que merecera ser testada.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Desenhar apenas o que as medidas permitem.",
            to: "padrao",
          },
        ],
      },
      arquivo: {
        id: "arquivo",
        title: "O registro que discorda",
        text: [
          "Nos arquivos, encontraram descrições incompatíveis da mesma região. Uma placa mostrava seis estrelas; outra, cinco. Iara, responsável pelo acervo, não jogara nenhuma fora. “Seria muito fácil ter um arquivo impecável apagando tudo que nos dá trabalho.”",
          "As datas não explicavam a diferença. A disposição das ausências, porém, se repetia em escalas diferentes. Mara marcou o padrão a lápis para não o confundir com uma conclusão. Tomás encontrou uma etiqueta solta: “Possibilidade encerrada”. Não havia nome de autora nem observatório de origem.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Levar a etiqueta e as duas versões.",
            to: "padrao",
          },
        ],
      },
      padrao: {
        id: "padrao",
        title: "Um desenho não é uma ordem",
        text: [
          "Tomás ligou os pontos ausentes. Mara desfez algumas linhas: qualquer conjunto de estrelas permitiria inventar uma figura. Em vez disso, compararam as distâncias relativas, mantendo o mesmo critério em todas as placas. Surgiu um arranjo recorrente: dois círculos, uma linha curta e um espaço central.",
          "A hipótese de trabalho era delicada. Talvez as placas registrassem possibilidades que haviam deixado de existir, não estrelas físicas destruídas. Uma hipótese daquele arquivo imaginário, ainda cheia de lacunas. O conselho exigia um comunicado. Eles precisavam escolher como tornar o resultado público.",
        ],
        choices: [
          {
            id: "abrir",
            label: "Publicar dados e dúvidas para que outros possam contestar.",
            to: "debate",
            effects: { flags: { "estrelas.comunicacao": "aberta" } },
          },
          {
            id: "convidar",
            label: "Convidar primeiro uma equipe independente para a revisão.",
            to: "revisao",
            effects: { flags: { "estrelas.comunicacao": "revisada" } },
          },
        ],
      },
      debate: {
        id: "debate",
        title: "O céu compartilhado",
        text: [
          "A divulgação trouxe correções úteis, cartas impacientes e um jornal anunciando que os pesquisadores haviam encontrado o endereço do futuro. Mara escreveu uma resposta sem metáforas. Não haviam encontrado tal endereço; não sabiam sequer se a hipótese sobreviveria ao mês seguinte.",
          "Entre as contribuições chegou o desenho de uma criança. Ela vira no padrão uma mesa com duas xícaras. Tomás pendurou a folha longe do quadro de resultados. “Pode ficar aqui como desenho”, disse. Não precisava virar evidência para ter valor.",
        ],
        choices: [
          { id: "seguir", label: "Continuar a observação.", to: "ultima" },
        ],
      },
      revisao: {
        id: "revisao",
        title: "Uma cadeira a mais",
        text: [
          "A pesquisadora convidada passou três dias procurando um erro. Encontrou uma escolha de escala mal justificada, obrigando-os a refazer as comparações. O padrão mais forte permaneceu; dois menores desapareceram. Tomás preparou café para os três, desta vez sem derramar nos cálculos.",
          "Ao juntar as xícaras, Mara reconheceu sobre a mesa a disposição que vinha estudando. Riu da própria vontade de enxergar mensagens. A colega sugeriu registrar a semelhança como observação pessoal, separada do artigo. Uma boa descoberta podia conviver com uma imagem bonita sem se confundir com ela.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Refazer o mapa com os dados revistos.",
            to: "ultima",
          },
        ],
      },
      ultima: {
        id: "ultima",
        title: "Uma luz que cabe na mão",
        text: [
          "Na madrugada seguinte, uma placa se desprendeu do suporte. Ao tocá-la, Mara sentiu sua superfície fechar-se numa esfera. Dentro, uma estrela conservava o brilho anterior ao desaparecimento. A transformação não se repetiu com nenhuma outra placa.",
          "O conselho ofereceu uma vitrine; Iara ofereceu uma mesa de consulta. Tomás recusou escolher por Mara. “Você a encontrou. Mas outras pessoas também terão perguntas.” A esfera não resolvia o mecanismo das ausências. Definia, porém, uma responsabilidade concreta: decidir como cuidar de algo que ninguém sabia substituir.",
        ],
        choices: [
          {
            id: "consulta",
            label: "Criar um arquivo acessível com protocolos de cuidado.",
            to: "acesso",
            effects: {
              flags: { "estrelas.final": "arquivo" },
              items: ["esfera"],
            },
          },
          {
            id: "viagem",
            label:
              "Levar a esfera numa expedição de observações compartilhadas.",
            to: "estrada",
            effects: {
              flags: { "estrelas.final": "expedicao" },
              items: ["esfera"],
            },
          },
        ],
      },
      acesso: {
        id: "acesso",
        title: "O lugar das perguntas",
        text: [
          "Construíram uma sala de consulta, com horários, luvas e uma janela comum. Mara passou a manhã explicando a uma visitante tudo que ainda não sabiam. No fim, ela agradeceu justamente por isso.",
          "Tomás acrescentou uma cadeira. Iara registrou a esfera sem escrever “prova do destino” em lugar nenhum. Na ficha, preferiu: “Luz preservada; origem em investigação”. À noite, o reflexo da estrela caiu sobre duas marcas de xícara. Mara limpou a mesa e deixou a janela aberta.",
        ],
        choices: [],
        ending: "Um arquivo aberto às perguntas",
      },
      estrada: {
        id: "estrada",
        title: "O observatório sai de casa",
        text: [
          "A esfera viajou numa caixa forrada com tecido. Em vilas sem telescópio, Mara e Tomás montaram sessões de observação e anotaram perguntas que o conselho nunca fizera. Em alguns lugares, encontraram novos padrões; em outros, uma boa conversa e nada mensurável.",
          "Não solucionaram o céu inteiro. Produziram um caderno que distinguia dados, hipóteses e desenhos. Na última folha, duas xícaras contornavam a sombra da esfera. O centro permanecia vazio. Mara escreveu somente: “Há espaço”.",
        ],
        choices: [],
        ending: "O caderno da expedição",
      },
    },
  },
  {
    id: "desencontro",
    title: "A Vida em Que Nunca Nos Conhecemos",
    subtitle: "Duas vidas inteiras, sem uma cena em comum.",
    roman: "IV",
    kind: "book",
    art: "paths",
    start: "estacao",
    object: "fotografia",
    nodes: {
      estacao: {
        id: "estacao",
        title: "Os horários do mesmo dia",
        text: [
          "Às oito e dez, Mara saiu da estação com uma pasta de desenhos. Às oito e vinte, Tomás entrou carregando uma caixa de ferramentas. Não houve esbarrão, troca de olhares ou objeto esquecido que obrigasse um deles a voltar. Essa história não estava preparando um encontro.",
          "Mara tinha vinte e seis anos e medo de mostrar seu projeto para uma praça. Tomás começava um emprego consertando instrumentos musicais. Nenhum dos dois sabia da existência do outro. A biblioteca lhe permite acompanhar um gesto daquele dia, sem transformá-lo numa dívida com alguém desconhecido.",
        ],
        choices: [
          {
            id: "projeto",
            label: "Acompanhar Mara à apresentação do projeto.",
            to: "praca",
            effects: { flags: { "desencontro.mara": "praca" } },
          },
          {
            id: "vizinha",
            label: "Acompanhar Mara quando ela para para ajudar uma vizinha.",
            to: "escada",
            effects: { flags: { "desencontro.mara": "vizinha" } },
          },
        ],
      },
      praca: {
        id: "praca",
        title: "Um banco na sombra",
        text: [
          "O projeto foi aprovado com cortes. Mara brigou por um banco que a comissão considerava dispensável. “Há gente que precisa sentar no caminho da feira.” Conseguiu mantê-lo, perdeu uma fonte e passou meses conferindo medidas sob o sol.",
          "Anos depois, uma aluna de Tomás descansou naquele banco antes de sua primeira apresentação. Tocou bem, apesar do nervosismo. Mara não ouviu o concerto; Tomás não soube quem desenhara a praça. O banco cumpriu sua função sem precisar reunir as pessoas que tornaram aquele descanso possível.",
        ],
        choices: [
          { id: "seguir", label: "Deixar os anos passarem.", to: "oficios" },
        ],
      },
      escada: {
        id: "escada",
        title: "A pasta sobre o corrimão",
        text: [
          "A vizinha havia torcido o tornozelo. Mara deixou a pasta no corredor e a acompanhou ao atendimento. Perdeu sua vez na apresentação. Ficou irritada com o mundo, não com a vizinha. Na semana seguinte, conseguiu remarcar; o projeto precisou ser reduzido.",
          "A vizinha, professora de música, contou a uma colega sobre aquela ajuda. Meses depois, a colega procurou Tomás para recuperar um violoncelo da escola. Ele aceitou parcelar o serviço. Essa cadeia de pequenos atos não tinha um centro. Cada pessoa conhecia somente o trecho pelo qual fora responsável.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Acompanhar as vidas que seguem.",
            to: "oficios",
          },
        ],
      },
      oficios: {
        id: "oficios",
        title: "O meio das vidas",
        text: [
          "Aos quarenta, Mara tinha amigos, um trabalho de que gostava e outro de que precisava para pagar as contas. Aprendera a nadar tarde. Às vezes recusava convites e depois se arrependia. Tomás perdera um sócio, abrira uma oficina menor e descobrira que sabia ensinar melhor do que administrar.",
          "Ambos conheceram pessoas importantes, fizeram escolhas generosas e outras estreitas. Não lhes faltava uma peça com o formato de um desconhecido. Numa primavera, a oficina recebeu dois pedidos que não cabiam na mesma semana. Tomás precisou escolher a qual deles dedicar seu tempo.",
        ],
        choices: [
          {
            id: "escola",
            label: "Restaurar os instrumentos da escola do bairro.",
            to: "musica",
            effects: { flags: { "desencontro.tomas": "escola" } },
          },
          {
            id: "aprendiz",
            label: "Preparar uma aprendiz para assumir os primeiros clientes.",
            to: "aprendiz",
            effects: { flags: { "desencontro.tomas": "aprendiz" } },
          },
        ],
      },
      musica: {
        id: "musica",
        title: "Uma nota possível",
        text: [
          "Tomás trabalhou cinco tardes entre tampos rachados e cordas velhas. Não conseguiu deixar os instrumentos iguais aos novos. Conseguiu deixá-los tocáveis. No ensaio, uma menina interrompeu a música para dizer que a própria mão estava doendo. Ele regulou a altura das cordas.",
          "Mara ouviu parte do concerto da janela de um ônibus. Estava voltando de uma consulta e pensava em outra coisa. A melodia a fez baixar o telefone por alguns minutos. Não descobriu quem havia consertado aqueles instrumentos. O efeito existiu mesmo sem ser reconhecido.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Continuar sem procurar uma coincidência.",
            to: "foto",
          },
        ],
      },
      aprendiz: {
        id: "aprendiz",
        title: "O lugar de outra pessoa",
        text: [
          "A aprendiz se chamava Joana e discordava de Tomás sobre quase tudo. Na primeira semana, recebeu um cliente sozinha e prometeu um prazo impossível. Ele a ajudou a renegociar, sem assumir o serviço nem poupar a conversa desagradável.",
          "Joana abriu sua própria oficina anos depois. Comprou uma mesa usada de Mara, que estava mudando para uma casa menor. As duas conversaram sobre madeira empenada e transportadoras. Tomás não estava presente. A mesa ligou trabalhos diferentes, não pessoas destinadas a se encontrar.",
        ],
        choices: [
          { id: "seguir", label: "Observar o que permanece.", to: "foto" },
        ],
      },
      foto: {
        id: "foto",
        title: "Ninguém na fotografia",
        text: [
          "Já mais velha, Mara voltou à estação com uma câmera. Esperou um intervalo entre trens e fotografou a plataforma vazia. No mesmo ano, Tomás reduziu os horários da oficina para cuidar do joelho e aprender a cozinhar melhor. Teve amigos impacientes com sua sopa. Teve motivos para rir.",
          "A fotografia chegou à biblioteca sem nomes no verso. Você procurou, talvez, a sombra de um encontro. Não havia. Havia um lugar por onde milhares de pessoas tinham passado, levando consigo vidas que uma imagem só não poderia contar. O que fazer com esse registro?",
        ],
        choices: [
          {
            id: "comum",
            label: "Oferecer a fotografia ao arquivo público da estação.",
            to: "arquivo",
            effects: {
              flags: { "desencontro.final": "comum" },
              items: ["fotografia"],
            },
          },
          {
            id: "margem",
            label:
              "Preservá-la com espaço para histórias de quem passou por ali.",
            to: "caderno",
            effects: {
              flags: { "desencontro.final": "vozes" },
              items: ["fotografia"],
            },
          },
        ],
      },
      arquivo: {
        id: "arquivo",
        title: "Uma imagem entre muitas",
        text: [
          "A fotografia ficou entre horários antigos e anúncios de obras. Ninguém a chamou de retrato de uma ausência. Visitantes reconheceram o banco, a mudança da cobertura, a luz que entrava antes de construírem o prédio vizinho.",
          "Mara e Tomás não se conheceram. Seus dias tiveram perdas, vínculos, descobertas e tarefas deixadas para a manhã seguinte. A biblioteca tentou carimbar a ficha como “encontro não realizado”. Iara riscou a expressão. Escreveu: “Duas vidas”. O espaço em branco não precisava ser preenchido por uma falta.",
        ],
        choices: [],
        ending: "Duas vidas, sem lacuna",
      },
      caderno: {
        id: "caderno",
        title: "Aquilo que não saberemos",
        text: [
          "A fotografia ganhou um caderno ao lado. Uma pessoa contou que perdera ali uma entrevista; outra, que voltara de uma viagem feliz. A imagem permaneceu vazia. As histórias não precisavam ser visíveis dentro dela para serem verdadeiras naquele mundo.",
          "Mara e Tomás nunca leram o mesmo caderno, nunca souberam desses cruzamentos indiretos. Viveram o suficiente para mudar de opinião sobre muitas coisas. No catálogo, Iara reservou duas fichas inteiras. Você as fecha sem juntá-las. Pela primeira vez, isso parece uma forma de cuidado.",
        ],
        choices: [],
        ending: "O caderno de muitas passagens",
      },
    },
  },
  {
    id: "jardim",
    title: "O Jardim das Memórias Futuras",
    subtitle: "Nenhuma árvore promete a colheita.",
    roman: "V",
    kind: "book",
    art: "garden",
    start: "frutos",
    object: "semente",
    nodes: {
      frutos: {
        id: "frutos",
        title: "O pomar das coisas possíveis",
        text: [
          "Na entrada do jardim, Iara entregou a Mara uma tesoura sem fio. “Para os barbantes, não para os galhos.” Cada fruto trazia uma etiqueta com uma data. Ao tocá-lo, era possível entrar por alguns minutos num acontecimento que ainda não existia. As datas mudavam durante a noite.",
          "Tomás viera procurar uma resposta sobre a casa que pensavam dividir naquele mundo. Mara queria saber se continuaria tendo um lugar para trabalhar. Numa árvore baixa, havia dois frutos ao alcance da mão: um translúcido, iluminado por dentro, e outro opaco, com uma pequena rachadura.",
        ],
        choices: [
          {
            id: "claro",
            label: "Tocar a lembrança luminosa.",
            to: "festa",
            effects: { flags: { "jardim.visao": "alegria" } },
          },
          {
            id: "rachado",
            label: "Tocar a lembrança que parece difícil.",
            to: "goteira",
            effects: { flags: { "jardim.visao": "dificuldade" } },
          },
        ],
      },
      festa: {
        id: "festa",
        title: "Os pratos desencontrados",
        text: [
          "Havia uma festa pequena. Os pratos eram de conjuntos diferentes; alguém derramara suco numa toalha emprestada. Mara viu sua versão futura mostrar um desenho a uma amiga enquanto Tomás procurava uma travessa. Nenhum dos dois precisava permanecer ao lado do outro o tempo inteiro.",
          "Ela quis guardar o som daquela conversa. O fruto começou a perder a cor. Iara a puxou gentilmente de volta. “Quanto mais você exige que a imagem dure, menos consegue enxergar.” Mara saiu com vontade de comprar uma mesa. Tomás lembrou que primeiro precisavam medir a cozinha.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Voltar ao caminho do jardim.",
            to: "etiquetas",
          },
        ],
      },
      goteira: {
        id: "goteira",
        title: "Uma bacia no corredor",
        text: [
          "Na lembrança, chovia dentro da casa. Mara tinha um prazo no dia seguinte; Tomás chegara cansado e esquecera de comprar a peça para o telhado. A discussão não cabia inteira na goteira. “Eu preciso terminar meu trabalho”, ela disse. “E eu preciso que a gente divida isso sem adivinhar.”",
          "Não se abraçaram imediatamente. Moveram os livros, colocaram uma bacia no chão e combinaram conversar depois de dormir. Quando Mara voltou ao jardim, ainda ouvia as gotas. Perguntou se aquilo era um aviso. Iara respondeu: “É uma possibilidade. O que você faz com ela continua sendo seu”.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Continuar sem transformar a imagem numa sentença.",
            to: "etiquetas",
          },
        ],
      },
      etiquetas: {
        id: "etiquetas",
        title: "O futuro não cabe numa etiqueta",
        text: [
          "Em outras árvores, viram viagens canceladas, trabalhos novos, doenças atravessadas com ajuda, encontros com amigos e manhãs sem assunto. Uma folha mostrava Mara morando sozinha por um período. Outra, Tomás aprendendo uma coisa que ela não queria aprender. O jardim não organizava essas cenas entre sucesso e fracasso.",
          "Num banco, encontraram um envelope que podia conservar uma única imagem. O restante voltaria às árvores. Mara percebeu que poderia sair dali com um modelo a perseguir ou com perguntas para conversar. Tomás se sentou ao lado, esperando ouvir o que ela pensava.",
        ],
        choices: [
          {
            id: "guardar",
            label:
              "Guardar uma imagem como ponto de partida, sem tratá-la como promessa.",
            to: "envelope",
            effects: { flags: { "jardim.memoria": "imagem" } },
          },
          {
            id: "devolver",
            label: "Devolver as imagens e escrever juntos perguntas práticas.",
            to: "perguntas",
            effects: { flags: { "jardim.memoria": "perguntas" } },
          },
        ],
      },
      envelope: {
        id: "envelope",
        title: "Uma medida provisória",
        text: [
          "Escolheram a cozinha iluminada. No verso, Mara escreveu: “O que nos agrada aqui?” A resposta não foi o tamanho da casa. Era a porta do ateliê que fechava, a cadeira para visitas, a pia que nenhum dos dois precisava enfrentar sempre sozinho.",
          "Tomás desenhou uma prateleira mais baixa. Mara riscou uma parede. Quando terminaram, a imagem já não correspondia à visão original. Iara observou o papel e sorriu: “Agora parece um projeto”. Dobrado no bolso, o futuro perdera seu caráter de ordem e ganhara medidas sujeitas a revisão.",
        ],
        choices: [
          { id: "seguir", label: "Procurar a saída do jardim.", to: "semente" },
        ],
      },
      perguntas: {
        id: "perguntas",
        title: "Uma lista incompleta",
        text: [
          "Escreveram: quem cuida de quê? Como pedir silêncio? Onde cada um vai trabalhar? O que fazer quando os planos não couberem no dinheiro? A lista ficou menos bonita que as árvores. Também ficou mais útil.",
          "Discordaram sobre receber visitas sem combinar antes. Tomás achava espontâneo; Mara achava exaustivo. Experimentaram uma regra, apagaram, escreveram outra. Não havia fruto mostrando a conversa perfeita. Quando levantaram do banco, levavam três acordos provisórios e duas perguntas abertas. O jardim continuou sendo belo mesmo sem decidir por eles.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Seguir com as perguntas abertas.",
            to: "semente",
          },
        ],
      },
      semente: {
        id: "semente",
        title: "A coisa mais opaca do jardim",
        text: [
          "Junto à saída, uma semente repousava num pires. Era comum, escura e incapaz de mostrar imagens. Sua etiqueta dizia: “Florescerá quando não for obrigada a provar o amanhã”. Mara cortou o barbante com a tesoura de Iara.",
          "Não apareceu nenhuma flor. Tomás achou a demora razoável. Precisariam de terra, água e paciência; talvez também de orientação quando as folhas mudassem de cor. Dois vasos esperavam na bancada: um fundo, destinado ao jardim comum, e outro menor, próprio para acompanhar mudanças de casa.",
        ],
        choices: [
          {
            id: "raiz",
            label: "Preparar um canteiro compartilhado e combinar os cuidados.",
            to: "canteiro",
            effects: { flags: { "jardim.final": "raiz" }, items: ["semente"] },
          },
          {
            id: "vaso",
            label: "Escolher o vaso que poderá viajar com eles.",
            to: "portatil",
            effects: { flags: { "jardim.final": "vaso" }, items: ["semente"] },
          },
        ],
      },
      canteiro: {
        id: "canteiro",
        title: "Um lugar que se cuida",
        text: [
          "Prepararam a terra perto de um banco. Mara ficaria responsável pela rega naquela semana; Tomás, por verificar a drenagem. Uma vizinha pediu para plantar manjericão ao lado. O canteiro deixou de parecer propriedade de uma imagem perfeita.",
          "No caminho de volta, eles encontraram uma porta de madeira desenhada numa folha. Abaixo, uma legenda: “O lugar onde nada extraordinário aconteceu”. Mara guardou a folha junto à semente. Ainda não conhecia aquela casa. Pela primeira vez no jardim, não sentiu necessidade de vê-la antecipadamente.",
        ],
        choices: [],
        ending: "O canteiro compartilhado",
      },
      portatil: {
        id: "portatil",
        title: "Raízes que também viajam",
        text: [
          "Escolheram um vaso leve, com uma pequena lasca na borda. Caberia na janela de um apartamento e no chão de um ônibus. Tomás escreveu as instruções de cuidado; Mara deixou espaço para anotar o que aprendessem pelo caminho.",
          "Debaixo do vaso, havia o desenho de uma porta de madeira: “O lugar onde nada extraordinário aconteceu”. Eles o guardaram. Nenhuma casa estava garantida, nenhum endereço precisava durar para sempre. A semente, entretanto, precisava ser regada naquele dia. Mara foi buscar água. Tomás abriu espaço na janela.",
        ],
        choices: [],
        ending: "O jardim que acompanha a mudança",
      },
    },
  },
  {
    id: "trem",
    title: "A Última Estação do Universo",
    subtitle: "O que merece chegar à próxima margem?",
    roman: "VI",
    kind: "book",
    art: "train",
    start: "vagao",
    object: "bilhete",
    nodes: {
      vagao: {
        id: "vagao",
        title: "O vagão dos nomes",
        text: [
          "O trem atravessava as últimas regiões iluminadas. Não corria: já não havia ninguém a quem provar pontualidade. Os passageiros levavam receitas, mapas, idiomas, fotografias e instruções para fabricar objetos que talvez nunca mais fossem necessários.",
          "Mara organizava o vagão dos arquivos. Tomás reparava as lâmpadas. Entre dois baús, encontraram versões incompatíveis da mesma história. Numa, a cartógrafa atravessara o mar. Noutra, permanecera na margem. Ambas tinham selos autênticos. O próximo trecho exigia reduzir o peso do trem. Não seria possível transportar os arquivos exatamente como estavam.",
        ],
        choices: [
          {
            id: "originais",
            label:
              "Preservar as duas versões originais, desmontando as próprias malas.",
            to: "bagagem",
            effects: { flags: { "trem.arquivo": "originais" } },
          },
          {
            id: "copias",
            label:
              "Criar uma cópia comparada e distribuir os originais entre os passageiros.",
            to: "copias",
            effects: { flags: { "trem.arquivo": "partilhado" } },
          },
        ],
      },
      bagagem: {
        id: "bagagem",
        title: "O peso de duas versões",
        text: [
          "Tiraram os baús de madeira e envolveram os livros nas próprias roupas. Mara deixou para trás uma escrivaninha desmontável. Tomás abriu mão da reserva de peças que sabia poder fabricar outra vez. A economia bastou por pouco.",
          "Um passageiro perguntou qual versão era verdadeira. “Não sabemos se essa pergunta cabe aqui”, Mara respondeu. Os papéis não pareciam corrigir um ao outro. Pareciam guardar caminhos que haviam se separado. Ela escreveu duas fichas, sem colocar uma por cima da outra. O arquivo ficou mais pesado de perguntas e mais leve de madeira.",
        ],
        choices: [
          { id: "seguir", label: "Levar as duas fichas à cabine.", to: "rota" },
        ],
      },
      copias: {
        id: "copias",
        title: "Uma memória com muitas mãos",
        text: [
          "Mara fez uma cópia em colunas, preservando as diferenças. Os originais viajaram em partes numeradas com passageiros voluntários. Cada pessoa recebeu a localização das outras partes. Tomás desenhou um esquema simples para reuni-las depois.",
          "Uma senhora perguntou o que aconteceria se alguém descesse antes do destino. Ajustaram o plano: cada trecho ganhou uma segunda cópia em outro vagão. A solução não era infalível. Tornava, porém, a preservação uma tarefa distribuída, em vez de um fardo escondido na mala de uma única pessoa.",
        ],
        choices: [
          { id: "seguir", label: "Levar o esquema à cabine.", to: "rota" },
        ],
      },
      rota: {
        id: "rota",
        title: "A estação que o mapa recusa",
        text: [
          "No mapa da ferrovia, os trilhos acabavam antes da escuridão. O condutor recebia um sinal regular vindo de fora da linha desenhada. Um bilhete encontrado entre os livros tinha uma marca circular: zero. Nenhuma lista incluía aquela plataforma.",
          "Tomás acreditava ser possível seguir o sinal com o equipamento da cabine. Mara queria comparar o ritmo com os intervalos registrados no observatório. O trem podia parar para investigar; seus passageiros mereciam saber o que estavam escolhendo. O condutor reuniu todos antes de mudar a rota.",
        ],
        variants: [
          {
            requires: ["item:bussola"],
            text: [
              "No bolso da visitante, a bússola do farol se move. A agulha acompanha o sinal, não os trilhos. “Onde ainda cabe uma resposta”: a inscrição finalmente descreve uma função, não uma direção.",
            ],
          },
        ],
        choices: [
          {
            id: "sinal",
            label:
              "Seguir o sinal com o condutor, mantendo uma rota de retorno.",
            to: "sinal",
            effects: { flags: { "trem.rota": "sinal" } },
          },
          {
            id: "intervalos",
            label: "Parar o trem e comparar os intervalos antes do desvio.",
            to: "intervalos",
            effects: { flags: { "trem.rota": "medida" } },
          },
          {
            id: "bussola",
            label: "Usar a bússola para localizar a origem da resposta.",
            to: "agulha",
            requires: ["item:bussola"],
            effects: { flags: { "trem.rota": "bussola" } },
          },
        ],
      },
      sinal: {
        id: "sinal",
        title: "A luz à altura dos olhos",
        text: [
          "Reduziram a velocidade até ser possível caminhar ao lado do trem. O sinal vinha de uma lâmpada pequena, pendurada numa plataforma sem placa. Havia alguém cuidando dela: Iara, com um casaco grande demais.",
          "“Pensei que vocês não fossem ouvir”, ela disse. Tomás reconheceu sua voz sem saber de onde. Iara também pareceu reconhecê-lo, mas não afirmou ter uma lembrança que pudesse provar. A plataforma não era o fim dos trilhos. Era um lugar onde uma história poderia mudar de transporte.",
        ],
        choices: [
          { id: "seguir", label: "Descer e examinar o abrigo.", to: "abrigo" },
        ],
      },
      intervalos: {
        id: "intervalos",
        title: "A pausa que permite escutar",
        text: [
          "Com as rodas paradas, perceberam uma falha regular no sinal. Não era uma coordenada: era espaço reservado à resposta. Tomás usou a lâmpada da cabine para devolver os mesmos intervalos. Do escuro veio uma luz constante.",
          "O desvio levou a uma plataforma baixa. Iara os esperava com uma chaleira. “O mapa estava errado?”, Mara perguntou. “Incompleto.” Iara não parecia satisfeita com a diferença; parecia responsável por ela. No abrigo havia estantes novas, ainda sem fichas.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Conhecer o arquivo sem fichas.",
            to: "abrigo",
          },
        ],
      },
      agulha: {
        id: "agulha",
        title: "A bússola encontra uma pergunta",
        text: [
          "A agulha girou quando Tomás tentou apontá-la para a luz. Ficou firme apenas quando Mara enviou uma pergunta pelo sinal: “Há alguém aí?” Uma resposta acendeu-se numa plataforma lateral.",
          "A bússola não encontrava pessoas prometidas. Encontrava a possibilidade de comunicação entre margens. Iara os recebeu e devolveu um envelope que cheirava a sal. “Este chegou antes dos trilhos”, disse. Mara reconheceu o papel das cartas do farol. O objeto atravessara histórias que o catálogo insistia em manter separadas.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Guardar a descoberta no arquivo.",
            to: "abrigo",
          },
        ],
      },
      abrigo: {
        id: "abrigo",
        title: "O arquivo do intervalo",
        text: [
          "Iara explicou apenas o que sabia: as bibliotecas estavam recebendo possibilidades encerradas como se fossem versões concorrentes de um único acontecimento. Corrigir uma para que combinasse com a outra destruiria justamente a informação que precisavam compreender.",
          "O abrigo tinha energia para receber os passageiros, mas não espaço para todos os livros. O trem ainda podia seguir levando um arquivo itinerante. Cada pessoa escolheu onde queria ficar. Mara e Tomás precisavam decidir que trabalho poderiam sustentar, sem prometer carregar sozinhos tudo que restava.",
        ],
        choices: [
          {
            id: "ficar",
            label: "Permanecer na plataforma e organizar um lugar de consulta.",
            to: "plataforma",
            effects: { flags: { "trem.final": "abrigo" }, items: ["bilhete"] },
          },
          {
            id: "seguir",
            label: "Continuar com o arquivo itinerante e manter contato.",
            to: "viagem",
            effects: { flags: { "trem.final": "viagem" }, items: ["bilhete"] },
          },
        ],
      },
      plataforma: {
        id: "plataforma",
        title: "Um lugar para pousar a mala",
        text: [
          "Mara instalou as duas versões numa mesma mesa, com fichas separadas. Tomás reparou a lâmpada. Outras pessoas plantaram, cozinharam, ensinaram palavras de línguas que só elas conheciam. O abrigo não devolveu as civilizações perdidas. Deu às pessoas presentes algo a fazer juntas.",
          "Iara entregou à visitante o bilhete de marca zero. “Não indica um lugar vazio. Indica um lugar que ainda não foi registrado.” Atrás da última estante, surgiu por um instante uma porta sem número.",
        ],
        choices: [],
        ending: "A plataforma das versões preservadas",
      },
      viagem: {
        id: "viagem",
        title: "O trem deixa um endereço",
        text: [
          "Mara preparou uma cópia do catálogo para Iara. Tomás combinou um sinal de chegada e outro de atraso. O trem partiu menos cheio; a plataforma permaneceu iluminada. Não estavam abandonando o abrigo. Haviam distribuído entre si trabalhos que exigiam lugares diferentes.",
          "No bolso da visitante ficou o bilhete de marca zero. No verso, uma frase apareceu entre duas estações: “Não confundir ausência de registro com ausência de vida”. As rodas continuaram. Dessa vez, o silêncio entre elas também parecia parte da viagem.",
        ],
        choices: [],
        ending: "O arquivo que continua viajando",
      },
    },
  },
  {
    id: "anomalia",
    title: "O Livro Que Não Deveria Existir",
    subtitle: "O catálogo conhece seus limites.",
    roman: "VII",
    kind: "book",
    art: "forbidden",
    start: "sem_ficha",
    object: "pagina",
    nodes: {
      sem_ficha: {
        id: "sem_ficha",
        title: "O livro sem ficha",
        text: [
          "O volume apareceu entre dois espaços vazios. Não tinha autor. Quando você o abriu, um grão de sal caiu sobre a mesa do átrio. Iara trouxe um pano e parou antes de limpar: naquele lugar, o mar existia somente dentro dos livros.",
          "A capa mudou, conservando marcas do seu caminho. Dentro, havia uma folha do farol, um horário e uma fotografia. Não eram cópias: os volumes originais tinham lacunas nas mesmas posições.",
        ],
        variants: [
          {
            requires: ["flag:farol.final=travessia"],
            text: [
              "A primeira folha mostra duas cordas amarradas na ilha. Você reconhece a travessia que escolheu.",
            ],
          },
          {
            requires: ["flag:farol.final=cartas"],
            text: [
              "A primeira folha mostra dois endereços unidos por envelopes. Você reconhece a correspondência que escolheu conservar.",
            ],
          },
        ],
        choices: [
          {
            id: "paginas",
            label: "Comparar as páginas com os livros de origem.",
            to: "comparacao",
            effects: { flags: { "anomalia.investigacao": "paginas" } },
          },
          {
            id: "iara",
            label: "Perguntar a Iara o que o catálogo deixou de registrar.",
            to: "confissao",
            effects: { flags: { "anomalia.investigacao": "iara" } },
          },
        ],
      },
      comparacao: {
        id: "comparacao",
        title: "A diferença que não se apaga",
        text: [
          "Você leva o volume ao corredor. A versão do farol continua com seu desfecho, mas a margem está cortada. A cidade mantém seu movimento. Na fotografia, ninguém apareceu. Reunir os papéis não fez as histórias concordarem nem mudou aquilo que você decidiu.",
          "Mara surge no reflexo de uma janela, segurando um caderno que não pertence à sua vida. “Pensei que lembrar fosse ter estado lá”, diz. A imagem desaparece antes da resposta. Iara anota o fenômeno. Pela primeira vez, você a vê escrever “não sei” numa ficha do catálogo.",
        ],
        choices: [
          { id: "seguir", label: "Levar a dúvida à mesa central.", to: "erro" },
        ],
      },
      confissao: {
        id: "confissao",
        title: "O trabalho de Iara",
        text: [
          "Iara demora a responder. “A gente se acostuma a confiar nos nomes que dá às coisas.” O catálogo reconhecera duas figuras recorrentes e concluíra que todas as suas aparições pertenciam a uma única história interrompida. Passara a procurar a versão capaz de corrigir as demais.",
          "“E você acreditou?” Ela assente. Era mais confortável imaginar que um encontro explicaria tudo. A fotografia vazia havia sido a primeira objeção séria: duas vidas completas que o sistema chamava de incompletas. “Não foi o arquivo que sentiu vergonha”, Iara diz. “Fui eu.”",
        ],
        choices: [
          {
            id: "seguir",
            label: "Examinar a regra que produziu o erro.",
            to: "erro",
          },
        ],
      },
      erro: {
        id: "erro",
        title: "O verbo errado",
        text: [
          "Na mesa, os fragmentos se dispõem como uma demonstração cujo primeiro enunciado está errado. O catálogo sabe guardar o que deixou de ser possível. Nunca soube prever o que acontecerá. Havia confundido reaparição com obrigação, semelhança com identidade, uma pergunta em aberto com uma resposta perdida.",
          "O relógio bate uma vez. A esfera reflete a fotografia. A semente projeta uma folha ainda inexistente. Nenhum objeto exige uma combinação única. As páginas precisam permanecer juntas sem perder suas diferenças.",
        ],
        variants: [
          {
            requires: ["flag:tempo.final=gradual"],
            text: [
              "O relógio conserva o ritmo gradual que você devolveu à cidade. A biblioteca não precisa mudar de uma vez para mudar de verdade.",
            ],
          },
          {
            requires: ["flag:tempo.final=inteiro"],
            text: [
              "O relógio conserva a manhã inteira que você devolveu à cidade. Uma mudança decidida não apaga o cuidado que a preparou.",
            ],
          },
        ],
        choices: [
          {
            id: "encadernar",
            label: "Encadernar as versões, deixando as contradições visíveis.",
            to: "costura",
            effects: { flags: { "anomalia.forma": "livro" } },
          },
          {
            id: "desdobrar",
            label: "Desdobrar as páginas num mapa com caminhos separados.",
            to: "mapa",
            effects: { flags: { "anomalia.forma": "mapa" } },
          },
        ],
      },
      costura: {
        id: "costura",
        title: "A costura que não força",
        text: [
          "Iara oferece uma agulha e linha. Você deixa espaço entre os cadernos para que cada um abra sem rasgar o outro. A página da ilha não cobre a página das margens distantes. A fotografia vazia ganha uma folha inteira.",
          "Quando a costura termina, uma estante se afasta alguns centímetros. Não há ruído de desmoronamento, apenas madeira raspando devagar. Atrás dela aparece a borda de uma porta pequena. A biblioteca não estava escondendo uma conclusão grandiosa. Estava ocupando espaço demais ao redor de algo que não sabia classificar.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Aproximar-se da porta pequena.",
            to: "limiar",
          },
        ],
      },
      mapa: {
        id: "mapa",
        title: "Os caminhos não precisam convergir",
        text: [
          "Você espalha os fragmentos no chão. Liga apenas os acontecimentos cuja relação consegue explicar. Deixa outros separados. A constelação cresce sem formar uma figura fechada; o espaço entre dois pontos também permanece visível.",
          "Iara retira uma mesa para que o mapa caiba. Atrás dela, uma estante encontra uma posição diferente. Entre as colunas aparece uma porta de madeira, desproporcionalmente simples. No seu mapa, nenhum caminho termina dentro dela. Há somente uma passagem disponível. Para atravessá-la, não será necessário provar que todas as outras levam ao mesmo lugar.",
        ],
        choices: [
          {
            id: "seguir",
            label: "Examinar a passagem recém-descoberta.",
            to: "limiar",
          },
        ],
      },
      limiar: {
        id: "limiar",
        title: "A folha que resiste ao passado",
        text: [
          "A última folha permanece vazia. Iara tenta registrá-la: o título se apaga, a data não se fixa. “Talvez esteja estragada.” Ela hesita. “Talvez eu esteja repetindo o mesmo erro.”",
          "Do outro lado da porta vem um som de chuva. A maçaneta está gasta. Uma placa anuncia a Sala das Pequenas Eternidades. Antes de entrar, você pode escolher como deixar o trabalho recém-feito para quem chegar depois. A folha em branco continua entre seus dedos, sem pedir uma resposta imediata.",
        ],
        variants: [
          {
            requires: ["flag:jardim.final=vaso"],
            text: [
              "Junto ao batente, há espaço para o vaso que você escolheu levar nas mudanças. Nenhum endereço está escrito nele.",
            ],
          },
          {
            requires: ["flag:jardim.final=raiz"],
            text: [
              "A janela da porta deixa ver um pequeno canteiro. Você reconhece a ideia de cuidado compartilhado que levou do jardim.",
            ],
          },
          {
            requires: ["flag:trem.arquivo=partilhado"],
            text: [
              "Iara conserva o esquema de cópias distribuídas do trem. Aquilo que você compartilhou chegou a outras mãos.",
            ],
          },
        ],
        choices: [
          {
            id: "levar",
            label: "Levar uma folha e deixar o arquivo aberto à consulta.",
            to: "folha",
            effects: {
              flags: { "anomalia.final": "folha" },
              items: ["pagina"],
            },
          },
          {
            id: "guia",
            label:
              "Escrever uma nota para a próxima visitante antes de entrar.",
            to: "nota",
            effects: { flags: { "anomalia.final": "nota" }, items: ["pagina"] },
          },
        ],
      },
      folha: {
        id: "folha",
        title: "Uma folha fora do catálogo",
        text: [
          "Você deixa o arquivo sobre a mesa. Iara abandona o carimbo de “versão correta”. Vai rever muitas fichas; a biblioteca será menos organizada por algum tempo.",
          "A folha que você leva não contém instruções. Pela primeira vez, o vazio de uma página não parece um defeito a consertar. A porta de madeira se abre. Há uma cadeira um pouco afastada e duas xícaras numa mesa. Nenhum dos mundos anteriores consegue explicar o barulho simples de alguém mexendo uma colher.",
        ],
        choices: [],
        ending: "A porta fica aberta",
      },
      nota: {
        id: "nota",
        title: "Para quem chegar depois",
        text: [
          "Você escreve: “Nem toda diferença precisa ser corrigida. Se encontrar duas versões, escute as duas antes de decidir o nome da ficha”. Iara coloca a nota no primeiro espaço do catálogo. Depois lhe entrega outra folha, sem título.",
          "A porta de madeira abre para dentro. Não há um trono nem uma resposta esperando. Há uma casa possível, um casaco no encosto de uma cadeira, chuva batendo no vidro. Você leva a folha consigo. A biblioteca aprendeu a guardar uma pergunta. O que vem depois exige outro tipo de atenção.",
        ],
        choices: [],
        ending: "Uma nota e uma passagem",
      },
    },
  },
];
