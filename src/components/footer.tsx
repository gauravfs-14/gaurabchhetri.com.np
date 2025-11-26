import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-border/50" aria-hidden="true">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-3 flex-wrap text-sm">
          {/* GitHub, LinkedIn, Scholar, Email, ComputeNepal */}
          <Link
            href="https://github.com/gauravfs-14"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
            aria-label="GitHub"
          >
            github <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link
            href="https://www.linkedin.com/in/gaurabchhetri/"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
            aria-label="LinkedIn"
          >
            linkedin <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link
            href="https://scholar.google.com/citations?user=0123456789&hl=en"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
            aria-label="Google Scholar"
          >
            scholar <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link
            href="https://computenepal.com"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
            aria-label="ComputeNepal"
          >
            computenepal <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link
            href="mailto:contact@gaurabchhetri.com.np"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
            aria-label="Email"
          >
            email <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://gaurabchhetri.com.np"
            className="text-primary hover:underline inline-flex items-center gap-0"
          >
            Gaurab Chhetri
          </Link>
          . All rights reserved. <span className="mx-1">·</span>
          <Link href="/llms.txt" className="text-primary hover:underline">
            llms.txt
          </Link>
          <span className="mx-1">·</span>
          <Link href="/sitemap.xml" className="text-primary hover:underline">
            sitemap.xml
          </Link>
        </p>
      </div>
    </footer>
  );
}
