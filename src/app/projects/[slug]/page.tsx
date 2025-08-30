import { notFound } from "next/navigation";
import { getProjects, Project } from "../utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye, Github } from "lucide-react";

export async function generateStaticParams() {
  const projects = (await getProjects()).map(async (project) => await project);
  const resolvedProjects = await Promise.all(projects);
  return resolvedProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter: meta }: Project = await import(
    `@/content/projects/${slug}.mdx`
  );
  if (!meta) {
    notFound();
  }
  return {
    title: meta.name + " | Gaurab Chhetri",
    description: meta.description,
    openGraph: {
      title: meta.name,
      description: meta.description,
      images: meta.image
        ? [
            {
              url: meta.image,
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
      type: "article",
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
  const { default: Project, frontmatter: meta }: Project = await import(
    `@/content/projects/${slug}.mdx`
  );
  if (!Project) {
    notFound();
  }
  if (!meta) {
    notFound();
  }

  return (
    <>
      <div className="container max-w-3xl mx-auto px-4 pt-8 pb-20">
        <p className="text-sm text-muted-foreground mb-4">
          By{" "}
          <span className="font-medium">{meta.author ?? "Gaurab Chhetri"}</span>
          {meta.type && (
            <>
              {" - "}
              <span className="text-muted-foreground">{meta.type} Project</span>
            </>
          )}
        </p>
        <h1>{meta.name}</h1>
        <p className="text-sm text-muted-foreground mb-4 -mt-4">
          {meta.description}
        </p>
        <div className="flex justify-start gap-2 mb-8 mt-8">
        {meta.liveUrl && (
          <div className="flex justify-center">
            <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size={"sm"} className="cursor-pointer">viewLive <Eye className="w-4 h-4" /></Button>
              </a>
            </div>
          )}
        {meta.githubUrl && (
          <div className="flex justify-center">
            <a href={meta.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size={"sm"} className="cursor-pointer">viewCode <Github className="w-4 h-4" /></Button>
            </a>
          </div>
        )}
        {meta.paperUrl && (
          <div className="flex justify-center">
            <a href={meta.paperUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size={"sm"} className="cursor-pointer">readPaper <ArrowUpRight className="w-4 h-4" /></Button>
            </a>
          </div>
        )}
        </div>
        {meta.image && (
          <div className="relative w-full mx-auto aspect-video mb-18" id="featured-image">
            <Image
              src={`/projects/${meta.image}`}
              alt={meta.name}
              fill
              className="object-cover rounded-lg transition-all duration-300 ease-in-out bg-white p-2"
            />
          </div>
        )}
        <Project />
      </div>
    </>
  );
}

export const dynamicParams = false;
