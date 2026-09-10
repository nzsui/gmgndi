"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { copy, socials, type Lang } from "@/lib/content";

type Theme = "light" | "dark";

export default function Site() {
  const [lang, setLang] = useState<Lang>("id");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = window.localStorage.getItem("gmgndi-lang");
    if (savedLang === "id" || savedLang === "en") setLang(savedLang);

    const savedTheme = window.localStorage.getItem("gmgndi-theme") as Theme | null;
    const initial: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    applyTheme(initial);
    setTheme(initial);
    setReady(true);
  }, []);

  const applyTheme = (next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("gmgndi-theme", next);
  };

  const switchLang = () => {
    const next: Lang = lang === "id" ? "en" : "id";
    setLang(next);
    window.localStorage.setItem("gmgndi-lang", next);
    document.documentElement.lang = next;
  };

  const t = copy[lang];

  return (
    <>
      <nav className="nav-bar">
        <div className="container-site flex h-14 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 text-foreground no-underline">
            <Image
              src="/images/gmgndi-pfp.png"
              alt=""
              width={28}
              height={28}
              className="rounded-full object-cover"
              priority
            />
            <span className="text-[0.95rem] font-semibold tracking-tight">
              {t.brand}
            </span>
          </a>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={switchLang}
              className="lang-btn text-[0.7rem] font-semibold tracking-wide"
              aria-label="Switch language"
              title="Switch language"
            >
              {t.footer.lang}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-btn"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {ready && theme === "dark" ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <div className="container-site pt-10 pb-6 sm:pt-14">
          <div className="lead-row">
            <div>
              <h1 className="m-0 mb-3 text-[1.55rem] font-bold leading-tight text-foreground sm:text-[1.7rem]">
                {t.hero.title}
              </h1>
              <p className="m-0 text-[0.98rem] leading-7 text-muted">
                {t.hero.lead}
                <br />
                <i className="text-subtle">{t.hero.note}</i>
              </p>
            </div>
            <Image
              src="/images/gmgndi-pfp.png"
              alt="gmgndi"
              width={200}
              height={200}
              priority
              className="h-[160px] w-[160px] justify-self-start rounded-full object-cover sm:h-[200px] sm:w-[200px] sm:justify-self-end"
            />
          </div>
        </div>

        <div className="container-site pb-4 pt-8">
          <section className="mb-12">
            <h2 className="m-0 mb-5 flex flex-wrap items-center text-[1.35rem] font-bold text-foreground">
              {t.projects.title}
              <span className="view-chip">{t.projects.items.length}</span>
            </h2>
            <div>
              {t.projects.items.map((item) => (
                <div key={item.title} className="list-row text-muted">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="m-0 mb-5 text-[1.35rem] font-bold text-foreground">
              {t.focus.title}
            </h2>
            <div>
              {t.focus.items.map((item) => (
                <div key={item.title} className="list-row text-muted">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="m-0 mb-5 text-[1.35rem] font-bold text-foreground">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-[0.98rem] leading-7 text-muted">
              {t.about.paragraphs.map((p) => (
                <p key={p} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-line py-10 text-center text-[0.85rem] text-subtle">
        <div className="container-site">
          <p className="m-0 mb-3">{t.footer.credit}</p>
          <p className="m-0">
            <a
              href={socials.x}
              target="_blank"
              rel="noreferrer"
              className="text-subtle no-underline transition-colors hover:text-hover"
            >
              /{socials.handle}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 128 128" aria-hidden>
      <path
        fill="#FCC21B"
        d="M105.87,14.99c-3.74-3.39-7.91-6.38-12.42-8.89c-0.87-0.49-2-0.35-2.71,0.33 c-0.71,0.68-0.83,1.73-0.29,2.53c15.63,22.93,12.29,52.52-8.11,71.97c-11.9,11.35-27.85,17.6-44.91,17.6 c-11.39,0-22.54-2.86-32.24-8.27c-0.87-0.49-2-0.36-2.71,0.33c-0.71,0.68-0.83,1.72-0.28,2.53c2.81,4.12,6.12,7.93,9.86,11.32 c12.61,11.45,29.27,17.76,46.9,17.76c18.27,0,35.34-6.7,48.09-18.86c12.53-11.94,19.31-27.71,19.09-44.4 C125.92,42.25,118.72,26.64,105.87,14.99z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="#FCC21B" />
      <path
        stroke="#FCC21B"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}
