import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/projects");
const files = fs.readdirSync(contentDir);

interface ProjectMeta {
    name: string;
    author: string;
    description: string;
    image: string;
    languages: string[];
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    type: string;
    paperUrl?: string;
    featured: boolean;
}

export interface Project {
  default: React.ComponentType;
  frontmatter: ProjectMeta;
  slug: string;
}

export function getProjects() {
  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { default: Project, frontmatter: meta }: Project = await import(
        `@/content/projects/${slug}.mdx`
      );
      return { Project, meta, slug };
    });

  return projects;
}
