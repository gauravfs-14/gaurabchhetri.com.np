import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function OtherProjects() {
  const projectsData = [
    {
      projectName: "Raspberry Pi Computer",
      projectLink:
        "https://photos.google.com/share/AF1QipMFeZs6N1iaRhtgHn_Wz39bmSDLS6GscP2l4ZlNYOeJval5lF93Jcub3uvjHPrZlA?pli=1&key=UWFCLWFmRzgxQmNmUHdoazRuSmlIbUJfaUZWeHdn",
      projectDescription:
        "Created a custom mini computer using Raspberry Pi which can be used for different purposes like teaching children, learning Linux, learning pen-testing, etc.",
      projectTech: ["Raspberry Pi", "Linux", "Operating System", "Electronics"],
      projectExternalLinks: {
        github:
          "https://photos.google.com/share/AF1QipMFeZs6N1iaRhtgHn_Wz39bmSDLS6GscP2l4ZlNYOeJval5lF93Jcub3uvjHPrZlA?pli=1&key=UWFCLWFmRzgxQmNmUHdoazRuSmlIbUJfaUZWeHdn",
        externalLink:
          "https://photos.google.com/share/AF1QipMFeZs6N1iaRhtgHn_Wz39bmSDLS6GscP2l4ZlNYOeJval5lF93Jcub3uvjHPrZlA?pli=1&key=UWFCLWFmRzgxQmNmUHdoazRuSmlIbUJfaUZWeHdn",
      },
    },
    {
      projectName: "JS Coding Challenges",
      projectLink: "https://github.com/ComputeNepal/js-coding-challenges",
      projectDescription:
        "This is an open source project where users can learn about different JS coding challenges.",
      projectTech: ["JavaScript", "Markdown", "Git", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/ComputeNepal/js-coding-challenges",
        externalLink: "https://js-challenges.computenepal.com/",
      },
    },
    {
      projectName: "Learn C",
      projectLink: "https://github.com/ComputeNepal/learn-c-programming",
      projectDescription:
        "This is an open source project where users can learn about C language.",
      projectTech: ["C", "Markdown", "Git", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/ComputeNepal/learn-c-programming",
        externalLink: "https://learn-c.computenepal.com/",
      },
    },
    {
      projectName: "NpVim",
      projectLink: "https://github.com/gauravfs-14/NpVim",
      projectDescription: "Ready-to-go neovim config build on top of lazyvim.",
      projectTech: ["neovim", "Lua", "Linux", "Markdown"],
      projectExternalLinks: {
        github: "https://github.com/gauravfs-14/NpVim",
        externalLink: "https://gauravfs-14.github.io/NpVim/",
      },
    },
    {
      projectName: "Quiz Application",
      projectLink: "https://quiz.computenepal.com",
      projectDescription:
        "This is a quiz application built with pure HTML, CSS and JavaScript.",
      projectTech: ["JavaScript", "HTML", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/gauravfs-14/quiz_computenepal",
        externalLink: "https://quiz.computenepal.com",
      },
    },
    {
      projectName: "John Doe Portfolio",
      projectLink:
        "https://www.youtube.com/playlist?list=PLdOGfUXjXxTM4ZkyfkV5cHjjELfA_zi38",
      projectDescription:
        "This is a basic Portfolio project that was built in my Youtube Channel.",
      projectTech: ["JavaScript", "HTML", "CSS"],
      projectExternalLinks: {
        github:
          "https://github.com/gauravfs-14/animated-portfolio-homepage-with-darkmode-toggle",
        externalLink:
          "https://www.youtube.com/playlist?list=PLdOGfUXjXxTM4ZkyfkV5cHjjELfA_zi38",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>More Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container other-project">
        {projectsData.map(
          ({
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-info">
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default OtherProjects;
