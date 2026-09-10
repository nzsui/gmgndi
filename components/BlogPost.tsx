"use client";

import Link from "next/link";
import SiteChrome, { useSiteLang } from "@/components/SiteChrome";
import { copy } from "@/lib/content";
import { formatPostDate, getPost, getPostCopy } from "@/lib/posts";

export default function BlogPost({ slug }: { slug: string }) {
  const lang = useSiteLang();
  const t = copy[lang];
  const post = getPost(slug);

  if (!post) return null;

  const item = getPostCopy(post, lang);

  return (
    <SiteChrome>
      <main className="container-site py-10 sm:py-14">
        <Link
          href="/blog"
          className="mb-8 inline-block text-[0.9rem] text-subtle no-underline hover:text-hover"
        >
          {t.articles.back}
        </Link>

        <article>
          <p className="m-0 mb-3 text-[0.85rem] text-subtle">
            {formatPostDate(post.date, lang)}
          </p>
          <h1 className="m-0 mb-4 text-[1.7rem] font-bold leading-tight text-foreground sm:text-[1.9rem]">
            {item.title}
          </h1>
          <p className="m-0 mb-10 text-[1rem] leading-7 text-subtle italic">
            {item.excerpt}
          </p>

          <div className="post-body space-y-5">
            {item.body.map((paragraph) => (
              <p key={paragraph} className="m-0 text-[1rem] leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </SiteChrome>
  );
}
