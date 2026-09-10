"use client";

import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/content";
import { formatPostDate, getPostCopy, posts } from "@/lib/posts";
import SiteChrome, { useSiteLang } from "@/components/SiteChrome";

export default function Site() {
  const lang = useSiteLang();
  const t = copy[lang];

  return (
    <SiteChrome>
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
              {t.articles.title}
              <Link href="/blog" className="view-chip no-underline">
                {t.articles.viewAll}
              </Link>
            </h2>
            <div>
              {posts.map((post) => {
                const item = getPostCopy(post, lang);
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="list-row text-muted no-underline"
                  >
                    <h3>{item.title}</h3>
                    <p>
                      {formatPostDate(post.date, lang)} · {item.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

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
    </SiteChrome>
  );
}
