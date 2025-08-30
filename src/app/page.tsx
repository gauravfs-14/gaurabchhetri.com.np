import DevLogsList from "@/components/dev-logs-list";
import ProfileCard from "@/components/profile-card";
import ProjectsGrid from "@/components/projects-grid";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";

const EDUCATION = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Texas State University, San Marcos",
    date: "Expected Graduation: May 2028",
    description:
      "I am currently pursuing a Bachelor of Science in Computer Science at Texas State University, where I am learning and gaining hands-on experience in various aspects of computer science, in software development, data structures, algorithms, and web technologies.",
    skills: [
      "Computer Science",
      "Software Development",
      "Data Structures",
      "Algorithms",
      "Web Technologies",
      "Full Stack Development",
      "AI & Machine Learning",
      "Data Science",
      "Research",
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Undergraduate Research Assistant",
    institution: "AIT Lab - TXST",
    institutionLink: "https://ait-lab.vercel.app/",
    location: "San Marcos, TX",
    date: "October 2024 - Present",
    description:
      "Created 25+ analytical/visualization tools (internal and open-source), processed 150k+ mobility/crash records, and accelerated AI-in-transportation workflows with reproducible pipelines, faculty dashboards, and standardized outputs. Authored or co-authored 5+ manuscripts published or online, with additional submissions (10+) in the pipeline; contributed methods, analysis, modeling, quality control, and documentation across Python, R, and JavaScript. Designed, implemented, and maintain the AIT Lab website in Next.js/Tailwind; 90+ Lighthouse SEO and performance scores; deployed on Vercel with publications, projects, team, and resources sections.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "Python",
      "R",
      "Data Analysis",
      "LaTex",
    ],
  },
];

