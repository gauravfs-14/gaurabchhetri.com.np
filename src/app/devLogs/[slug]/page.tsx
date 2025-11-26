import { notFound } from "next/navigation";
import { getPosts, Post } from "../utils";
import Image from "next/image";
// import ShareButtons from "../share-buttons";

export async function generateStaticParams() {
  const posts = (await getPosts()).map(async (post) => await post);
  const resolvedPosts = await Promise.all(posts);
  return resolvedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter: meta }: Post = await import(
    `@/content/blogs/${slug}.mdx`
  );
  if (!meta) {
    notFound();
  }
  return {
    title: meta.title + " | Gaurab Chhetri",
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image
        ? [
            {
              url: "/blogs/" + meta.image,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ]
        : undefined,
      type: "article",
      publishedTime: meta.date,
    },
    keywords: meta.tags?.join(", "),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, frontmatter: meta }: Post = await import(
    `@/content/blogs/${slug}.mdx`
  );
  if (!Post) {
    notFound();
  }
  if (!meta) {
    notFound();
  }

  return (
    <>
      <div
        className="container max-w-3xl mx-auto px-4 pb-10"
        aria-hidden="true"
      >
        <p className="text-sm text-gray-500 mb-4">
          By{" "}
          <span className="font-medium">{meta.author ?? "Gaurab Chhetri"}</span>{" "}
          on{" "}
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1>{meta.title}</h1>
        {meta.image && (
          <div className="relative w-full mx-auto aspect-video mb-18 -mt-8">
            <Image
              src={`/blogs/${meta.image}`}
              alt={meta.title}
              fill
              className="object-cover rounded-lg transition-all duration-300 ease-in-out"
            />
          </div>
        )}
        <Post />
      </div>
      {/* <ShareButtons slug={slug} frontmatter={meta} /> */}
    </>
  );
}

export const dynamicParams = false;
