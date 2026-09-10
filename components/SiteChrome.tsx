"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { copy, socials, type Lang } from "@/lib/content";

type Theme = "light" | "dark";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = window.localStorage.getItem("gmgndi-lang");
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
    }

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

    const onLang = (event: Event) => {
      const detail = (event as CustomEvent<Lang>).detail;
      if (detail === "id" || detail === "en") setLang(detail);
    };
    window.addEventListener("gmgndi-lang", onLang as EventListener);
    return () => window.removeEventListener("gmgndi-lang", onLang as EventListener);
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
    window.dispatchEvent(new CustomEvent("gmgndi-lang", { detail: next }));
  };

  const t = copy[lang];

  return (
    <>
      <nav className="nav-bar">
        <div className="container-site flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground no-underline"
          >
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
          </Link>
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
              {ready && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {children}

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

export function useSiteLang() {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("gmgndi-lang");
    if (saved === "id" || saved === "en") setLang(saved);

    const onLang = (event: Event) => {
      const detail = (event as CustomEvent<Lang>).detail;
      if (detail === "id" || detail === "en") setLang(detail);
    };
    window.addEventListener("gmgndi-lang", onLang as EventListener);
    return () => window.removeEventListener("gmgndi-lang", onLang as EventListener);
  }, []);

  return lang;
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