const RESEARCH_PUBLICATIONS = [
  {
    title: "Model Context Protocols in Adaptive Transport Systems: A Survey",
    date: "2025/8/26",
    authors: "Gaurab Chhetri, Shriyank Somvanshi, Md Monzurul Islam, Shamyo Brotee, Mahmuda Sultana Mimi, Dipti Koirala, Biplov Pandey, Subasish Das",
    journal: "arXiv preprint arXiv:2508.19239",
    abstract: "The rapid expansion of interconnected devices, autonomous systems, and AI applications has created severe fragmentation in adaptive transport systems, where diverse protocols and context sources remain isolated. This survey provides the first systematic investigation of the Model Context Protocol (MCP) as a unifying paradigm, highlighting its ability to bridge protocol-level adaptation with context-aware decision making. Analyzing established literature, we show that existing efforts have implicitly converged toward MCP-like architectures, signaling a natural evolution from fragmented solutions to standardized integration frameworks. We propose a five-category taxonomy covering adaptive mechanisms, context-aware frameworks, unification models, integration strategies, and MCP-enabled architectures. Our findings reveal three key insights: traditional transport protocols have reached the limits of isolated adaptation, MCP's client-server and JSON-RPC structure enables semantic interoperability, and AI-driven transport demands integration paradigms uniquely suited to MCP. Finally, we present a research roadmap positioning MCP as a foundation for next-generation adaptive, context-aware, and intelligent transport infrastructures.",
    paperUrl: "https://arxiv.org/abs/2508.19239",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-mcp",
  },
  {
    title: "From S4 to Mamba: A Comprehensive Survey on Structured State Space Models",
    date: "2025/3/22",
    authors: "Shriyank Somvanshi, Md Monzurul Islam, Mahmuda Sultana Mimi, Sazzad Bin Bashar Polock, Gaurab Chhetri, Subasish Das",
    abstract: "Recent advancements in sequence modeling have led to the emergence of Structured State Space Models (SSMs) as an efficient alternative to Recurrent Neural Networks (RNNs) and Transformers, addressing challenges in long-range dependency modeling and computational efficiency. While RNNs suffer from vanishing gradients and sequential inefficiencies, and Transformers face quadratic complexity, SSMs leverage structured recurrence and state-space representations to achieve superior long-sequence processing with linear or near-linear complexity. This survey provides a comprehensive review of SSMs, tracing their evolution from the foundational S4 model to its successors like Mamba, Simplified Structured State Space Sequence Model (S5), and Jamba, highlighting their improvements in computational efficiency, memory optimization, and inference speed. By comparing SSMs with traditional sequence models across domains such as natural language processing (NLP), speech recognition, vision, and time-series forecasting, we demonstrate their advantages in handling long-range dependencies while reducing computational overhead. Despite their potential, challenges remain in areas such as training optimization, hybrid modeling, and interpretability. This survey serves as a structured guide for researchers and practitioners, detailing the advancements, trade-offs, and future directions of SSM-based architectures in AI and deep learning..",
    paperUrl: "https://arxiv.org/abs/2503.18970",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-mamba",
    journal: "arXiv preprint arXiv:2503.18970",
  },
  {
    title: "Quantum computing in transportation engineering: a survey",
    authors: "Shriyank Somvanshi, Md Monzurul Islam, Sazzad Bin Bashar Polock, Gaurab Chhetri, Darrell Anderson, Anandi Dutta, Subasish Das",
    date: "2025/2/17",
    journal: "Available at SSRN 5141686",
    abstract: "Quantum computing introduces new computational methods that address complex optimization and machine learning challenges in transportation engineering. This literature survey reviews fundamental quantum principles, including qubits, superposition, entanglement, and quantum gates, and examines their applications in transportation. Fundamental quantum algorithms, including Shor's algorithm, the Quantum Approximate Optimization Algorithm (QAOA), and Grover's search, are described for their applications in transportation, such as network analysis, traffic management, and vehicle routing. Quantum optimization techniques, including hybrid quantum-classical approaches and quantum annealing, have been explored for combinatorial challenges such as the Vehicle Routing Problem (VRP) and dynamic traffic signal control. Additionally, quantum machine learning models, such as Quantum Convolutional Neural Networks (QCNNs) and quantum clustering, present applications in traffic prediction and anomaly detection. Despite its potential, quantum computing in transportation faces challenges related to hardware limitations, error rates, and a lack of established quantum programming frameworks. Addressing these challenges necessitates progress in hardware scalability, error mitigation techniques, and algorithm refinement. As quantum computing continues to evolve, its integration into transportation engineering could improve computational efficiency and enable new capabilities in optimization, traffic management, and intelligent transportation systems. This survey outlines key developments, challenges, and future research directions …",
    paperUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5141686"
  },
  {
    title: "From Tiny Machine Learning to Tiny Deep Learning: A Survey",
    authors: "Shriyank Somvanshi, Md Monzurul Islam, Gaurab Chhetri, Rohit Chakraborty, Mahmuda Sultana Mimi, Sawgat Ahmed Shuvo, Kazi Sifatul Islam, Syed Aaqib Javed, Sharif Ahmed Rafat, Anandi Dutta, Subasish Das",
    date: "2025/6/21",
    journal: "arXiv preprint arXiv:2506.18927",
    abstract: "The rapid growth of edge devices has driven the demand for deploying artificial intelligence (AI) at the edge, giving rise to Tiny Machine Learning (TinyML) and its evolving counterpart, Tiny Deep Learning (TinyDL). While TinyML initially focused on enabling simple inference tasks on microcontrollers, the emergence of TinyDL marks a paradigm shift toward deploying deep learning models on severely resource-constrained hardware. This survey presents a comprehensive overview of the transition from TinyML to TinyDL, encompassing architectural innovations, hardware platforms, model optimization techniques, and software toolchains. We analyze state-of-the-art methods in quantization, pruning, and neural architecture search (NAS), and examine hardware trends from MCUs to dedicated neural accelerators. Furthermore, we categorize software deployment frameworks, compilers, and AutoML tools enabling practical on-device learning. Applications across domains such as computer vision, audio recognition, healthcare, and industrial monitoring are reviewed to illustrate the real-world impact of TinyDL. Finally, we identify emerging directions including neuromorphic computing, federated TinyDL, edge-native foundation models, and domain-specific co-design approaches. This survey aims to serve as a foundational resource for researchers and practitioners, offering a holistic view of the ecosystem and laying the groundwork for future advancements in edge AI.",
    paperUrl: "https://arxiv.org/abs/2506.18927",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-tinyml",
  },
  {
    title: "A Comprehensive Survey on Bio-Inspired Algorithms: Taxonomy, Applications, and Future Directions",
    authors: "Shriyank Somvanshi, Md Monzurul Islam, Syed Aaqib Javed, Gaurab Chhetri, Kazi Sifatul Islam, Tausif Islam Chowdhury, Sazzad Bin Bashar Polock, Anandi Dutta, Subasish Das",
    date: "2025/5/26",
    journal: "arXiv preprint arXiv:2506.04238",
    abstract: "Bio-inspired algorithms (BIAs) utilize natural processes such as evolution, swarm behavior, foraging, and plant growth to solve complex, nonlinear, high-dimensional optimization problems. This survey categorizes BIAs into eight groups: evolutionary, swarm intelligence, physics-inspired, ecosystem and plant-based, predator-prey, neural-inspired, human-inspired, and hybrid approaches, and reviews their core principles, strengths, and limitations. We illustrate the usage of these algorithms in machine learning, engineering design, bioinformatics, and intelligent systems, and highlight recent advances in hybridization, parameter tuning, and adaptive strategies. Finally, we identify open challenges such as scalability, convergence, reliability, and interpretability to suggest directions for future research. This work aims to serve as a foundational resource for both researchers and practitioners interested in understanding the current landscape and future directions of bio-inspired computing.",
    paperUrl: "https://arxiv.org/abs/2506.04238",
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-8 pb-10 max-w-3xl">
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
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          {/* <p className="text-muted-foreground">
            Hello World <span className="text-xl">👋</span>, I specialize in
            building things that matters. Currently, I am an Undergraduate
            Research Assistant at the Texas State University, where I combine my
            skills in full-stack development with academic research to build
            innovative tools and applications. I believe in the{" "}
            <strong>mantra</strong>: <em>"Do what you want, not what you can!"</em> If you want someone who can do things, not just talk about it, let&apos;s talk.
          </p> */}
          <p className="text-muted-foreground">
          Hello World 👋! I&apos;m a software engineer and student researcher at Texas State University. Since starting my journey in 2020, I&apos;ve built impactful projects across web development, AI, machine learning, and data science. Skilled in TypeScript, JavaScript, Python, React, Next.js, and more, I focus on shipping products that matter. I believe in the mantra: <em>“Do what you want, not what you can!”</em>
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="mailto:contact@gaurabchhetri.com.np" className={cn(buttonVariants({ variant: "default" }), "mt-4")}>emailMe <Mail className="w-4 h-4" /></Link>
            <Link href="https://resume.gaurabchhetri.com.np" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "ghost" }), "mt-4")}>viewResume <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </InView>
      </div>
      <div className="mt-14" />
      {/* <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 0, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          <Badge variant={"secondary"}>tookKit</Badge>
        </InView>
        <SkillsGrid />
      </div> */}
      <div className="mt-14" />
      <section id="projects" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            featuredProjects
          </Badge>
        </InView>
        <ProjectsGrid displayFeaturesOnly={true} />
      </section>
      <div className="mt-4" />
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
      >
        <div className="w-full flex justify-end">
        <Link href="/projects" className={cn(buttonVariants({ variant: "default", size: "sm" }), "mt-4")}>
          viewAllProjects <ArrowRight className="w-4 h-4" />
        </Link>
        </div>
      </InView>
      <div className="mt-14" />
      {/* <div className="mt-20" /> */}
      {/* Experience Section */}
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            experience
          </Badge>
        </InView>
        {/* Resume Style Experience */}
        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((exp, index) => (
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              key={index}
            >
              <div className="mb-8 p-3">
                <p className="text-sm text-muted-foreground font-medium mb-2 flex items-center gap-1">
                  <Calendar className="inline mr-1 w-4 h-4" />
                  {exp.date}
                </p>
                <h3 className="text-lg font-semibold -mb-1.5">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <Link
                    href={exp.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "p-0 m-0 text-sm inline-flex items-center gap-0 -ml-2 -mr-3"
                    )}
                  >
                    {exp.institution}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  , {exp.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
      <div className="mt-8" />
      {/* Education Section */}
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            education
          </Badge>
        </InView>
        {/* Resume Style Education */}
        <div className="flex flex-col gap-8">
          {EDUCATION.map((edu, index) => (
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              key={index}
            >
              <div key={index} className="mb-8 p-3">
                <p className="text-sm text-muted-foreground font-medium mb-2 flex items-center gap-1">
                  <Calendar className="inline mr-1 w-4 h-4" />
                  {edu.date}
                </p>
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.institution}
                </p>  
                <p className="text-sm text-muted-foreground">
                  {edu.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
      <div className="mt-8" />

      <section id="devLogs" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            recentDevLogs
          </Badge>
        </InView>
        <DevLogsList itemsNumber={5} />
      </section>
      <div className="mt-4" />
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
      >
        <div className="w-full flex justify-end">
        <Link href="/devLogs" className={cn(buttonVariants({ variant: "default", size: "sm" }), "mt-4")}>
          viewAllDevLogs <ArrowRight className="w-4 h-4" />
        </Link>
        </div>
      </InView>
      
      <div className="mt-14" />
      
      {/* Research Publications */}
      <section id="publications" className="scroll-mt-50">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          <Badge variant={"secondary"} className="mb-4">
            researchPublications
          </Badge>
        </InView>
        <div className="flex flex-col">
          {RESEARCH_PUBLICATIONS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4).map((pub, index) => (
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              key={index}
            >
              <div className="mb-8 p-3">
                <p className="text-sm text-muted-foreground font-medium mb-2 flex items-center gap-1">
                  <Calendar className="inline mr-1 w-4 h-4" />
                  {new Date(pub.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | {pub.journal}
                </p>
                <h3 className="text-lg font-semibold line-clamp-1">{pub.title}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3 line-clamp-1">
                  {pub.authors}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {pub.abstract}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.paperUrl && (
                    <Link href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "link", size: "sm" }), "p-0 m-0 text-sm")}>
                      paper <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  {pub.repositoryUrl && (
                    <Link href={pub.repositoryUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "link", size: "sm" }), "p-0 m-0 text-sm")}>
                      repository <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>
      <div className="mt-4" />
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
      >
        <div className="w-full flex justify-end">
          <Link href="https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "mt-4")}>
            viewAllPublications <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </InView>
      <div className="mt-14" />
    </main>
  );
}
