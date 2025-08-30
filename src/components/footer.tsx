import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 flex-wrap">
            {/* GitHub, LinkedIn, Scholar, Email, ComputeNepal */}
          <Link href="https://github.com/gauravfs-14" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0">
          github <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/gaurabchhetri/" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0">
          linkedin <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="https://scholar.google.com/citations?user=0123456789&hl=en" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0">
          scholar <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="https://computenepal.com" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0">
          computenepal <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="mailto:contact@gaurabchhetri.com.np" target="_blank" className="text-primary hover:underline inline-flex items-center gap-0">
          email <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          &copy; {new Date().getFullYear()} <Link href="https://gaurabchhetri.com.np" className="text-primary hover:underline inline-flex items-center gap-0">Gaurab Chhetri</Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}