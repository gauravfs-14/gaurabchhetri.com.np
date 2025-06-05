import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Spotlight } from "./ui/spotlight";
import { Eye } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { InView } from "./ui/in-view";

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <InView
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: idx * 0.05 }}
        >
          <div className="relative w-full h-max overflow-hidden p-[1px] rounded-lg">
            <Spotlight
              className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-100 dark:via-blue-300 dark:to-blue-200"
              size={310}
            />
            {/* Add your project cards here */}
            <div className="w-full relative h-full bg-background rounded-lg p-1 ">
              <Avatar className="w-full aspect-square h-max relative rounded-lg">
                <AvatarImage
                  src=".projects/project-image.jpg"
                  alt="@gauravfs-14 (Gaurab Chhetri)"
                  className="hover:scale-120 transition-transform duration-300 ease-in-out border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-lg object-cover"
                />
                <AvatarFallback className="hover:scale-120 transition-transform duration-300 ease-in-out w-full aspect-square cursor-pointer bg-primary/50 rounded-lg">
                  <span className="text-lg font-semibold">Project Title</span>
                </AvatarFallback>
              </Avatar>
              <div className="p-4">
                <div className="">
                  <Link
                    className="group relative inline-block font-semibold text-lg mb-1 line-clamp-1"
                    href=""
                    target="_blank"
                  >
                    Project Title
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    A brief description of the project goes here. It should be
                    concise and informative, highlighting the key features and
                    technologies used.
                  </p>
                </div>
                <div className="mt-4 flex items-center">
                  <Link
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    <span className="text-muted-foreground hover:text-primary">
                      <Eye className="inline w-12 text-muted-foreground" />
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    <span className="text-muted-foreground hover:text-primary">
                      <SiGithub className="inline w-12" />
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "ml-auto"
                    )}
                  >
                    <span className="text-muted-foreground hover:text-primary">
                      View Details
                      <RiExpandDiagonalFill className="inline-flex ml-2 w-12" />
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
