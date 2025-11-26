import { Github, Linkedin, Mail, Globe, Users, LucideIcon } from "lucide-react";
import {
  SiBluesky,
  SiFacebook,
  SiGooglescholar,
  SiGravatar,
  SiInstagram,
  SiNpm,
  SiOrcid,
  SiPython,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

export interface LinkItem {
  href: string;
  label: string;
  description?: string;
  type?: "internal" | "external";
}

export interface LinkCard extends LinkItem {
  icon: LucideIcon | IconType;
}

export const PersonalLinks: LinkCard[] = [
  {
    icon: Github,
    href: "https://github.com/gauravfs-14",
    label: "GitHub",
    description: "@gauravfs-14",
    type: "external",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gaurabchhetri",
    label: "LinkedIn",
    description: "/in/gaurabchhetri",
    type: "external",
  },
  {
    icon: SiGooglescholar,
    href: "https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en",
    label: "Google Scholar",
    description: "Gaurab Chhetri",
    type: "external",
  },
  {
    icon: Mail,
    href: "mailto:contact@gaurabchhetri.com.np",
    label: "Email",
    description: "contact@gaurabchhetri.com.np",
    type: "external",
  },
  {
    icon: SiX,
    href: "https://x.com/gaurav_fs_14",
    label: "X (Twitter)",
    description: "@gaurav_fs_14",
    type: "external",
  },
  {
    icon: SiOrcid,
    href: "https://orcid.org/0009-0000-0124-4814",
    label: "ORCID",
    description: "0009-0000-0124-4814",
    type: "external",
  },
  {
    icon: SiNpm,
    href: "https://www.npmjs.com/~gauravfs-14",
    label: "NPM JS",
    description: "@gauravfs-14",
    type: "external",
  },
  {
    icon: SiPython,
    href: "https://pypi.org/user/gauravfs-14/",
    label: "PyPI",
    description: "@gauravfs-14",
    type: "external",
  },
  {
    icon: SiGravatar,
    href: "https://gravatar.com/gaurabchhetri",
    label: "Gravatar",
    description: "gaurabchhetri",
    type: "external",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/gaurabch.bsky.social",
    label: "Bluesky",
    description: "@gaurabch.bsky.social",
    type: "external",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/gaurav_fs_14/",
    label: "Instagram",
    description: "@gaurav_fs_14",
    type: "external",
  },
  {
    icon: SiYoutube,
    href: "https://www.youtube.com/@gaurabchhetri",
    label: "YouTube",
    description: "@gaurabchhetri",
    type: "external",
  },
];

export const ComputeNepalLinks: LinkCard[] = [
  {
    icon: Globe,
    href: "https://computenepal.com",
    label: "ComputeNepal",
    description: "https://computenepal.com",
    type: "external",
  },
  {
    icon: Github,
    href: "https://github.com/ComputeNepal",
    label: "GitHub",
    description: "@ComputeNepal",
    type: "external",
  },
  {
    icon: Mail,
    href: "mailto:contact@computenepal.com",
    label: "Email",
    description: "contact@computenepal.com",
    type: "external",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/computenepal",
    label: "LinkedIn",
    description: "company/computenepal",
    type: "external",
  },
  {
    icon: SiX,
    href: "https://x.com/computenepal",
    label: "X (Twitter)",
    description: "@computenepal",
    type: "external",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/computenepal/",
    label: "Instagram",
    description: "@computenepal",
    type: "external",
  },
  {
    icon: SiYoutube,
    href: "https://www.youtube.com/@computenepal",
    label: "YouTube",
    description: "@computenepal",
    type: "external",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/computenepal",
    label: "Facebook",
    description: "@computenepal",
    type: "external",
  },
  {
    icon: Users,
    href: "https://www.facebook.com/groups/computenepal",
    label: "Community",
    description: "groups/computenepal",
    type: "external",
  },
];

export const HelpfulToolsLinks: LinkItem[] = [
  {
    label: "CSV to LaTeX",
    href: "https://gaurabchhetri.com.np/minitools/csv-to-latex",
    description: "Convert CSV tables to LaTeX tabular",
    type: "internal",
  },
  {
    label: "Markdown Live Preview",
    href: "https://markdownlivepreview.com/",
    description: "Preview Markdown in real-time",
    type: "external",
  },
  {
    label: "tldraw",
    href: "https://tldraw.com/",
    description: "Free online whiteboard",
    type: "external",
  },
  {
    label: "Word Counter",
    href: "https://wordcounter.net/",
    description: "Count words in a text",
    type: "external",
  },
  {
    label: "I Love PDF",
    href: "https://ilovepdf.com/",
    description: "All in one PDF tool",
    type: "external",
  },
  {
    label: "Optimize Images CLI",
    href: "https://www.npmjs.com/package/optimize-images-cli",
    description: "CLI tool to optimize images",
    type: "internal",
  },
];

export const UsefulMCPServersLinks: LinkItem[] = [
  {
    label: "LitMCP Server",
    href: "https://github.com/gauravfs-14/lit-mcp",
    description: "Give LLM access to ArXiv, and DBLP papers",
    type: "internal",
  },
  {
    label: "GitHub MCP Server",
    href: "https://github.com/github/github-mcp-server",
    description: "Provides GitHub repository access to LLMs",
    type: "external",
  },
  {
    label: "Playwright MCP Server",
    href: "https://github.com/microsoft/playwright-mcp-server",
    description: "Provides browser automation capabilities to LLMs",
    type: "external",
  },
];
