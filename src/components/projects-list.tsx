import { AnimatedBackground } from "@/components/ui/animated-background";
import { InView } from "@/components/ui/in-view";
import Link from "next/link";
import { getProjects } from "@/app/projects/utils";
import { Calendar } from "lucide-react";

export default async function ProjectsList({
  itemsNumber = 20,
  pagination = false,
  startIndex = 0,
}: {
  itemsNumber?: number;
  pagination?: boolean;
  startIndex?: number;
}) {
  const projects = getProjects();
  const resolvedProjects = (await Promise.all(projects)).sort(
    (a, b) => a.meta.name.localeCompare(b.meta.name)
  );
  if (!pagination) {
    resolvedProjects.slice(startIndex, itemsNumber);
  }

  //   console.log("Posts:", resolvedPosts);
  return (
    <div className="relative">
      <AnimatedBackground
        className="rounded-lg bg-card"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {resolvedProjects.map((project, idx) => {
          return (
            <div
              key={idx}
              data-id={`card-${idx}`}
              className="cursor-pointer p-3 w-full"
            >
              <InView
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.1 + idx * 0.01,
                }}
              >
                <Link
                key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="w-full"
                >
                  <div className="w-full">
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      <Calendar className="inline mr-1 w-4 h-4" />
                    </p>
                    <h2 className="text-xl font-semibold">
                      <span className="group relative inline-block font-semibold text-lg line-clamp-1">
                        {project.meta.name}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                      </span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 w-full">
                    {project.meta.description}
                  </p>
                </Link>
              </InView>
            </div>
          );
        })}
      </AnimatedBackground>
    </div>
  );
}
