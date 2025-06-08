import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Spotlight } from "./ui/spotlight";
import { Eye, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { InView } from "./ui/in-view";
import { getProjects } from "@/lib/getProjects";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default async function ProjectsGrid() {
  const projects = getProjects();
  const resolvedProjects = await Promise.all(projects);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {resolvedProjects.map((project, idx) => (
        <InView
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: idx * 0.05 }}
        >
          <div className="relative w-full h-max overflow-hidden p-[1px] rounded-lg">
            <Spotlight
              className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-100 dark:via-blue-300 dark:to-blue-200"
              size={310}
            />
            <Dialog>
              {/* Add your project cards here */}
              <div className="w-full relative h-full bg-background rounded-lg p-1 ">
                <Avatar className="w-full aspect-square h-max relative rounded-lg">
                  <AvatarImage
                    src={`/projects/${project.meta.image}`}
                    alt="@gauravfs-14 (Gaurab Chhetri)"
                    className="hover:scale-120 transition-transform duration-300 ease-in-out border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-lg object-cover"
                  />
                  <AvatarFallback className="hover:scale-120 transition-transform duration-300 ease-in-out w-full aspect-square cursor-pointer bg-primary/50 rounded-lg">
                    <span className="text-lg font-semibold">
                      {project.meta.name}
                    </span>
                  </AvatarFallback>
                </Avatar>
                <div className="p-4">
                  <div className="">
                    <Link
                      className="group relative inline-block font-semibold text-lg mb-1 line-clamp-1"
                      href={
                        project.meta.liveUrl || project.meta.githubUrl || "#"
                      }
                      target="_blank"
                    >
                      {project.meta.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {project.meta.description || "No description available."}
                    </p>
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
                    <DialogTrigger
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "ml-auto cursor-pointer"
                      )}
                      asChild
                    >
                      <span className="text-muted-foreground hover:text-primary">
                        View Details
                        <RiExpandDiagonalFill className="inline-flex ml-2 w-12" />
                      </span>
                    </DialogTrigger>
                  </div>
                </div>
              </div>
              <DialogContent className="max-h-[90vh] overflow-y-auto !max-w-2xl w-full p-0">
                <DialogHeader className="sticky top-0 inset-x-0 z-10 bg-background p-6 border-b">
                  <DialogTitle>{project.meta.name}</DialogTitle>
                  <DialogClose
                    asChild
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    <Button type="button" variant="secondary">
                      <X className="h-5 w-5" />
                    </Button>
                  </DialogClose>
                </DialogHeader>
                <div className="h-full prose dark:prose-invert break-words !max-w-xl mx-auto py-8">
                  <Avatar className="w-full aspect-square h-max relative rounded-lg">
                    <AvatarImage
                      src={`/projects/${project.meta.image}`}
                      alt="@gauravfs-14 (Gaurab Chhetri)"
                      className="hover:scale-120 transition-transform duration-300 ease-in-out border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-lg object-cover"
                    />
                    <AvatarFallback className="hover:scale-120 transition-transform duration-300 ease-in-out w-full aspect-square cursor-pointer bg-primary/50 rounded-lg">
                      <span className="text-lg font-semibold">
                        {project.meta.name}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <project.Project />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </InView>
      ))}
    </div>
  );
}
