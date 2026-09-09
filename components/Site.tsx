"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { copy, socials, type Lang } from "@/lib/content";

export default function Site() {
  const [lang, setLang] = useState<Lang>("id");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("gmgndi-lang");
    if (saved === "id" || saved === "en") setLang(saved);

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const t = copy[lang];

  const switchLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("gmgndi-lang", next);
    document.documentElement.lang = next === "id" ? "id" : "en";
  };

  const navLinks = [
    { href: "#tentang", label: t.nav.about },
    { href: "#kerja", label: t.nav.work },
    { href: "#proyek", label: t.nav.projects },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#kontak", label: t.nav.contact },
  ];

  return (
    <>
      <div className="grain" aria-hidden />
      <a
        href="#tentang"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors ${
          scrolled || menuOpen
            ? "bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-mono text-sm tracking-[0.18em]">
            gmgndi
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 font-mono text-[11px] tracking-[0.16em] text-muted">
              <button
                type="button"
                onClick={() => switchLang("id")}
                className={`px-1.5 py-1 transition-colors ${lang === "id" ? "text-foreground" : "hover:text-foreground"}`}
                aria-pressed={lang === "id"}
              >
                ID
              </button>
              <span aria-hidden>/</span>
              <button
                type="button"
                onClick={() => switchLang("en")}
                className={`px-1.5 py-1 transition-colors ${lang === "en" ? "text-foreground" : "hover:text-foreground"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="relative h-9 w-9 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`absolute left-2 right-2 top-[13px] h-px bg-foreground transition ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-2 right-2 top-[18px] h-px bg-foreground transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-2 right-2 top-[23px] h-px bg-foreground transition ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="border-t border-line bg-background/95 px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-5 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/gmgndi-validator.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-media object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.55)_0%,rgba(12,11,10,0.72)_45%,rgba(12,11,10,0.96)_100%)]" />
            <div className="hero-wash absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(196,165,116,0.18),transparent_55%)]" />
          </div>

          <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pb-20 md:pt-24 lg:gap-16">
            <div>
              <p className="animate-rise font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
                {t.hero.kicker}
              </p>
              <h1 className="animate-rise animate-rise-delay-1 mt-5 font-serif text-6xl leading-[0.9] tracking-tight text-foreground md:text-8xl">
                gmgndi
              </h1>
              <p className="animate-rise animate-rise-delay-2 mt-5 max-w-lg font-serif text-2xl leading-snug text-foreground/90 md:text-3xl">
                {t.hero.title}
              </p>
              <p className="animate-rise animate-rise-delay-3 mt-6 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
                {t.hero.lead}
              </p>
              <div className="animate-rise animate-rise-delay-4 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#kerja"
                  className="border border-foreground/30 bg-foreground px-5 py-3 text-sm tracking-wide text-background transition hover:bg-gold hover:border-gold"
                >
                  {t.nav.work}
                </a>
                <a
                  href="#kontak"
                  className="border border-line px-5 py-3 text-sm tracking-wide text-foreground transition hover:border-gold hover:text-gold"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>

            <figure className="animate-rise animate-rise-delay-2 justify-self-start md:justify-self-end">
              <div className="relative aspect-square w-56 overflow-hidden rounded-sm border border-line shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:w-64 md:w-72 lg:w-80">
                <Image
                  src="/images/gmgndi-pfp.png"
                  alt="NFT profile picture gmgndi"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                {t.hero.pfpCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {t.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal px-5 py-8 md:px-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 || i === 3 ? "md:border-l md:border-line" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-3xl text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="tentang"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
        >
          <p className="reveal font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
            {t.about.kicker}
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="reveal font-serif text-4xl leading-tight md:text-5xl">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-base leading-8 text-muted md:text-[17px]">
              {t.about.paragraphs.map((p, i) => (
                <p
                  key={p}
                  className="reveal"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="kerja" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <p className="reveal font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
              {t.work.kicker}
            </p>
            <h2 className="reveal mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              {t.work.title}
            </h2>

            <div className="mt-16 space-y-24">
              {t.work.items.map((item, index) => (
                <article
                  key={item.id}
                  className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[&>figure]:order-first" : ""
                  }`}
                >
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                      {item.index}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-8 text-muted">
                      {item.body}
                    </p>
                  </div>
                  <figure className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyek" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <p className="reveal font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
              {t.projects.kicker}
            </p>
            <h2 className="reveal mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              {t.projects.title}
            </h2>
            <p className="reveal mt-6 max-w-xl text-base leading-8 text-muted">
              {t.projects.lead}
            </p>

            <div className="mt-16 divide-y divide-line border-y border-line">
              {t.projects.items.map((project, index) => (
                <article
                  key={project.id}
                  className="reveal grid gap-8 py-12 md:grid-cols-[minmax(0,1fr)_280px] md:items-center md:gap-12"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <p className="font-mono text-[11px] tracking-[0.18em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="font-mono text-[11px] tracking-[0.16em] text-gold">
                        {project.year}
                      </p>
                    </div>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm tracking-wide text-muted">
                      {project.subtitle}
                    </p>
                    <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                      {project.body}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[11px] tracking-[0.14em] text-foreground/70 uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figure className="relative aspect-[16/11] overflow-hidden rounded-sm border border-line md:aspect-square">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeri" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <p className="reveal font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
              {t.gallery.kicker}
            </p>
            <h2 className="reveal mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              {t.gallery.title}
            </h2>

            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
              {t.gallery.items.map((item, i) => (
                <figure
                  key={item.src}
                  className={`reveal group relative overflow-hidden rounded-sm border border-line ${
                    i === 0
                      ? "col-span-2 aspect-square md:col-span-3 md:row-span-2"
                      : i === 1
                        ? "aspect-[4/5] md:col-span-3 md:aspect-[16/10]"
                        : "aspect-square md:col-span-2"
                  }`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="scroll-mt-24 border-t border-line">
          <div className="reveal mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <p className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
              {t.contact.kicker}
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-muted">
              {t.contact.body}
            </p>
            <a
              href={socials.x}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-line px-5 py-3 text-sm tracking-wide transition hover:border-gold hover:text-gold"
            >
              {t.contact.cta}
              <span className="font-mono text-xs">{socials.handle}</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 font-mono text-[11px] tracking-[0.16em] text-muted md:px-8">
          <p>{t.footer}</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
