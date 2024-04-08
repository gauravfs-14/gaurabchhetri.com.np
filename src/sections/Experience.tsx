import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Satmarga Education",
      role: "IT Officer",
      url: "https://satmargaeducation.com",
      start: "February 2024",
      end: "Present",
      shortDescription: [
        "Spearheaded the development and maintenance of the company's website, ensuring alignment with brand identity and providing an engaging user experience.",
        "Manage domain registrations, renewals, and configurations, while overseeing the setup and maintenance of company email accounts.",
        "Develop and execute social media strategies to increase brand awareness, engagement, and drive traffic to online platforms.",
        "Implement digital marketing campaigns across various channels to promote products/services and generate leads.",
        "Create visually appealing graphics, illustrations, and multimedia content for marketing materials and social media posts.",
        "Continuously improve website functionality and user experience through coding, troubleshooting, and implementing new features.",
        "Conceptualize, produce, and optimize video and photo ad campaigns to effectively communicate key messages and drive conversions.",
        "Ensure the smooth operation of computers and related equipment in the company's lab environment, including troubleshooting hardware/software issues and performing routine maintenance tasks.",
      ],
    },
    {
      name: "ComputeNepal",
      role: "Founder And Developer",
      url: "https://computenepal.com",
      start: "May 2021",
      end: "Present",
      shortDescription: [
        "Visualized, planned, and developed a website (https://computenepal.com/) that provides content related to computers and computing.",
        "Learned different skills like development life cycle, CMS, SEO, Website Design And Development, Domain and Hosting, Technical Writing, etc.",
        "Used different technologies like WordPress, HTML, CSS, JavaScript, PHP, Google Analytics, C, and many more.",
        "Started multiple projects both open source and closed source.",
      ],
    },
    {
      name: "GSCosmetics",
      role: "Social Media Manager",
      url: "https://gscosmetics.business.site/",
      start: "July 2021",
      end: "Present",
      shortDescription: [
        "Developed a landing page for the business.",
        "Listed business on Google MyBusiness and also created social media pages.",
        "Managed social profiles of the business.",
      ],
    },
    {
      name: "ramCoder",
      role: "Founder",
      url: "https://www.youtube.com/@ramcoder/",
      start: "November 2019",
      end: "Present",
      shortDescription: [
        "I've been helping people in development by creating different kinds of tutorials.",
        "Currently, I've around 60 videos and more than 25K views.",
        "Overall, it was a rewarding experience that allowed me to develop my skills and help people around the world.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${index === selected && "exp-slider-item-selected"
                  }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link" target="_blank">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
