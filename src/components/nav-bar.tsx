import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 pt-8 container mx-auto max-w-4xl bg-background/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="text-lg font-bold">
        <Link href="/" className="">
          {"<Gaurab />"}
        </Link>
      </div>
      <ul className="flex space-x-4 items-center">
        <li>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "px-0 text-foreground hover:text-primary"
            )}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="#blogs"
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "px-0 text-foreground hover:text-primary"
            )}
          >
            blogs
          </Link>
        </li>
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
      </ul>
    </nav>
  );
}
