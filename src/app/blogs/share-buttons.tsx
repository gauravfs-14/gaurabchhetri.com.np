"use client";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Post } from "./utils";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { SiFacebook, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareButtons({
  slug,
  frontmatter: meta,
}: {
  slug: Post["slug"];
  frontmatter: Post["frontmatter"];
}) {
  console.log("NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
  const shareData = [
    {
      title: "Facebook",
      icon: (
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          title={meta.title}
          quote={meta.description || "Check out this blog post!"}
          hashtag={`#${meta.tags?.[0] || "blog"}`}
        >
          <SiFacebook className="h-5 w-5" />
        </FacebookShareButton>
      ),
    },
    {
      title: "Share on X",
      icon: (
        <TwitterShareButton
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          title={meta.title}
          hashtags={meta.tags || ["blog"]}
        >
          <SiX className="h-5 w-5" />
        </TwitterShareButton>
      ),
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkedinShareButton
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          title={meta.title}
          summary={meta.description || "Check out this blog post!"}
        >
          <SiLinkedin className="h-5 w-6" />
        </LinkedinShareButton>
      ),
    },
    {
      title: "WhatsApp",
      icon: (
        <WhatsappShareButton
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`}
          title={meta.title}
          separator=":: "
        >
          <SiWhatsapp className="h-5 w-5" />
        </WhatsappShareButton>
      ),
    },
    {
      title: "Copy Link",
      icon: (
        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`
            );
            alert("Link copied to clipboard!");
          }}
          variant={"ghost"}
        >
          <Link className="h-5 w-5 cursor-pointer" />
        </Button>
      ),
    },
  ];
  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock
        className="items-end pb-3 bg-card"
        magnification={60}
        distance={100}
      >
        {shareData.map((item, idx) => (
          <DockItem key={idx} className="aspect-square rounded-full bg-accent">
            <DockLabel className="">{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
