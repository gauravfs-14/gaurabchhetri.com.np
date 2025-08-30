"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { InView } from "./ui/in-view";
import { SiGooglescholar } from "react-icons/si";
import { useState } from "react";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 pb-16 sm:pb-20 pt-6 sm:pt-8 container mx-auto max-w-4xl sticky top-0 z-50">
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
            <div className="text-base sm:text-lg font-bold">
              <Link href="/" className="">
                <span className="md:hidden">
                  {"<G />"}
                </span>
                <span className="hidden md:block">
                  {"<Gaurab />"}
                </span>
              </Link>
            </div>
          </InView>
          <ul className="flex space-x-2 sm:space-x-4 items-center">
            <InView
              variants={{
                hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
            >
              <li className="hidden sm:block">
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
              <li className="hidden sm:block">
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
              <li className="hidden sm:block -mx-2">
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
              <li className="-mx-1 sm:-mx-2">
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
              <li className="-mx-1 sm:-mx-2">
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
              <li className="-mx-1 sm:-mx-2">
                <Link
                  href="https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en"
                  className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGooglescholar className="inline ml w-4 h-4" />
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
              <li className="-mx-1 sm:-mx-2">
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
            {/* Mobile Menu Button */}
            <InView
              variants={{
                hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
            >
              <li className="sm:hidden -mx-1">
                <button
                  onClick={toggleDrawer}
                  className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                  aria-label="Toggle navigation menu"
                >
                  <Menu className="w-4 h-4" />
                </button>
              </li>
            </InView>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={cn(
        "fixed inset-0 z-50 sm:hidden",
        isDrawerOpen ? "block" : "hidden"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeDrawer}
        />
        
        {/* Drawer */}
        <div className={cn(
          "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border/20 shadow-2xl transform transition-transform duration-300 ease-in-out",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <h2 className="text-lg font-semibold">{"<Gaurab />"}</h2>
            <button
              onClick={closeDrawer}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Drawer Content */}
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                pages
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/projects"
                  onClick={closeDrawer}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start text-base"
                  )}
                >
                  projects
                </Link>
                <Link
                  href="/blogs"
                  onClick={closeDrawer}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start text-base"
                  )}
                >
                  blogs
                </Link>
                <Link
                  href="https://resume.gaurabchhetri.com.np"
                  onClick={closeDrawer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start text-base"
                  )}
                >
                  resume <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                connect
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="https://github.com/gauravfs-14"
                  onClick={closeDrawer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start"
                  )}
                >
                  <Github className="mr-2 w-4 h-4" />
                  github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gaurabchhetri/"
                  onClick={closeDrawer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start"
                  )}
                >
                  <Linkedin className="mr-2 w-4 h-4" />
                  linkedin
                </Link>
                <Link
                  href="https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en"
                  onClick={closeDrawer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start"
                  )}
                >
                  <SiGooglescholar className="mr-2 w-4 h-4" />
                  scholar
                </Link>
                <Link
                  href="mailto:contact@gaurabchhetri.com.np"
                  onClick={closeDrawer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start"
                  )}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
