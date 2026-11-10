# A Biblioteca das Vidas que Não Vivemos

> Existem infinitas maneiras de não nos encontrarmos. E, ainda assim, aqui estamos.

Uma obra de ficção interativa em português brasileiro: sete vidas que não aconteceram, uma casa de futuros possíveis e um oitavo livro que permanece aberto.

**[Entrar na biblioteca](https://esteargmartacosta.github.io/biblioteca-das-vidas/)**

## O que existe nesta edição

- Biblioteca explorável em 2.5D, com nove ambientes vetoriais originais.
- Sete livros completos: 64 cenas, 14 desfechos e três decisões significativas em cada percurso.
- Oito histórias cotidianas: 47 cenas e 18 desfechos. As decisões deixam mudanças visíveis na casa.
- Atlas com três relações entre mundos, inventário de sete artefatos e observatório com constelação determinística.
- Sala Zero, gaveta secreta, Livro dos Dias Comuns e oitavo livro com composição baseada nas escolhas concluídas.
- Releitura de possibilidades alternativas, preferências de leitura, movimento reduzido, áudio procedural opcional e progresso local versionado.
- Exportação/importação da jornada em JSON e lembrança visual em SVG.

São **111 cenas narrativas e 32 desfechos**, além das cenas especiais, enigmas e encerramento. Mara, Tomás e Iara são personagens ficcionais. A casa apresenta possibilidades, não lembranças reais do casal.

## Executar

Requer Node.js 22 e npm.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

`dist/` contém a aplicação estática pronta para hospedagem. Não abra `index.html` diretamente com `file://`; use o servidor de desenvolvimento ou um servidor HTTP estático.

## Publicar no GitHub Pages

O repositório já contém `.github/workflows/pages.yml`. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. Um push em `main` executa instalação, testes, build e publicação.

O `base: './'` do Vite mantém os recursos relativos. As rotas usam `#/livro/farol`, por exemplo, de modo que recarregar uma página interna não exige regras especiais do servidor. A aplicação não depende de backend, banco externo, chave secreta ou API paga.

O caminho de publicação segue o [guia oficial do Vite](https://vite.dev/guide/static-deploy) e a documentação de [workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Personalizar o presente

Edite **`src/config/personal.ts`**:

- `brideName`, `authorName`, `nickname` (atualmente “Sumercé Linda”).
- `specialDate`, `dedication`, `closing`.
- `trueDetails`: somente acontecimentos verdadeiros que você queira tornar públicos.
- `realMemories`: memórias identificadas como reais, com campo `authorized`. Fotografias são opcionais.

Nenhuma biografia foi inventada. Textos e fotografias colocados na configuração serão públicos no site e no repositório. As escolhas e a frase digitada pela visitante ficam no navegador; não são incluídas no código, enviadas ao autor ou sincronizadas entre aparelhos.

## Como explorar

Os seis primeiros livros podem ser lidos em qualquer ordem. Ao terminar pares de livros, visite o atlas e abra as relações correspondentes. As três relações permitem compreender a porta sem número. A Sala Zero, junto com as seis vidas concluídas, libera o sétimo livro. A casa vem depois dele. Conheça os oito dias e abra o Livro dos Dias Comuns para chegar à mesa final.

A gaveta é opcional. Suas pistas relacionam direção e tempo com a cozinha de madrugada e a varanda dos anos futuros. Nenhum desfecho é tratado como falha.

Ao reler um livro, objetos e finais já encontrados permanecem no registro; novas escolhas atualizam suas consequências. O encerramento considera as leituras concluídas, para não misturar um final antigo com uma releitura interrompida. A constelação é calculada a partir do identificador local e das decisões, não de sorteios a cada renderização.

## Estrutura

| Diretório                 | Responsabilidade                                        |
| ------------------------- | ------------------------------------------------------- |
| `src/app`                 | Rotas por hash e composição da experiência              |
| `src/narrative/books`     | Sete livros em dados tipados                            |
| `src/narrative/engine`    | Transições, condições, efeitos, validação e constelação |
| `src/narrative/ending.ts` | Combinações autorais do encerramento                    |
| `src/eternities`          | Casa, oito dias e segredo                               |
| `src/scenes`              | Biblioteca, alas, atlas, observatório e final           |
| `src/state`               | Salvamento, migração, validação e exportação            |
| `src/audio`               | Síntese sonora original com Web Audio                   |
| `src/config`              | Personalização e conteúdos adicionais                   |
| `src/tests`               | Testes do motor, percursos, dados e personalização      |
| `public/assets`           | Ilustrações SVG originais e símbolo da biblioteca       |

## Decisões técnicas

React + TypeScript + Vite, com motor narrativo separado da interface. A opção por cenários SVG em 2.5D permite exploração por pontos de interação e mantém os controles como HTML acessível. Não há dependência de WebGL: a apresentação principal também é a solução para aparelhos sem aceleração 3D. A representação dos artefatos usa profundidade CSS e rotação controlável; não são modelos volumétricos Three.js.

A casa, o final e as coleções são carregados sob demanda. Fontes do sistema e arte local evitam dependências de fontes e imagens remotas. As animações são discretas e podem ser desligadas. O áudio nasce de osciladores e ruído filtrado, começa somente por ação da visitante e é dispensável para todos os enigmas.

O registro de ações permite reconstruir e validar o progresso antes de importar. Uma importação inválida é recusada; um arquivo local corrompido não é sobrescrito sem uma decisão explícita. Exportar uma cópia é a forma de transportar a jornada para outro aparelho.

## Acrescentar capítulos

Veja **[docs/EXTENSOES.md](docs/EXTENSOES.md)** para o formato `Story`, condições e efeitos. Preserve IDs existentes, pois os arquivos de progresso dependem deles. Um novo conteúdo deve vir com desfechos alcançáveis, texto definitivo e indicação clara de ficção ou memória autorizada.

## Verificação e créditos

- **[Relatório de validação](docs/VALIDACAO.md)**: testes executados e limites de verificação.
- **[Bíblia narrativa](docs/BIBLIA.md)**: contém spoilers do mistério.
- **[Direção de arte](docs/ART.md)**: cenas, coordenadas e direitos.
- **[Créditos e licenças](docs/CREDITOS.md)**.
- Capturas reais em **[docs/capturas](docs/capturas)**.

A experiência é uma ficção interativa ilustrada. Não pretende simular deslocamento livre em um mundo 3D, nem fazer previsões científicas sobre futuros ou relações.
