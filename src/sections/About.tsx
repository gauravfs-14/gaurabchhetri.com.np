import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Namaste! My name is Gaurab, and I am passionate about transforming creative ideas into reality through web. My interest in web     development was developed since I was introduced with HTML and, I created a basic web page with it which made me delve into web development.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I transform creative ideas into reality with Web. I also transformed my own idea into reality with my skills by building a brand called {" "}
            <Link href="https://computenepal.com" className="link" target="_blank">
              ComputeNepal.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I help others and share my knowledge to others through my YouTube Channel and also through other different web portals.
          </p>
          <p className="about-grid-info-text">
            Here's a quote that I follow "Do what you want not what you can!"
          </p>
          <p className="about-grid-info-text">
            Below are some technologies that I've worked on:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML, CSS, Markdown</li>
            <li className="about-grid-info-list-item">Tailwind CSS, Bootstrap</li>
            <li className="about-grid-info-list-item">JavaScript, TypeScript</li>
            <li className="about-grid-info-list-item">React, Next, React Native</li>
            <li className="about-grid-info-list-item">PHP, SQL</li>
            <li className="about-grid-info-list-item">Node.js, Express.js</li>
            <li className="about-grid-info-list-item">MongoDB, MySQL</li>
            <li className="about-grid-info-list-item">Linux, NPM, Yarn, Expo</li>
            <li className="about-grid-info-list-item">Figma, GIMP, Canva</li>
            <li className="about-grid-info-list-item">WordPress/ Blogger</li>
            <li className="about-grid-info-list-item">CloudFlare, Netlify</li>
            <li className="about-grid-info-list-item">Git, GitHub</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/gaurabchhetri.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
