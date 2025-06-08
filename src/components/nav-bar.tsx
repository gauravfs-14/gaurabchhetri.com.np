import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { InView } from "./ui/in-view";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 pt-8 container mx-auto max-w-4xl bg-background/50 backdrop-blur-lg sticky top-0 z-50">
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
              href="/#projects"
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
        >
          <li>
            <Link
              href="https://resume.gaurabchhetri.com.np"
              className={cn(buttonVariants({ variant: "default", size: "sm" }))}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume <ExternalLink className="inline ml w-4 h-4" />
            </Link>
          </li>
        </InView>
      </ul>
    </nav>
  );
}
