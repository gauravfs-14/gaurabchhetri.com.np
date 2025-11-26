"use client";

import * as React from "react";
import {
  Home,
  Book,
  Folder,
  File,
  Code,
  Github,
  Linkedin,
  Mail,
  Globe,
  Link,
} from "lucide-react";

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
import { SiGooglescholar } from "react-icons/si";

const pages = [
  {
    name: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    name: "Projects",
    icon: <Folder />,
    href: "/projects",
  },
  {
    name: "Dev Logs",
    icon: <Book />,
    href: "/devLogs",
  },
  {
    name: "Resume",
    icon: <File />,
    href: "https://resume.gaurabchhetri.com.np",
  },
  {
    name: "Links",
    icon: <Link />,
    href: "/links",
  },
];

const miniTools = [
  {
    name: "CSV to LaTeX",
    icon: <Code />,
    href: "/minitools/csv-to-latex",
  },
];

const socialMedia = [
  {
    name: "GitHub",
    icon: <Github />,
    href: "https://github.com/gaurabchhetri",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/gaurabchhetri",
  },
  {
    name: "Google Scholar",
    icon: <SiGooglescholar />,
    href: "https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en",
  },
  {
    name: "Email",
    icon: <Mail />,
    href: "mailto:contact@gaurabchhetri.com.np",
  },
  {
    name: "ComputeNepal",
    icon: <Globe />,
    href: "https://computenepal.com",
  },
];

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
      {/* <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>K
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
                {command.icon}
                <span>{command.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Mini Tools">
            {miniTools.map((command) => (
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
                {command.icon}
                <span>{command.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social Media">
            {socialMedia.map((command) => (
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
                {command.icon}
                <span>{command.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
