import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/blogs");
const files = fs.readdirSync(contentDir);

interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  author?: string;
}

export interface Post {
  default: React.ComponentType;
  frontmatter: PostMeta;
  slug: string;
}

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPosts() {
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { default: Post, frontmatter: meta }: Post = await import(
        `@/content/blogs/${slug}.mdx`
      );
      return { Post, meta, slug };
    });

  return posts;
}
