import { InView } from "@/components/ui/in-view";
import { Metadata } from "next";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Badge } from "@/components/ui/badge";
import {
  PersonalLinks,
  ComputeNepalLinks,
  HelpfulToolsLinks,
  UsefulMCPServersLinks,
} from "@/content/links";
import type { LinkCard, LinkItem } from "@/content/links";

export const metadata: Metadata = {
  title: "Links | Gaurab Chhetri",
  description:
    "This is the collection of my social media links and other useful links.",
  openGraph: {
    title: "Links | Gaurab Chhetri",
    description:
      "This is the collection of my social media links and other useful links.",
    images: "/og.png",
  },
};

export default async function Page() {
  const numHelpfulToolsLinks = HelpfulToolsLinks.length;
  const numUsefulMCPServersLinks = UsefulMCPServersLinks.length;

  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10" aria-hidden="true">
      <h1 className="text-3xl font-bold mb-4 text-center">Links</h1>
      <p className="text-muted-foreground text-center mb-14 text-sm max-w-[70%] mx-auto">
        This is the collection of my social media links and other useful links.
      </p>
      <section id="links" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            personalSocialLinks
          </Badge>
        </InView>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <LinksCardList links={PersonalLinks} />
        </div>
      </section>
      <div className="mt-14" />
      <section id="computeNepalLinks" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            computeNepalLinks
          </Badge>
        </InView>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <LinksCardList links={ComputeNepalLinks} />
        </div>
      </section>
      <div className="mt-14" />
      <section id="helpfulToolsLinks" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            helpfulToolsLinks
          </Badge>
        </InView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
          <LinksList
            key="helpfulToolsLinks1"
            links={HelpfulToolsLinks.slice(
              0,
              Math.ceil(numHelpfulToolsLinks / 2)
            )}
          />
          <LinksList
            key="helpfulToolsLinks2"
            links={HelpfulToolsLinks.slice(
              Math.ceil(numHelpfulToolsLinks / 2),
              numHelpfulToolsLinks
            )}
          />
        </div>
      </section>
      <div className="mt-14" />
      <section id="usefulMCPServersLinks" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            usefulMCPServersLinks
          </Badge>
        </InView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
          <LinksList
            links={UsefulMCPServersLinks.slice(
              0,
              Math.ceil(numUsefulMCPServersLinks / 2)
            )}
          />
          <LinksList
            links={UsefulMCPServersLinks.slice(
              Math.ceil(numUsefulMCPServersLinks / 2),
              numUsefulMCPServersLinks
            )}
          />
        </div>
      </section>
      <div className="mt-20" />
    </div>
  );
}

export function LinksCardList({ links }: { links: LinkCard[] }) {
  return (
    <AnimatedBackground
      className="rounded-lg bg-card !w-full"
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
      }}
      enableHover
    >
      {links.map((link, idx) => (
        <div
          key={idx}
          data-id={`card-${idx}`}
          className="cursor-pointer p-3 !w-full mb-2"
        >
          <Link
            href={link.href}
            target="_blank"
            className="!w-full flex items-center gap-2"
            rel={link.type === "external" ? "noopener noreferrer" : "dofollow"}
          >
            <InView
              key={link.label}
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
              <div className="flex items-center gap-2 !w-full">
                <link.icon className="w-7 h-7 text-primary" />
                <div className="flex flex-col">
                  <h2 className="text-md font-bold hover:underline">
                    {link.label}
                  </h2>
                  {link.description && (
                    <p className="text-xs text-muted-foreground !w-full">
                      {link.description}
                    </p>
                  )}
                </div>
              </div>
            </InView>
          </Link>
        </div>
      ))}
    </AnimatedBackground>
  );
}

export function LinksList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="list-disc pl-8">
      {links.map((link, idx) => (
        <InView
          key={link.label}
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
          <li key={idx} className="cursor-pointer mb-3">
            <Link
              href={link.href}
              target="_blank"
              className=" flex flex-col"
              rel={
                link.type === "external" ? "noopener noreferrer" : "dofollow"
              }
            >
              <h2 className="text-md font-bold hover:underline">
                {link.label}{" "}
                {link.type === "internal" && (
                  <span className="text-sm text-muted-foreground font-semibold">
                    (inHouseTool)
                  </span>
                )}
              </h2>
              {link.description && (
                <p className="text-xs text-muted-foreground">
                  {link.description}
                </p>
              )}
            </Link>
          </li>
        </InView>
      ))}
    </ul>
  );
}
