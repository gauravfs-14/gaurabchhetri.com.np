import BlogsList from "@/components/blogs-list";
import ProfileCard from "@/components/profile-card";
import ProjectsGrid from "@/components/projects-grid";
import SkillsGrid from "@/components/skills-grid";
import { Badge } from "@/components/ui/badge";
import { InView } from "@/components/ui/in-view";

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
    </main>
  );
}
