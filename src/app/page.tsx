import DevLogsList from "@/components/dev-logs-list";
import ProfileCard from "@/components/profile-card";
import ProjectsGrid from "@/components/projects-grid";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";
interface ResearchPublication {
  title: string;
  date: string;
  authors: string;
  journal: string;
  abstract: string;
  paperUrl: string;
  repositoryUrl?: string;
}

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
    title: "Undergraduate Researcher",
    institution: "AIT Lab - Texas State University",
    institutionLink: "https://ait-lab.vercel.app/",
    location: "San Marcos, TX",
    date: "October 2024 - Present",
    description: [
      "Engineered and deployed 25+ data-driven web tools for AI and transportation research, processing 150k+ mobility and crash records with reproducible pipelines in Python and JavaScript/ TypeScript.",
      "Implemented ML workflows for crash analytics and safety prediction, contributing to 5+ published papers.",
      "Developed and optimized the AIT Lab website (Next.js + Tailwind), achieving 90+ Lighthouse performance and SEO scores.",
    ],
    skills: ["Applied AI/ML", "Web Development", "Data Engineering"],
  },
];

const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    title:
      "CognitiveSky: Scalable Sentiment and Narrative Analysis for Decentralized Social Media",
    date: "2025/9/14",
    authors: "Gaurab Chhetri, Anandi Dutta, Subasish Das",
    journal: "arXiv preprint arXiv:2509.11444",
    abstract:
      "The emergence of decentralized social media platforms presents new opportunities and challenges for real-time analysis of public discourse. This study introduces CognitiveSky, an open-source and scalable framework designed for sentiment, emotion, and narrative analysis on Bluesky, a federated Twitter or X.com alternative. By ingesting data through Bluesky's Application Programming Interface (API), CognitiveSky applies transformer-based models to annotate large-scale user-generated content and produces structured and analyzable outputs. These summaries drive a dynamic dashboard that visualizes evolving patterns in emotion, activity, and conversation topics. Built entirely on free-tier infrastructure, CognitiveSky achieves both low operational cost and high accessibility. While demonstrated here for monitoring mental health discourse, its modular design enables applications across domains such as disinformation detection, crisis response, and civic sentiment analysis. By bridging large language models with decentralized networks, CognitiveSky offers a transparent, extensible tool for computational social science in an era of shifting digital ecosystems.",
    paperUrl: "https://arxiv.org/abs/2509.11444",
    repositoryUrl: "https://github.com/gauravfs-14/CognitiveSky",
  },
  {
    title:
      "A Transformer-Based Cross-Platform Analysis of Public Discourse on the 15-Minute City Paradigm",
    date: "2025/9/14",
    authors: "Gaurab Chhetri, Darrell Anderson, Boniphace Kutela, Subasish Das",
    journal: "arXiv preprint arXiv:2509.11443",
    abstract:
      "This study presents the first multi-platform sentiment analysis of public opinion on the 15-minute city concept across Twitter, Reddit, and news media. Using compressed transformer models and Llama-3-8B for annotation, we classify sentiment across heterogeneous text domains. Our pipeline handles long-form and short-form text, supports consistent annotation, and enables reproducible evaluation. We benchmark five models (DistilRoBERTa, DistilBERT, MiniLM, ELECTRA, TinyBERT) using stratified 5-fold cross-validation, reporting F1-score, AUC, and training time. DistilRoBERTa achieved the highest F1 (0.8292), TinyBERT the best efficiency, and MiniLM the best cross-platform consistency. Results show News data yields inflated performance due to class imbalance, Reddit suffers from summarization loss, and Twitter offers moderate challenge. Compressed models perform competitively, challenging assumptions that larger models are necessary. We identify platform-specific trade-offs and propose directions for scalable, real-world sentiment classification in urban planning discourse.",
    paperUrl: "https://arxiv.org/abs/2509.11443",
    repositoryUrl: "https://github.com/gauravfs-14/15min-city-bench",
  },
  {
    title:
      "Tabular Data with Class Imbalance: Predicting Electric Vehicle Crash Severity with Pretrained Transformers (TabPFN) and Mamba-Based Models",
    date: "2025/9/14",
    authors: "Shriyank Somvanshi, Pavan Hebli, Gaurab Chhetri, Subasish Das",
    journal: "arXiv preprint arXiv:2509.11449",
    abstract:
      "This study presents a deep tabular learning framework for predicting crash severity in electric vehicle (EV) collisions using real-world crash data from Texas (2017-2023). After filtering for electric-only vehicles, 23,301 EV-involved crash records were analyzed. Feature importance techniques using XGBoost and Random Forest identified intersection relation, first harmful event, person age, crash speed limit, and day of week as the top predictors, along with advanced safety features like automatic emergency braking. To address class imbalance, Synthetic Minority Over-sampling Technique and Edited Nearest Neighbors (SMOTEENN) resampling was applied. Three state-of-the-art deep tabular models, TabPFN, MambaNet, and MambaAttention, were benchmarked for severity prediction. While TabPFN demonstrated strong generalization, MambaAttention achieved superior performance in classifying severe injury cases due to its attention-based feature reweighting. The findings highlight the potential of deep tabular architectures for improving crash severity prediction and enabling data-driven safety interventions in EV crash contexts.",
    paperUrl: "https://arxiv.org/abs/2509.11449",
  },
  {
    title: "Model Context Protocols in Adaptive Transport Systems: A Survey",
    date: "2025/8/26",
    authors:
      "Gaurab Chhetri, Shriyank Somvanshi, Md Monzurul Islam, Shamyo Brotee, Mahmuda Sultana Mimi, Dipti Koirala, Biplov Pandey, Subasish Das",
    journal: "arXiv preprint arXiv:2508.19239",
    abstract:
      "The rapid expansion of interconnected devices, autonomous systems, and AI applications has created severe fragmentation in adaptive transport systems, where diverse protocols and context sources remain isolated. This survey provides the first systematic investigation of the Model Context Protocol (MCP) as a unifying paradigm, highlighting its ability to bridge protocol-level adaptation with context-aware decision making. Analyzing established literature, we show that existing efforts have implicitly converged toward MCP-like architectures, signaling a natural evolution from fragmented solutions to standardized integration frameworks. We propose a five-category taxonomy covering adaptive mechanisms, context-aware frameworks, unification models, integration strategies, and MCP-enabled architectures. Our findings reveal three key insights: traditional transport protocols have reached the limits of isolated adaptation, MCP's client-server and JSON-RPC structure enables semantic interoperability, and AI-driven transport demands integration paradigms uniquely suited to MCP. Finally, we present a research roadmap positioning MCP as a foundation for next-generation adaptive, context-aware, and intelligent transport infrastructures.",
    paperUrl: "https://arxiv.org/abs/2508.19239",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-mcp",
  },
  {
    title:
      "From S4 to Mamba: A Comprehensive Survey on Structured State Space Models",
    date: "2025/3/22",
    authors:
      "Shriyank Somvanshi, Md Monzurul Islam, Mahmuda Sultana Mimi, Sazzad Bin Bashar Polock, Gaurab Chhetri, Subasish Das",
    abstract:
      "Recent advancements in sequence modeling have led to the emergence of Structured State Space Models (SSMs) as an efficient alternative to Recurrent Neural Networks (RNNs) and Transformers, addressing challenges in long-range dependency modeling and computational efficiency. While RNNs suffer from vanishing gradients and sequential inefficiencies, and Transformers face quadratic complexity, SSMs leverage structured recurrence and state-space representations to achieve superior long-sequence processing with linear or near-linear complexity. This survey provides a comprehensive review of SSMs, tracing their evolution from the foundational S4 model to its successors like Mamba, Simplified Structured State Space Sequence Model (S5), and Jamba, highlighting their improvements in computational efficiency, memory optimization, and inference speed. By comparing SSMs with traditional sequence models across domains such as natural language processing (NLP), speech recognition, vision, and time-series forecasting, we demonstrate their advantages in handling long-range dependencies while reducing computational overhead. Despite their potential, challenges remain in areas such as training optimization, hybrid modeling, and interpretability. This survey serves as a structured guide for researchers and practitioners, detailing the advancements, trade-offs, and future directions of SSM-based architectures in AI and deep learning..",
    paperUrl: "https://arxiv.org/abs/2503.18970",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-mamba",
    journal: "arXiv preprint arXiv:2503.18970",
  },
  {
    title: "Quantum computing in transportation engineering: a survey",
    authors:
      "Shriyank Somvanshi, Md Monzurul Islam, Sazzad Bin Bashar Polock, Gaurab Chhetri, Darrell Anderson, Anandi Dutta, Subasish Das",
    date: "2025/2/17",
    journal: "Available at SSRN 5141686",
    abstract:
      "Quantum computing introduces new computational methods that address complex optimization and machine learning challenges in transportation engineering. This literature survey reviews fundamental quantum principles, including qubits, superposition, entanglement, and quantum gates, and examines their applications in transportation. Fundamental quantum algorithms, including Shor's algorithm, the Quantum Approximate Optimization Algorithm (QAOA), and Grover's search, are described for their applications in transportation, such as network analysis, traffic management, and vehicle routing. Quantum optimization techniques, including hybrid quantum-classical approaches and quantum annealing, have been explored for combinatorial challenges such as the Vehicle Routing Problem (VRP) and dynamic traffic signal control. Additionally, quantum machine learning models, such as Quantum Convolutional Neural Networks (QCNNs) and quantum clustering, present applications in traffic prediction and anomaly detection. Despite its potential, quantum computing in transportation faces challenges related to hardware limitations, error rates, and a lack of established quantum programming frameworks. Addressing these challenges necessitates progress in hardware scalability, error mitigation techniques, and algorithm refinement. As quantum computing continues to evolve, its integration into transportation engineering could improve computational efficiency and enable new capabilities in optimization, traffic management, and intelligent transportation systems. This survey outlines key developments, challenges, and future research directions …",
    paperUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5141686",
  },
  {
    title: "From Tiny Machine Learning to Tiny Deep Learning: A Survey",
    authors:
      "Shriyank Somvanshi, Md Monzurul Islam, Gaurab Chhetri, Rohit Chakraborty, Mahmuda Sultana Mimi, Sawgat Ahmed Shuvo, Kazi Sifatul Islam, Syed Aaqib Javed, Sharif Ahmed Rafat, Anandi Dutta, Subasish Das",
    date: "2025/6/21",
    journal: "ACM Computing Surveys",
    abstract:
      "The rapid growth of edge devices has driven the demand for deploying artificial intelligence (AI) at the edge, giving rise to Tiny Machine Learning (TinyML) and its evolving counterpart, Tiny Deep Learning (TinyDL). While TinyML initially focused on enabling simple inference tasks on microcontrollers, the emergence of TinyDL marks a paradigm shift toward deploying deep learning models on severely resource-constrained hardware. This survey presents a comprehensive overview of the transition from TinyML to TinyDL, encompassing architectural innovations, hardware platforms, model optimization techniques, and software toolchains. We analyze state-of-the-art methods in quantization, pruning, and neural architecture search (NAS), and examine hardware trends from MCUs to dedicated neural accelerators. Furthermore, we categorize software deployment frameworks, compilers, and AutoML tools enabling practical on-device learning. Applications across domains such as computer vision, audio recognition, healthcare, and industrial monitoring are reviewed to illustrate the real-world impact of TinyDL. Finally, we identify emerging directions including neuromorphic computing, federated TinyDL, edge-native foundation models, and domain-specific co-design approaches. This survey aims to serve as a foundational resource for researchers and practitioners, offering a holistic view of the ecosystem and laying the groundwork for future advancements in edge AI.",
    paperUrl: "https://dl.acm.org/doi/abs/10.1145/3776588",
    repositoryUrl: "https://github.com/gauravfs-14/awesome-tinyml",
  },
  {
    title:
      "A Review on Influx of Bio-Inspired Algorithms: Critique and Improvement Needs",
    authors:
      "Shriyank Somvanshi, Md Monzurul Islam, Syed Aaqib Javed, Gaurab Chhetri, Kazi Sifatul Islam, Tausif Islam Chowdhury, Sazzad Bin Bashar Polock, Anandi Dutta, Subasish Das",
    date: "2025/5/26",
    journal: "arXiv preprint arXiv:2506.04238",
    abstract:
      "Bio-inspired algorithms (BIAs) utilize natural processes such as evolution, swarm behavior, foraging, and plant growth to solve complex, nonlinear, high-dimensional optimization problems. This survey categorizes BIAs into eight groups: evolutionary, swarm intelligence, physics-inspired, ecosystem and plant-based, predator-prey, neural-inspired, human-inspired, and hybrid approaches, and reviews their core principles, strengths, and limitations. We illustrate the usage of these algorithms in machine learning, engineering design, bioinformatics, and intelligent systems, and highlight recent advances in hybridization, parameter tuning, and adaptive strategies. Finally, we identify open challenges such as scalability, convergence, reliability, and interpretability to suggest directions for future research. This work aims to serve as a foundational resource for both researchers and practitioners interested in understanding the current landscape and future directions of bio-inspired computing.",
    paperUrl: "https://arxiv.org/abs/2506.04238",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-8 pb-10 max-w-3xl" aria-hidden="true">
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
      {/* About Me Section */}
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
        >
          <p className="text-muted-foreground">
            Undergraduate Researcher in Computer Science. I work on AI, data
            mining, and full-stack web development, and I like building
            end-to-end systems that mix machine learning with solid engineering.
            I believe in the mantra:{" "}
            <em>“Do what you want, not what you can!”</em>
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="mailto:contact@gaurabchhetri.com.np"
              className={cn(buttonVariants({ variant: "default" }), "mt-4")}
            >
              emailMe <Mail className="w-4 h-4" />
            </Link>
            <Link
              href="https://resume.gaurabchhetri.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost" }), "mt-4")}
            >
              viewResume <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </InView>
      </div>
      {/* <div className="mt-14" /> */}
      {/* Skills Section */}
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
                <ul className="list-disc pl-6">
                  {exp.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-sm text-muted-foreground mb-1"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
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
      {/* Projects Section */}
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
      {/* View All Projects Section */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
      >
        <div className="w-full flex justify-end">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "mt-4"
            )}
          >
            viewAllProjects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </InView>

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

      {/* Recent Dev Logs Section */}
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
          <Link
            href="/devLogs"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "mt-4"
            )}
          >
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
          {RESEARCH_PUBLICATIONS.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
            .slice(0, 4)
            .map((pub, index) => (
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
                    {new Date(pub.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    | {pub.journal}
                  </p>
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3 line-clamp-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {pub.abstract}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.paperUrl && (
                      <Link
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "p-0 m-0 text-sm"
                        )}
                      >
                        paper <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                    {pub.repositoryUrl && (
                      <Link
                        href={pub.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "p-0 m-0 text-sm"
                        )}
                      >
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
          <Link
            href="https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "mt-4"
            )}
          >
            viewAllPublications <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </InView>
      <div className="mt-14" />
    </main>
  );
}
