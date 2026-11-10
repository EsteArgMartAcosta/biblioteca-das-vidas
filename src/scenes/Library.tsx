import { useState } from "react";
import type { Progress, Save } from "../narrative/types";
import { books, storyTitle } from "../narrative/catalog";
import { canFinal, unlocked } from "../narrative/engine";
import { Icon } from "../components/Icon";
export function Library({
  p,
  save,
  go,
  open,
}: {
  p: Progress;
  save: Save;
  go: (r: string) => void;
  open: (id: string) => void;
}) {
  const [focus, setFocus] = useState("");
  const count = books.filter((b) => p.completed[b.id]).length;
  const stations = [
    {
      id: "encontros",
      name: "Corredor dos Encontros",
      x: 20,
      y: 47,
      icon: "compass",
    },
    {
      id: "tempos",
      name: "Arquivo dos Tempos Impossíveis",
      x: 34,
      y: 57,
      icon: "clock",
    },
    {
      id: "observatorio",
      name: "Observatório das Estrelas Ausentes",
      x: 50,
      y: 33,
      icon: "star",
    },
    {
      id: "jardim",
      name: "Jardim das Memórias Futuras",
      x: 79,
      y: 46,
      icon: "leaf",
    },
    {
      id: "zero",
      name: p.zero ? "Sala Zero" : "Uma porta sem número",
      x: 40,
      y: 62,
      icon: "key",
    },
    {
      id: "casa",
      name: "Sala das Pequenas Eternidades",
      x: 71,
      y: 61,
      icon: "home",
    },
  ];
  return (
    <div className={"library-scene progress-" + count}>
      <div className="world-image">
        <img
          src="./assets/atrium.svg"
          alt="Estantes, arcos e escadarias sob uma abóbada de estrelas"
        />
        <div className="world-vignette" />
        <div className="dust" aria-hidden="true" />
      </div>
      <div className="scene-heading">
        <p className="eyebrow">
          A BIBLIOTECA · {String(count).padStart(2, "0")} / 07 VIDAS
        </p>
        <h1>
          O Átrio das
          <br />
          <em>Possibilidades</em>
        </h1>
        <p>
          {count === 0
            ? "Nenhuma destas vidas aconteceu. Todas têm algo a lhe contar."
            : count < 6
              ? "Há livros que mudaram de lugar desde a sua chegada."
              : "A biblioteca já não tenta esconder o que não sabe."}
        </p>
      </div>
      <div className="hotspot-layer" aria-label="Passagens da biblioteca">
        {stations
          .filter((s) => s.id !== "casa" || p.completed.anomalia)
          .map((s) => (
            <button
              key={s.id}
              className={"hotspot " + (focus === s.id ? "focused" : "")}
              style={{ left: s.x + "%", top: s.y + "%" }}
              onMouseEnter={() => setFocus(s.id)}
              onFocus={() => setFocus(s.id)}
              onClick={() => go(s.id)}
              aria-label={s.name}
            >
              <span className="hotspot-orbit">
                <Icon name={s.icon} />
              </span>
              <span className="hotspot-name">{s.name}</span>
            </button>
          ))}
        {canFinal(p) && (
          <button
            className="hotspot final-door"
            style={{ left: "51%", top: "75%" }}
            onClick={() => go("final")}
          >
            <span className="hotspot-orbit">
              <Icon name="pen" />
            </span>
            <span className="hotspot-name">A mesa do livro inacabado</span>
          </button>
        )}
      </div>
      <aside className="librarian">
        <span className="line" />
        <p>
          {p.zero
            ? "“Nem toda página em branco perdeu as palavras.”"
            : p.links.length
              ? "“Algumas coisas só se deixam ler quando colocadas lado a lado.”"
              : "“Escolha um livro. O catálogo pode esperar.”"}
        </p>
        <small>IARA, A BIBLIOTECÁRIA</small>
      </aside>
      <section className="shelf" aria-label="Os sete livros">
        <div className="shelf-caption">
          <span className="eyebrow">VIDAS NÃO VIVIDAS</span>
          <span>
            Escolha por onde começar <Icon name="next" size={14} />
          </span>
        </div>
        <div className="book-spines">
          {books.map((b) => (
            <button
              key={b.id}
              className={
                "book-spine " +
                (p.completed[b.id] ? "read " : "") +
                (!unlocked(b.id, p) ? "locked" : "")
              }
              onClick={() => (unlocked(b.id, p) ? open(b.id) : go("proibidos"))}
              aria-label={b.title}
            >
              <span className="book-roman">{b.roman}</span>
              <span>{storyTitle(b.id, p)}</span>
              {p.completed[b.id] ? (
                <Icon name="check" size={14} />
              ) : !unlocked(b.id, p) ? (
                <Icon name="key" size={14} />
              ) : (
                <span className="book-dot" />
              )}
            </button>
          ))}
        </div>
      </section>
      <div className="scene-notice">
        {save.events.length
          ? "Sua passagem deixa marcas."
          : "Explore as luzes. Abra os livros. Não existe uma ordem perfeita."}
      </div>
    </div>
  );
}
export function Wing({
  id,
  p,
  open,
  go,
}: {
  id: string;
  p: Progress;
  open: (s: string) => void;
  go: (s: string) => void;
}) {
  const wing =
    id === "encontros"
      ? {
          title: "O Corredor dos Encontros",
          text: "Duas margens. Duas ruas. O que se aproxima e o que segue sozinho.",
          ids: ["farol", "desencontro"],
          art: "paths",
        }
      : id === "tempos"
        ? {
            title: "O Arquivo dos Tempos Impossíveis",
            text: "Aqui, os relógios não concordam. Talvez tenham boas razões.",
            ids: ["tempo", "trem"],
            art: "clock",
          }
        : id === "jardim"
          ? {
              title: "O Jardim das Memórias Futuras",
              text: "As árvores não fazem promessas. Oferecem possibilidades.",
              ids: ["jardim"],
              art: "garden",
            }
          : {
              title: "A Ala dos Livros Proibidos",
              text: unlocked("anomalia", p)
                ? "O catálogo abriu uma exceção. O livro estava esperando por você."
                : "Seis vidas, três relações e uma sala que não consta na planta. O livro só poderá aparecer depois dessas descobertas.",
              ids: ["anomalia"],
              art: "forbidden",
            };
  return (
    <section className="wing">
      <img
        src={"./assets/" + wing.art + ".svg"}
        alt="Paisagem de uma ala da biblioteca"
      />
      <div className="wing-content">
        <p className="eyebrow">UMA PASSAGEM DO ÁTRIO</p>
        <h1>{wing.title}</h1>
        <p>{wing.text}</p>
        <div className="wing-books">
          {books
            .filter((b) => wing.ids.includes(b.id))
            .map((b) => (
              <button
                key={b.id}
                className="wing-book"
                disabled={!unlocked(b.id, p)}
                onClick={() => open(b.id)}
              >
                <span>{b.roman}</span>
                <div>
                  <h2>{b.title}</h2>
                  <p>{b.subtitle}</p>
                </div>
                <Icon name={p.completed[b.id] ? "check" : "next"} />
              </button>
            ))}
        </div>
        {id === "proibidos" && !unlocked("anomalia", p) && (
          <button className="text-link" onClick={() => go("atlas")}>
            Consultar as relações no atlas <Icon name="next" />
          </button>
        )}
      </div>
    </section>
  );
}
