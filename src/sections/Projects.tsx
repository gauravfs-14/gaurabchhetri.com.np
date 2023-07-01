import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/computenepal.png",
      projectName: "ComputeNepal",
      projectLink: "https://computenepal.com",
      projectDescription:
        "This is a project that helps people around the world learn about technology.",
      projectTech: [
        "WordPress",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "CloudFlare",
        "Hosting"
      ],
      projectExternalLinks: {
        github: "https://github.com/computenepal/",
        externalLink: "https://computenepal.com",
      },
    },
    {
      image: "/learn-html.png",
      projectName: "Learn HTML",
      projectLink: "https://learn-html.computenepal.com",
      projectDescription:
        "This is a project that helps people around the world to learn about HTML.",
      projectTech: [
        "React",
        "Markdown",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      projectExternalLinks: {
        github: "https://github.com/computenepal/learn-html",
        externalLink: "https://learn-html.computenepal.com",
      },
    },
    {
      image: "/text-utils.png",
      projectName: "React Text Utilities",
      projectLink: "https://text-utils-gauravfs-14.netlify.app/",
      projectDescription:
        "This is a react based project that provides different text based utilities.",
      projectTech: [
        "React",
        "Bootstrap",
        "React Router",
        "Netlify"
      ],
      projectExternalLinks: {
        github: "https://github.com/gauravfs-14/text-utils",
        externalLink: "https://text-utils-gauravfs-14.netlify.app/",
      },
    },
  {
      image: "/lms.png",
      projectName: "LMS PHP & MySQL",
      projectLink: "http://library-management.gaurabchhetri.com.np",
      projectDescription:
        "This is a library management system built with PHP. Admin Credentials ==> uname&pass: 'admin_admin' and Student Credentials ==> uname&pass: 'johndoe123@gmail.com'",
      projectTech: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Hosting"
      ],
      projectExternalLinks: {
        github: "https://github.com/gauravfs-14/library_management_php",
        externalLink: "http://library-management.gaurabchhetri.com.np",
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
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
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
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
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

export default Projects;
