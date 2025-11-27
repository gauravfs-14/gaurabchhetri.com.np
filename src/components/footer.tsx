import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PersonalLinks } from "@/content/links";
import { ComputeNepalLinks } from "@/content/links";
import { Fragment } from "react";

export default function Footer() {
  const renderLinks = ["GitHub", "LinkedIn", "Scholar", "Email"];
  return (
    <footer className="py-6 border-t border-border/50" aria-hidden="true">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-3 flex-wrap text-sm">
          {/* GitHub, LinkedIn, Scholar, Email, ComputeNepal */}
          {PersonalLinks.filter((link) => renderLinks.includes(link.label))
            .concat(
              ComputeNepalLinks.filter((link) =>
                ["ComputeNepal"].includes(link.label)
              )
            )
            .map((link, idx) => (
              <Fragment key={link.label}>
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                  aria-label={link.label}
                >
                  {link.label.toLowerCase()}{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {idx <
                  PersonalLinks.filter((link) =>
                    renderLinks.includes(link.label)
                  ).length && <span className="text-muted-foreground">·</span>}
              </Fragment>
            ))}
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
