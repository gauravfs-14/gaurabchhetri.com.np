"use client";

import * as React from "react";
import { Home, Book, Folder, File, Code, Link } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import {
  PersonalLinks,
  HelpfulToolsLinks,
  ComputeNepalLinks,
  UsefulMCPServersLinks,
} from "@/content/links";

const pages = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "Projects",
    icon: Folder,
    href: "/projects",
  },
  {
    name: "Dev Logs",
    icon: Book,
    href: "/devLogs",
  },
  {
    name: "Resume",
    icon: File,
    href: "https://resume.gaurabchhetri.com.np",
  },
  {
    name: "Links",
    icon: Link,
    href: "/links",
  },
];

const miniTools = HelpfulToolsLinks.filter(
  (link) => link.type === "internal" && link.href.includes("/minitools")
);

export function CommandBox() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* <p
        className="text-muted-foreground text-sm hover:cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <kbd className="bg-muted group-hover:bg-primary/10 text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-sm font-medium">⌘</span>K
        </kbd>
      </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((command) => (
              <CommandItem
                key={command.name}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <command.icon />
                <span>{command.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="miniTools">
            {miniTools.map((command) => (
              <CommandItem
                key={command.label}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <Code />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="personalSocialLinks">
            {PersonalLinks.map((command) => (
              <CommandItem
                key={command.label}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <command.icon />
                <span>{command.label}</span>
                <span className="text-xs text-muted-foreground">
                  {command.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="computeNepalLinks">
            {ComputeNepalLinks.map((command) => (
              <CommandItem
                key={command.label}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <command.icon />
                <span>{command.label}</span>
                <span className="text-xs text-muted-foreground">
                  {command.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="helpfulTools">
            {HelpfulToolsLinks.filter(
              (link) => !link.href.includes("/minitools")
            ).map((command) => (
              <CommandItem
                key={command.label}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <Code />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="usefulMCPServersLinks">
            {UsefulMCPServersLinks.map((command) => (
              <CommandItem
                key={command.label}
                onSelect={() => {
                  setOpen(false);
                  if (command.href.startsWith("http")) {
                    window.open(command.href, "_blank");
                  } else {
                    router.push(command.href);
                  }
                }}
              >
                <Code />
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
