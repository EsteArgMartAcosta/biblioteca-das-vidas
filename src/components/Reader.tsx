import { useEffect, useRef } from "react";
import type { Action, Progress, Story } from "../narrative/types";
import { storyTitle } from "../narrative/catalog";
import { matches } from "../narrative/engine";
import { Icon } from "./Icon";
export function Reader({
  story,
  p,
  dispatch,
  go,
}: {
  story: Story;
  p: Progress;
  dispatch: (a: Action) => void;
  go: (r: string) => void;
}) {
  const node = story.nodes[p.cursors[story.id] ?? story.start];
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
    document.querySelector(".reading-page")?.scrollTo({ top: 0 });
  }, [node.id]);
  const texts = [
    ...node.text,
    ...(node.variants ?? [])
      .filter((v) => matches(p, v.requires))
      .flatMap((v) => v.text),
  ];
  const choices = node.choices.filter((c) => matches(p, c.requires));
  return (
    <main className={"reader " + (story.kind === "home" ? "home-reader" : "")}>
      <div className={"reading-world world-" + story.id}>
        <img
          src={"./assets/" + story.art + ".svg"}
          alt={"Ilustração de " + story.title}
        />
        <div className="reading-world-shade" />
        <div className="world-title">
          <span className="eyebrow">
            {story.kind === "home"
              ? "UMA VIDA COTIDIANA POSSÍVEL"
              : "LIVRO " + story.roman}
          </span>
          <h2>{storyTitle(story.id, p)}</h2>
          <p>{story.subtitle}</p>
        </div>
        <button
          className="reading-return quiet"
          onClick={() => go(story.kind === "home" ? "casa" : "atrio")}
        >
          <Icon name="back" />
          {story.kind === "home" ? "Voltar à casa" : "Fechar o livro"}
        </button>
      </div>
      <article className="reading-page" key={story.id + node.id}>
        <div className="page-running">
          <span>
            {story.kind === "home"
              ? "PEQUENAS ETERNIDADES"
              : "ARQUIVO DAS POSSIBILIDADES"}
          </span>
          <span>{node.ending ? "DESFECHO" : story.roman}</span>
        </div>
        <div className="page-text">
          <span className="small-rule" />
          <h1 tabIndex={-1} ref={ref}>
            {node.title}
          </h1>
          {texts.map((t, i) => (
            <p key={i} className={t.startsWith("—") ? "dialogue" : ""}>
              {t}
            </p>
          ))}
          {node.ending ? (
            <div className="ending-block">
              <Icon name="spark" />
              <span className="eyebrow">ESTA VIDA ENCONTROU UM DESFECHO</span>
              <h3>{node.ending}</h3>
              <p>O que você escolheu permanece na biblioteca.</p>
              <button
                className="primary"
                onClick={() => go(story.kind === "home" ? "casa" : "atrio")}
              >
                Levar esta história comigo <Icon name="next" />
              </button>
              <button
                className="text-link"
                onClick={() => dispatch({ type: "start", book: story.id })}
              >
                Percorrer outra possibilidade <Icon name="restart" size={16} />
              </button>
            </div>
          ) : (
            <div className="choices">
              <span className="eyebrow">
                {choices.length > 1
                  ? "O QUE VOCÊ ESCOLHE?"
                  : "A HISTÓRIA CONTINUA"}
              </span>
              {choices.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() =>
                    dispatch({
                      type: "choose",
                      book: story.id,
                      node: node.id,
                      choice: c.id,
                    })
                  }
                >
                  <span className="choice-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c.label}</span>
                  <Icon name="next" size={18} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="page-foot">
          {story.kind === "home"
            ? "Uma ficção de futuro. Nenhuma lembrança real foi presumida."
            : "Uma vida ficcional · sua leitura fica salva neste navegador."}
        </div>
      </article>
    </main>
  );
}
