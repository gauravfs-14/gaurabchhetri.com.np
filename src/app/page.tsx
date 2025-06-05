import ProfileCard from "@/components/profile-card";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { InView } from "@/components/ui/in-view";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "HTML",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "Linux",
    icon: SiLinux,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-8 py-10 max-w-3xl">
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
      >
        <ProfileCard />
      </InView>
      <div className="mt-14" />
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          <p className="text-muted-foreground">
            Hello World <span className="text-xl">👋</span>, I specialize in
            building things that matters. Currently, I am an Undergraduate
            Research Assistant at the Texas State University, where I combine my
            skills in full-stack development with academic research to build
            innovative tools and applications.
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
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          <h2 aria-description="Skills Section" className="font-bold text-lg">
            {"// myToolBox"}
          </h2>
        </InView>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <AnimatedBackground
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  data-id={`card-${idx}`}
                  className="cursor-pointer"
                >
                  <InView
                    key={skill.name}
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
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 px-3 py-4"
                      title={skill.name}
                      aria-label={`Skill: ${skill.name}`}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  </InView>
                </div>
              );
            })}
          </AnimatedBackground>
        </div>
      </div>
    </main>
  );
}
