"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SiteChrome, { useSiteLang } from "@/components/SiteChrome";
import { copy, socials } from "@/lib/content";
import { formatPostDate, getPost, getPostCopy } from "@/lib/posts";

function readingTime(parts: string[], lang: "id" | "en") {
  const words = parts.join(" ").trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return lang === "en" ? `${minutes} min read` : `${minutes} menit baca`;
}

export default function BlogPost({ slug }: { slug: string }) {
  const lang = useSiteLang();
  const t = copy[lang];
  const post = getPost(slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("article-root");
      if (!article) return;
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-article.getBoundingClientRect().top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, lang]);

  if (!post) return null;

  const item = getPostCopy(post, lang);
  const timeLabel = readingTime(
    [...item.body, item.quote, ...item.closing],
    lang,
  );

  return (
    <SiteChrome>
      <div className="reading-progress" aria-hidden>
        <div
          className="reading-progress-bar"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <main className="article-shell">
        <Link href="/blog" className="article-back">
          {t.articles.back}
        </Link>

        <article id="article-root" className="article">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-kicker">
                {lang === "en" ? "Essay" : "Esai"}
              </span>
              <span className="article-dot" aria-hidden>
                ·
              </span>
              <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
              <span className="article-dot" aria-hidden>
                ·
              </span>
              <span>{timeLabel}</span>
            </div>

            <h1 className="article-title">{item.title}</h1>
            <p className="article-deck">{item.excerpt}</p>

            <div className="article-byline">
              <Image
                src="/images/gmgndi-pfp.png"
                alt=""
                width={44}
                height={44}
                className="article-avatar"
              />
              <div>
                <p className="article-author">gmgndi</p>
                <p className="article-author-role">
                  {lang === "en" ? "On-chain since 2017" : "On-chain sejak 2017"}
                </p>
              </div>
            </div>
          </header>

          <div className="article-rule" aria-hidden />

          <div className="article-body">
            {item.body.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "article-lead" : undefined}
              >
                {paragraph}
              </p>
            ))}

            <blockquote className="article-quote">
              <p>{item.quote}</p>
            </blockquote>

            {item.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <footer className="article-footer">
            <div className="article-rule" aria-hidden />
            <div className="article-endcard">
              <Image
                src="/images/gmgndi-pfp.png"
                alt=""
                width={56}
                height={56}
                className="article-avatar lg"
              />
              <div>
                <p className="article-author">gmgndi</p>
                <p className="article-endcopy">
                  {lang === "en"
                    ? "Validator, researcher, LP, ICO/IDO & retro. Still here after the noise."
                    : "Validator, researcher, LP, ICO/IDO & retro. Masih di sini setelah keramaian mereda."}
                </p>
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="article-follow"
                >
                  {socials.handle}
                </a>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </SiteChrome>
  );
}
