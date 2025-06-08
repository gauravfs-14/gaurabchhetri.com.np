import { AnimatedBackground } from "@/components/ui/animated-background";
import { getPosts } from "./utils";
import { InView } from "@/components/ui/in-view";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const posts = getPosts();
  const resolvedPosts = await Promise.all(posts);
  console.log("Posts:", resolvedPosts);
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Blogs</h1>
      <p className="text-muted-foreground text-center mb-14 text-sm max-w-[70%] mx-auto">
        Welcome to my blog! Here, I share my thoughts, experiences, and insights
        on various topics. Feel free to explore and engage with the content.
      </p>
      <div className="relative">
        <AnimatedBackground
          className="rounded-lg bg-card"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {resolvedPosts.map((post, idx) => {
            return (
              <div
                key={idx}
                data-id={`card-${idx}`}
                className="cursor-pointer p-3"
              >
                <InView
                  key={post.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  viewOptions={{ margin: "0px 0px -200px 0px" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 + idx * 0.05,
                  }}
                >
                  <Link key={post.slug} href={`/blogs/${post.slug}`}>
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-semibold">
                        <span className="group relative inline-block font-semibold text-lg line-clamp-1">
                          {post.meta.title}
                          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                        </span>
                      </h2>
                      <Badge variant={"secondary"} className="mb-2 ml-auto">
                        {new Date(post.meta.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {post.meta.description}
                    </p>
                  </Link>
                </InView>
              </div>
            );
          })}
        </AnimatedBackground>
      </div>
    </div>
  );
}
