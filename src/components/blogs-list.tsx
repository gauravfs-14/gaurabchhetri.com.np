import { AnimatedBackground } from "@/components/ui/animated-background";
import { InView } from "@/components/ui/in-view";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getPosts } from "@/app/blogs/utils";

export default async function BlogsList({
  itemsNumber = 20,
  pagination = false,
  startIndex = 0,
}: {
  itemsNumber?: number;
  pagination?: boolean;
  startIndex?: number;
}) {
  const posts = getPosts();
  const resolvedPosts = (await Promise.all(posts)).sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
  if (!pagination) {
    resolvedPosts.slice(startIndex, itemsNumber);
  }

  //   console.log("Posts:", resolvedPosts);
  return (
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
              className="cursor-pointer p-3 w-full"
            >
              <InView
                key={post.slug}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + idx * 0.05,
                }}
              >
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="w-full"
                >
                  <div className="flex items-center gap-4 w-full">
                    <h2 className="text-xl font-semibold">
                      <span className="group relative inline-block font-semibold text-lg line-clamp-1">
                        {post.meta.title}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                      </span>
                    </h2>
                    <Badge variant={"outline"} className="mb-2 text-xs">
                      {new Date(post.meta.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 w-full">
                    {post.meta.description}
                  </p>
                </Link>
              </InView>
            </div>
          );
        })}
      </AnimatedBackground>
    </div>
  );
}
