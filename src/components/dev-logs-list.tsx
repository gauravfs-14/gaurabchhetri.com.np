import { AnimatedBackground } from "@/components/ui/animated-background";
import { InView } from "@/components/ui/in-view";
import Link from "next/link";
import { getPosts } from "@/app/devLogs/utils";
import { Calendar } from "lucide-react";

export default async function DevLogsList({
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
              className="cursor-pointer p-3 w-full mb-4"
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
                  delay: 0.1 + idx * 0.01,
                }}
              >
                <Link
                  key={post.slug}
                  href={`/devLogs/${post.slug}`}
                  className="w-full"
                >
                  <div className="w-full">
                    <p className="text-sm text-muted-foreground font-medium mb-2 flex items-center gap-1">
                      <Calendar className="inline mr-1 w-4 h-4" />
                      {new Date(post.meta.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-xl font-semibold">
                      <span className="group relative inline-block font-semibold text-lg line-clamp-1 hover:underline">
                        {post.meta.title}
                        {/* <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span> */}
                      </span>
                    </h2>
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
