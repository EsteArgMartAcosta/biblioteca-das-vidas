import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Action, Save } from "../narrative/types";
import {
  replay,
  apply,
  unlocked,
  canFinal,
  completedProgress,
} from "../narrative/engine";
import { storyById, books, homeStories } from "../narrative/catalog";
import { load, persist, newSave } from "../state/persistence";
import { sound } from "../audio/sound";
import { Icon, Seal } from "../components/Icon";
import { Intro } from "../components/Intro";
import { Library, Wing } from "../scenes/Library";
import { Reader } from "../components/Reader";
const HomeScene = lazy(() =>
  import("../eternities/Home").then((m) => ({ default: m.HomeScene })),
);
const Inventory = lazy(() =>
  import("../scenes/Collections").then((m) => ({ default: m.Inventory })),
);
const Atlas = lazy(() =>
  import("../scenes/Collections").then((m) => ({ default: m.Atlas })),
);
const Observatory = lazy(() =>
  import("../scenes/Collections").then((m) => ({ default: m.Observatory })),
);
const Zero = lazy(() =>
  import("../scenes/Collections").then((m) => ({ default: m.Zero })),
);
const Final = lazy(() =>
  import("../scenes/Final").then((m) => ({ default: m.Final })),
);
const Settings = lazy(() => import("../components/Settings"));
function initial() {
  try {
    return load(window.localStorage);
  } catch {
    return {
      save: newSave(),
      warning:
        "O armazenamento está indisponível. Você pode exportar sua jornada.",
    };
  }
}
const initialState = initial();
const routes = [
  "atrio",
  "encontros",
  "tempos",
  "jardim",
  "proibidos",
  "atlas",
  "objetos",
  "observatorio",
  "zero",
  "casa",
  "final",
];
function cleanRoute(r: string) {
  return routes.includes(r) || (r.startsWith("livro/") && storyById[r.slice(6)])
    ? r
    : "atrio";
}
export default function App() {
  const [save, setSave] = useState<Save>(() => ({
    ...initialState.save,
    route: cleanRoute(location.hash.slice(2) || initialState.save.route),
    settings: {
      ...initialState.save.settings,
      reduced:
        initialState.save.settings.reduced ||
        matchMedia("(prefers-reduced-motion: reduce)").matches,
    },
  }));
  const [warning, setWarning] = useState(initialState.warning),
    [protectedSave, setProtectedSave] = useState(!!initialState.warning),
    [error, setError] = useState(""),
    [settings, setSettings] = useState(false),
    [audio, setAudio] = useState(false);
  const p = useMemo(() => replay(save.events), [save.events]);
  const patch = useCallback(
    (x: Partial<Save>) => setSave((s) => ({ ...s, ...x })),
    [],
  );
  const go = useCallback(
    (r: string) => {
      const clean = cleanRoute(r);
      location.hash = "/" + clean;
      patch({ route: clean });
      window.scrollTo(0, 0);
    },
    [patch],
  );
  useEffect(() => {
    const f = () => {
      patch({ route: cleanRoute(location.hash.slice(2)) });
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, [patch]);
  useEffect(() => {
    if (protectedSave) return;
    try {
      const msg = persist(save, window.localStorage);
      setWarning(msg);
    } catch {
      setWarning("Não foi possível salvar. Exporte sua jornada antes de sair.");
    }
  }, [save, protectedSave]);
  useEffect(() => {
    sound.setVolume(save.settings.volume);
  }, [save.settings.volume]);
  const story = save.route.startsWith("livro/")
    ? storyById[save.route.slice(6)]
    : undefined;
  const house = save.route === "casa" || story?.kind === "home";
  const theme = house
    ? "house"
    : (story?.id ?? (save.route === "final" ? "final" : "atrio"));
  useEffect(() => {
    sound.theme(theme);
  }, [theme]);
  useEffect(() => () => sound.disable(), []);
  const dispatch = (a: Action) => {
    try {
      apply(p, a);
      sound.touch(house ? "cup" : "page");
      setSave((s) => ({ ...s, events: [...s.events, a] }));
      setError("");
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Esta página não pôde ser aberta.",
      );
    }
  };
  const open = (id: string) => {
    if (!unlocked(id, p)) {
      go("proibidos");
      return;
    }
    if (!p.cursors[id]) dispatch({ type: "start", book: id });
    go("livro/" + id);
  };
  const toggleAudio = async () => {
    try {
      if (audio) {
        sound.disable();
        setAudio(false);
      } else {
        await sound.enable(theme);
        setAudio(true);
      }
    } catch {
      setError(
        "O som não está disponível neste navegador. A leitura pode continuar em silêncio.",
      );
    }
  };
  const replace = (s: Save | null) => {
    const next = s ?? newSave();
    setProtectedSave(false);
    setWarning("");
    setSave({ ...next, route: cleanRoute(next.route) });
    location.hash = "/" + cleanRoute(next.route);
    sound.disable();
    setAudio(false);
    window.scrollTo(0, 0);
  };
  const allBooks = books.filter((b) => p.completed[b.id]).length;
  let content;
  if (story) {
    content =
      unlocked(story.id, p) && p.cursors[story.id] ? (
        <Reader story={story} p={p} dispatch={dispatch} go={go} />
      ) : (
        <div className="locked-page">
          <h1>Esta página ainda não foi aberta.</h1>
          <button
            className="primary"
            onClick={() =>
              unlocked(story.id, p) ? open(story.id) : go("atrio")
            }
          >
            {unlocked(story.id, p) ? "Abrir o livro" : "Voltar ao átrio"}
          </button>
        </div>
      );
  } else
    switch (save.route) {
      case "objetos":
        content = <Inventory p={p} />;
        break;
      case "atlas":
        content = <Atlas p={p} dispatch={dispatch} open={open} />;
        break;
      case "observatorio":
        content = <Observatory p={p} save={save} open={open} />;
        break;
      case "zero":
        content = <Zero p={p} dispatch={dispatch} go={go} />;
        break;
      case "casa":
        content = p.completed.anomalia ? (
          <HomeScene
            p={p}
            seen={save.houseSeen}
            markSeen={() => patch({ houseSeen: true })}
            open={open}
            dispatch={dispatch}
            go={go}
          />
        ) : (
          <div className="locked-page">
            <h1>Uma porta ainda por encontrar.</h1>
            <p>O livro fora do catálogo conhece o caminho.</p>
            <button className="primary" onClick={() => go("proibidos")}>
              Procurar o livro
            </button>
          </div>
        );
        break;
      case "final":
        content = canFinal(p) ? (
          <Final
            p={completedProgress(save.events)}
            save={save}
            patch={patch}
            go={go}
          />
        ) : (
          <div className="locked-page">
            <h1>A mesa ainda está vazia.</h1>
            <p>
              {p.completed.anomalia
                ? `Conheça os oito dias da casa e abra o Livro dos Dias Comuns. ${homeStories.filter((s) => p.completed[s.id]).length} de 8 já foram visitados.`
                : "A biblioteca ainda guarda vidas para você conhecer."}
            </p>
            <button
              className="primary"
              onClick={() => go(p.completed.anomalia ? "casa" : "atrio")}
            >
              Continuar a jornada
            </button>
          </div>
        );
        break;
      case "encontros":
      case "tempos":
      case "jardim":
      case "proibidos":
        content = <Wing id={save.route} p={p} open={open} go={go} />;
        break;
      default:
        content = <Library p={p} save={save} go={go} open={open} />;
    }
  return (
    <div
      className={
        "app " +
        (house ? "warm " : "") +
        (save.settings.reduced ? "reduced" : "")
      }
      style={
        { "--reading-scale": save.settings.textSize } as React.CSSProperties
      }
    >
      {!save.introSeen ? (
        <Intro
          reduced={save.settings.reduced}
          enter={() => {
            patch({ introSeen: true });
            go(save.route);
          }}
        />
      ) : (
        <>
          <a
            className="skip-link"
            href="#main"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("main")?.focus();
            }}
          >
            Ir para o conteúdo
          </a>
          <header className="app-header">
            <button
              className="brand"
              onClick={() => go("atrio")}
              aria-label="Voltar ao átrio"
            >
              <Seal />
              <span>
                A BIBLIOTECA
                <br />
                <small>DAS VIDAS QUE NÃO VIVEMOS</small>
              </span>
            </button>
            <span className="header-location">
              {house
                ? "A CASA"
                : story
                  ? "UMA VIDA POSSÍVEL"
                  : save.route === "final"
                    ? "O LIVRO INACABADO"
                    : "ENTRE O TEMPO E O POSSÍVEL"}
            </span>
            <div className="header-actions">
              <button
                className="icon-button"
                onClick={toggleAudio}
                aria-label={audio ? "Desligar som" : "Ativar som"}
                title={audio ? "Desligar som" : "Ativar som"}
              >
                <Icon name={audio ? "sound" : "mute"} />
              </button>
              <button
                className="icon-button"
                aria-label="Abrir preferências"
                onClick={() => setSettings(true)}
              >
                <Icon name="settings" />
              </button>
            </div>
          </header>
          <div id="main" tabIndex={-1}>
            <Suspense
              fallback={
                <div className="loading">
                  <Seal />
                  <p>Encontrando a próxima página…</p>
                </div>
              }
            >
              {content}
            </Suspense>
          </div>
          <nav className="bottom-nav" aria-label="Explorar a biblioteca">
            {[
              ["atrio", "library", "Átrio"],
              ["atlas", "map", "Atlas"],
              ["objetos", "compass", "Objetos"],
              ["observatorio", "star", "Céu"],
              ...(p.completed.anomalia ? [["casa", "home", "A casa"]] : []),
            ].map(([r, icon, label]) => (
              <button
                key={r}
                onClick={() => go(r)}
                className={save.route === r ? "active" : ""}
                aria-current={save.route === r ? "page" : undefined}
              >
                <Icon name={icon} size={18} />
                <span>{label}</span>
                {r === "objetos" && p.items.length > 0 && (
                  <small>{p.items.length}</small>
                )}
              </button>
            ))}
            <div className="progress-note">
              <span className="save-dot" />
              {warning
                ? "Cópia local indisponível"
                : `${allBooks}/7 vidas · jornada salva`}
            </div>
          </nav>
        </>
      )}
      {error && (
        <div className="toast" role="alert">
          {error}
          <button aria-label="Fechar aviso" onClick={() => setError("")}>
            <Icon name="close" />
          </button>
        </div>
      )}
      {warning && !settings && (
        <button className="storage-warning" onClick={() => setSettings(true)}>
          Atenção ao salvamento · ver opções
        </button>
      )}
      {settings && (
        <Suspense fallback={null}>
          <Settings
            save={save}
            patch={patch}
            replace={replace}
            close={() => setSettings(false)}
            warning={warning}
            allowSaving={() => {
              setProtectedSave(false);
              setWarning("");
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
