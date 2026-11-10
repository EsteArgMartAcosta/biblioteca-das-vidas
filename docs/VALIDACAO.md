# Relatório de validação

## Resultado

Build de produção concluído com TypeScript e Vite. **33 testes automatizados passaram**. A aplicação está publicada no GitHub Pages, e a URL pública foi aberta e utilizada no navegador.

## Testes automatizados executados

`npm test` percorre todos os grafos das quinze histórias e verifica referências, condições, ramificações e desfechos alcançáveis. Verifica três decisões significativas em cada percurso dos sete livros, concessão e deduplicação de artefatos, bloqueios e liberações, título variável do livro VII e efeito do segredo no encerramento.

Duas jornadas completas com escolhas diferentes chegam ao final. O teste de releitura interrompida confirma que o encerramento preserva a última leitura concluída. Há testes de reconstrução do estado, exportação/importação, migração de versão, preferências, corrupção, falhas de armazenamento, rejeição de ações forjadas e nomes de protótipo, constelação determinística e personalização.

`npm run build` executou a verificação TypeScript e gerou os arquivos estáticos. O pacote inicial JavaScript tem aproximadamente 354 kB (113 kB gzip), com casa, coleções, preferências e encerramento separados em módulos sob demanda.

## Interface verificada em Chromium

- Abertura, entrada e pontos de exploração do átrio.
- Uma jornada completa pela interface: sete livros, três relações do atlas, enigma da Sala Zero, descoberta da casa, oito histórias domésticas, gaveta opcional, carta, Livro dos Dias Comuns e encerramento.
- Mudanças da casa e registro dos objetos após decisões.
- Encerramento composto com escolhas efetivamente feitas, texto opcional e exportação da constelação SVG.
- Recarregamento preservando a frase final e o progresso.
- Preferência de movimento reduzido e aumento do texto.
- Exportação JSON de uma jornada completa; os dados exportados foram lidos e conferidos. O SVG exportado foi analisado como XML válido.
- Importação de arquivo inválido: a interface apresentou uma mensagem e preservou a jornada existente. A restauração de arquivos válidos foi verificada pelos testes automatizados.
- Jornada inteira sem som. Ativação e desativação do controle de áudio verificadas; a qualidade acústica não foi avaliada por escuta.
- Na URL pública: entrada, arte carregada, abertura de livro, decisão e recarga na rota interna `#/livro/farol`, conservando a página escolhida.
- Layout estreito verificado a 449 e 337 pixels CSS, por zoom do navegador: sem rolagem horizontal no átrio/leitura observados. Capturas de 449 pixels incluídas.

## Limites de verificação

Não houve teste em aparelhos físicos Android/iPhone, Safari, leitores de tela ou ferramentas de auditoria formal de acessibilidade. A verificação estreita por zoom não equivale a emulação completa de um dispositivo móvel. A segunda jornada foi validada no motor automatizado, não repetida integralmente pela interface.

A experiência usa cenários SVG em 2.5D, controles HTML e profundidade CSS; não exige WebGL. Não há modelos 3D volumétricos nem navegação livre por câmera. Os artefatos são representações estilizadas que podem ser giradas na interface.

Não há sincronização entre dispositivos nem envio das escolhas ao autor. O armazenamento depende da disponibilidade do navegador; a exportação fornece uma cópia transferível. Não foi realizado teste de carga ou medição de desempenho em aparelhos antigos.

## Evidências

As imagens em `docs/capturas/` são capturas reais da aplicação. Não são maquetes. O workflow `.github/workflows/pages.yml` reproduz instalação, testes, build e publicação a cada push em `main`.
