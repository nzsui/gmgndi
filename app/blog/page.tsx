"use client";

import Link from "next/link";
import SiteChrome, { useSiteLang } from "@/components/SiteChrome";
import { copy } from "@/lib/content";
import { formatPostDate, getPostCopy, posts } from "@/lib/posts";

export default function BlogIndexPage() {
  const lang = useSiteLang();
  const t = copy[lang];

  return (
    <SiteChrome>
      <main className="container-site py-10 sm:py-14">
        <Link
          href="/"
          className="mb-8 inline-block text-[0.9rem] text-subtle no-underline hover:text-hover"
        >
          {t.articles.back}
        </Link>
        <h1 className="m-0 mb-8 text-[1.55rem] font-bold text-foreground">
          {t.articles.allTitle}
        </h1>
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
      </main>
    </SiteChrome>
  );
}
