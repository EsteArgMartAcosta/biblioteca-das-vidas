import { useEffect, useState } from "react";
import { Seal, Icon } from "./Icon";
export function Intro({
  enter,
  reduced,
}: {
  enter: () => void;
  reduced: boolean;
}) {
  const [stage, setStage] = useState(reduced ? 3 : 0);
  useEffect(() => {
    if (stage < 2) {
      const t = setTimeout(() => setStage((s) => s + 1), 4400);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return (
    <main className={"intro stage-" + stage}>
      <img
        className="intro-architecture"
        src="./assets/atrium.svg"
        alt="Uma biblioteca monumental suspensa entre estrelas"
      />
      <div className="intro-shade" />
      <button
        className="intro-skip quiet"
        onClick={() => (stage < 3 ? setStage(3) : enter())}
      >
        {stage < 3 ? "Pular abertura" : "Entrar diretamente"}{" "}
        <Icon name="next" size={16} />
      </button>
      {stage < 2 ? (
        <button
          className="opening-line"
          key={stage}
          onClick={() => setStage(stage + 1)}
        >
          <span>
            {stage === 0
              ? "Há livros sobre tudo o que aconteceu."
              : "Mas existe uma biblioteca para aquilo que nunca chegou a acontecer."}
          </span>
          <small>Toque para avançar</small>
        </button>
      ) : stage === 2 ? (
        <div className="light-stage">
          <p>
            Algumas histórias nunca aconteceram.
            <br />
            <em>Isso não significa que deixaram de existir.</em>
          </p>
          <button
            aria-label="Aproximar-se da luz"
            className="window-light"
            onClick={() => setStage(3)}
          >
            <span />
          </button>
          <small>Aproxime-se da luz</small>
        </div>
      ) : (
        <div className="title-stage">
          <Seal />
          <p className="eyebrow">Uma ficção para habitar</p>
          <h1>
            A Biblioteca
            <br />
            das Vidas que
            <br />
            <em>Não Vivemos</em>
          </h1>
          <p className="intro-quote">
            Existem infinitas maneiras de não nos encontrarmos.
            <br />
            E, ainda assim, aqui estamos.
          </p>
          <button className="primary" onClick={enter}>
            Entrar na biblioteca <Icon name="next" />
          </button>
          <span className="intro-foot">
            Sem pressa. Algumas portas só se abrem por dentro.
          </span>
        </div>
      )}
      <span className="intro-edition">
        UM LUGAR PARA O QUE PODERIA TER SIDO
      </span>
    </main>
  );
}
