import { useState } from "react";
import type { Save, Progress } from "../narrative/types";
import { items } from "../narrative/catalog";
import { composeEnding, endingFragments } from "../narrative/ending";
import { constellation } from "../narrative/engine";
import { personal } from "../config/personal";
import { download } from "../state/persistence";
import { Icon, Seal } from "../components/Icon";
const escape = (s: string) =>
  s.replace(
    /[<>&"']/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );
export function exportKeepsake(save: Save, p: Progress) {
  const stars = constellation(save.uid, p);
  const wish =
    save.wish ||
    "Existem infinitas maneiras de não nos encontrarmos. E, ainda assim, aqui estamos.";
  const words = wish.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + word).length > 58) {
      lines.push(line);
      line = "";
    }
    line += word + " ";
  }
  if (line) lines.push(line);
  const h = 1050 + lines.length * 28;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="${h}" viewBox="0 0 1000 ${h}"><rect width="1000" height="${h}" fill="#0b131c"/><rect x="40" y="40" width="920" height="${h - 80}" fill="none" stroke="#8c784f"/><g fill="#d9bd88" text-anchor="middle"><text x="500" y="120" font-family="Georgia" font-size="18" letter-spacing="4">A BIBLIOTECA DAS VIDAS QUE NÃO VIVEMOS</text><text x="500" y="205" font-family="Georgia" font-size="58">A nossa.</text><text x="500" y="250" font-family="Georgia" font-size="23">${escape(personal.nickname)}</text></g><g transform="translate(100 300)"><polyline points="${stars.map((s) => `${s.x * 8},${s.y * 5}`).join(" ")}" stroke="#9f895a" fill="none"/>${stars.map((s) => `<circle cx="${s.x * 8}" cy="${s.y * 5}" r="${s.r}" fill="#e3d0a4"/>`).join("")}</g><g text-anchor="middle" fill="#e0d8c9" font-family="Georgia" font-size="22">${lines.map((l, i) => `<text x="500" y="${870 + i * 28}">${escape(l)}</text>`).join("")}<text x="500" y="${h - 100}" font-size="16" fill="#b7a17d">${p.items.length} vestígios · ${Object.keys(p.completed).length} vidas · uma página aberta</text><text x="500" y="${h - 70}" font-size="14" fill="#a7977f">Uma constelação composta pelas escolhas desta jornada.</text></g></svg>`;
  download(svg, "uma-pequena-eternidade.svg", "image/svg+xml");
}
export function Final({
  p,
  save,
  patch,
  go,
}: {
  p: Progress;
  save: Save;
  patch: (s: Partial<Save>) => void;
  go: (s: string) => void;
}) {
  const [opened, setOpened] = useState(false);
  const fragments = endingFragments(p);
  const text = composeEnding(p);
  if (!opened)
    return (
      <main className="final-arrival">
        <div className="quiet-library" />
        <p className="eyebrow">O OITAVO VOLUME</p>
        <h1>
          A vida que ainda
          <br />
          <em>não escrevemos.</em>
        </h1>
        <p>
          As estantes se aquietam. Não se apagam por falta de histórias.
          <br />
          Por um instante, não é delas que você precisa.
        </p>
        <button
          className="unfinished-book"
          onClick={() => setOpened(true)}
          aria-label="Abrir o oitavo livro"
        >
          <Seal />
          <span>
            {p.items.map((id) => (
              <Icon
                name={items.find((i) => i.id === id)?.icon ?? "book"}
                key={id}
                size={18}
              />
            ))}
          </span>
          <small>TOQUE NA CAPA</small>
        </button>
        <p className="final-before">
          Sem título. Sem autor. Uma página que ainda não aconteceu.
        </p>
      </main>
    );
  return (
    <main className="final-open">
      <header>
        <p className="eyebrow">ENTRE TODAS AS VIDAS, UMA PÁGINA EM BRANCO</p>
        <h1>A nossa.</h1>
        <p>{personal.brideName || personal.nickname},</p>
        <span className="small-rule" />
      </header>
      <article className="final-letter">
        <p>
          Você atravessou vidas que nunca existiram. Encontrou quem pôde chegar
          e quem encontrou outros caminhos. Agora, nenhuma biblioteca pode dizer
          o que virá.
        </p>
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
        <p className="dedication">{personal.dedication}</p>
        {personal.authorName && (
          <p className="signature">{personal.authorName}</p>
        )}
        {personal.specialDate && <p className="date">{personal.specialDate}</p>}
        {personal.trueDetails.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </article>
      <section className="journey-recollection">
        <h2>O que veio com você.</h2>
        <div>
          {fragments.map((f) => (
            <details key={f.id}>
              <summary>
                {f.title}
                <Icon name="plus" size={14} />
              </summary>
              <p>{f.ending}</p>
              <p className="hint">Sua escolha: {f.lastChoice}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="last-page">
        <Icon name="pen" size={30} />
        <label htmlFor="wish">
          Que pequena eternidade
          <br />
          você gostaria de viver?
        </label>
        <textarea
          id="wish"
          rows={4}
          maxLength={1000}
          value={save.wish}
          onChange={(e) => patch({ wish: e.target.value })}
          placeholder="Pode ser uma coisa muito pequena…"
        />
        <p>
          Opcional. Suas palavras ficam somente neste navegador,
          <br />
          até você decidir exportá-las.
        </p>
        <button className="primary" onClick={() => exportKeepsake(save, p)}>
          Guardar minha constelação <Icon name="download" />
        </button>
        <button className="text-link" onClick={() => go("casa")}>
          Voltar à casa <Icon name="home" />
        </button>
      </section>
      <footer>O livro permanece aberto.</footer>
    </main>
  );
}
