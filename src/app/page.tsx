import BlogsList from "@/components/blogs-list";
import ProfileCard from "@/components/profile-card";
import ProjectsGrid from "@/components/projects-grid";
import SkillsGrid from "@/components/skills-grid";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-8 py-10 max-w-3xl">
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
      >
        <ProfileCard />
      </InView>
      <div className="mt-14" />
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          <p className="text-muted-foreground">
            Hello World <span className="text-xl">👋</span>, I specialize in
            building things that matters. Currently, I am an Undergraduate
            Research Assistant at the Texas State University, where I combine my
            skills in full-stack development with academic research to build
            innovative tools and applications. The following are some tools from
            my skill set that I use to build impactful projects.
          </p>
        </InView>
      </div>
      <div className="mt-14" />
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
          <Badge variant={"secondary"}>Skills</Badge>
        </InView>
        <SkillsGrid />
      </div>
      <div className="mt-14" />
      <section id="projects" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            Featured Projects
          </Badge>
        </InView>
        <ProjectsGrid />
      </section>
      <div className="mt-14" />
      <section id="blogs" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            Recent Blogs
          </Badge>
        </InView>
        <BlogsList itemsNumber={5} />
      </section>
      <div className="mt-20" />
      {/* Education Section */}
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            Education
          </Badge>
        </InView>
        {/* Resume Style Education */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          <div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-2">
                <Calendar className="inline mr-1 w-4 h-4" />
                Expected Graduation: May 2029
              </p>
              <h3 className="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Texas State University, San Marcos
              </p>
              <p className="text-sm text-muted-foreground">
                I am currently pursuing a Bachelor of Science in Computer
                Science at Texas State University, where I am learning and
                gaining hands-on experience in various aspects of computer
                science, in software development, data structures, algorithms,
                and web technologies.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">Computer Science</Badge>
                <Badge variant="outline">Software Development</Badge>
                <Badge variant="outline">Data Structures</Badge>
                <Badge variant="outline">Algorithms</Badge>
                <Badge variant="outline">Web Technologies</Badge>
                <Badge variant="outline">Full Stack Development</Badge>
                <Badge variant="outline">AI & Machine Learning</Badge>
                <Badge variant="outline">Data Science</Badge>
                <Badge variant="outline">Research</Badge>
              </div>
            </div>
          </div>
        </InView>
      </div>
      <div className="mt-20" />
      {/* Experience Section */}
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            Experience
          </Badge>
        </InView>
        {/* Resume Style Experience */}
        <div className="flex flex-col gap-8">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.8 }}
          >
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-2">
                <Calendar className="inline mr-1 w-4 h-4" />
                August 2023 - Present
              </p>
              <h3 className="text-lg font-semibold">
                Undergraduate Research Assistant
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <Link
                  href="https://ait-lab.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "p-0 m-0 text-sm"
                  )}
                >
                  AIT Lab - TXST
                </Link>
                , San Marcos, TX
              </p>
              <p className="text-sm text-muted-foreground">
                As an UGRA at the AIT Lab, I am involved in various tool
                development, and research projects that leverage my skills in
                web development and data analysis. My role includes
                collaborating with faculty and a team of researchers/ students
                to create innovative solutations in the field of Transportation
                with a focus on AI, Machine Learning, and Data Science.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">R</Badge>
                <Badge variant="outline">Data Analysis</Badge>
                <Badge variant="outline">LaTex</Badge>
              </div>
            </div>
          </InView>
        </div>
      </div>
      <div className="mt-20" />
    </main>
  );
}
