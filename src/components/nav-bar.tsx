import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { InView } from "./ui/in-view";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 pb-20 pt-8 container mx-auto max-w-4xl sticky top-0 z-50">
      {/* Background with backdrop blur and mask for smooth fade */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-lg"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 80%, transparent 100%)'
        }}
      />
      
      {/* Content positioned above the background */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <InView
          variants={{
            hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.5 }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
        >
          <div className="text-lg font-bold">
            <Link href="/" className="">
              {"<Gaurab />"}
            </Link>
          </div>
        </InView>
        <ul className="flex space-x-4 items-center">
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "px-0 text-foreground hover:text-primary"
                )}
              >
                projects
              </Link>
            </li>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li>
              <Link
                href="/blogs"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "px-0 text-foreground hover:text-primary"
                )}
              >
                blogs
              </Link>
            </li>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li className="-mx-2">
              <Link
                href="https://resume.gaurabchhetri.com.np"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "px-0 text-foreground hover:text-primary -ml-2"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                resume <ArrowUpRight className="inline -mx-2 p-0" />
              </Link>
            </li>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li className="-mx-2">
              <Link
                href="https://github.com/gauravfs-14"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="inline ml w-4 h-4" />
              </Link>
            </li>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li className="-mx-2">
              <Link
                href="https://www.linkedin.com/in/gaurabchhetri/"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="inline ml w-4 h-4" />
              </Link>
            </li>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li className="-mx-2">
              <Link
                href="mailto:contact@gaurabchhetri.com.np"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="inline ml w-4 h-4" />
              </Link>
            </li>
          </InView>
          {/* <InView
            variants={{
              hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <li>
              <Link
                href="https://resume.gaurabchhetri.com.np"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                viewResume <ArrowUpRight className="inline ml w-4 h-4" />
              </Link>
            </li>
          </InView> */}
        </ul>
      </div>
    </nav>
  );
}
