import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Spotlight } from "./ui/spotlight";
import { ArrowRight, Eye } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { InView } from "./ui/in-view";
import { getProjects } from "@/lib/getProjects";
import { Badge } from "./ui/badge";


export default async function ProjectsGrid({displayFeaturesOnly = false}: {displayFeaturesOnly?: boolean}) {
  const projects = getProjects();
  const resolvedProjects = await Promise.all(projects);
  const featuredProjects = displayFeaturesOnly ? resolvedProjects.filter((project) => project.meta.featured) : resolvedProjects.filter((project) => !project.meta.featured);
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div className={cn("grid grid-cols-1 gap-2", displayFeaturesOnly ? "md:grid-cols-2" : "md:grid-cols-3")}>
      {featuredProjects.map((project, idx) => (
        <InView
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 + idx * 0.01 }}
        >
          
          <div className="relative w-full h-max overflow-hidden p-[1px] rounded-lg">
            <Spotlight
              className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-100 dark:via-blue-300 dark:to-blue-200"
              size={310}
            />
              {/* Add your project cards here */}
              <div className="w-full relative h-full bg-background rounded-lg p-1 ">
                <Badge variant={"secondary"} className="absolute top-2 right-2 z-10">{project.meta.type}</Badge>
                <Link
                  href={`/projects/${project.slug}`}
                > 
                <Avatar className="w-full aspect-video h-max relative rounded-lg">
                  <AvatarImage
                    src={`/projects/${project.meta.image}`}
                    alt="@gauravfs-14 (Gaurab Chhetri)"
                    className="bg-white shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-lg object-contain"
                  />
                  <AvatarFallback className="hover:scale-120 transition-transform duration-300 ease-in-out w-full aspect-square cursor-pointer bg-primary/50 rounded-lg">
                    <span className="text-lg font-semibold">
                      {project.meta.name}
                    </span>
                  </AvatarFallback>
                </Avatar>
                </Link>
                <div className="py-4 px-2">
                  <div className="">
                    <Link
                      className="group relative inline-block font-semibold text-lg mb-1 hover:underline"
                      href={
                        `/projects/${project.slug}`
                      }
                    >
                      <span className="line-clamp-2">
                      {project.meta.name}
                      </span>
                      {/* <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span> */}
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {project.meta.description || "No description available."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 my-3 flex-wrap">
                    {project.meta.languages.map((tag) => (
                      <Badge key={tag} variant={"outline"}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center">
                    {project.meta.liveUrl && (
                      <Link
                        href={project.meta.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "ghost" }))}
                      >
                        <span className="text-muted-foreground hover:text-primary">
                          <Eye className="inline w-12 text-muted-foreground" />
                        </span>
                      </Link>
                    )}
                    {project.meta.githubUrl && (
                      <Link
                        href={project.meta.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "ghost" }))}
                      >
                        <span className="text-muted-foreground hover:text-primary">
                          <SiGithub className="inline w-12" />
                        </span>
                      </Link>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className={cn(buttonVariants({ variant: "link" }), "ml-auto")}
                    >
                      <span className="text-muted-foreground hover:text-primary">
                        learnMore <ArrowRight className="inline w-4 text-muted-foreground" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </InView>
      ))}
    </div>
  );
}
