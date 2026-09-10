import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import { getPost, posts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.id.title} — gmgndi`,
    description: post.id.excerpt,
    openGraph: {
      title: post.id.title,
      description: post.id.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return <BlogPost slug={slug} />;
}
