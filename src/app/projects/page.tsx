import ProjectsGrid from "@/components/projects-grid";
import { Badge } from "@/components/ui/badge";
import { InView } from "@/components/ui/in-view";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Gaurab Chhetri",
  description: "Here are some of the projects I have worked on. Feel free to explore and engage with the content. More projects available on my GitHub.",
  openGraph: {
    title: "Projects | Gaurab Chhetri",
    description: "Here are some of the projects I have worked on. Feel free to explore and engage with the content. More projects available on my GitHub.",
    images: "/project-og.png",
  },
};


export default async function Page() {
  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
      <p className="text-muted-foreground text-center mb-14 text-sm max-w-[70%] mx-auto">
        Here are some of the projects I have worked on. Feel free to explore and
        engage with the content. More projects available on my <Link href="https://github.com/gauravfs-14" className="text-primary hover:underline inline-flex items-center gap-0">GitHub <ArrowUpRight className="w-4 h-4" /></Link>.
      </p>
      <section id="projects" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            featuredProjects
          </Badge>
        </InView>
        <ProjectsGrid displayFeaturesOnly={true} />
      </section>
      <div className="mt-14" />
      <section id="allProjects" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            allProjects
          </Badge>
        </InView>
        <ProjectsGrid displayFeaturesOnly={false} />
      </section>
      <div className="mt-20" />
    </div>
  );
}
