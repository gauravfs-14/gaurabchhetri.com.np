import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { Post } from "../utils";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post: Post = await import(`@/content/blogs/${params.slug}.mdx`);
  if (!post) {
    notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.frontmatter.title}
      </div>
    )
  );
}
