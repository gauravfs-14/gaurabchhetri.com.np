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
            Namaste! 🙏 My name is Gaurab, and I am passionate about bringing creative ideas to life through web development. My journey into web development began when I was introduced to HTML, and I created my first basic web page. This initial experience ignited my passion for the field, leading me to delve deeper into the world of web development.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in transforming creative concepts into reality using a variety of web technologies. I&apos;ve had the pleasure of bringing my own ideas to fruition, including the creation of a successful brand called<Link
              href="https://computenepal.com"
              className="link"
              target="_blank"
            >
              ComputeNepal.
            </Link>. In addition to my entrepreneurial pursuits, I&apos;ve gained invaluable experience as an IT Officer at <Link
              href="https://satmargaeducation.com"
              className="link"
              target="_blank"
            >
              Satmarga Education
            </Link>, where I&apos;ve honed my skills in managing domain registrations, email systems, and computer lab environments to ensure seamless technological operations. 💼💻

          </p>

          <p className="about-grid-info-text">
            In addition to my professional roles, I am dedicated to sharing my knowledge and helping others through my YouTube Channel and various web portals. I firmly believe in the mantra &quot;Do what you want, not what you can!&quot;, which drives me to pursue my passions relentlessly. 🚀
          </p>

          <p className="about-grid-info-text">
            Below are some technologies that I&apos;ve worked on:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML, CSS, Markdown</li>
            <li className="about-grid-info-list-item">
              Tailwind CSS, Bootstrap
            </li>
            <li className="about-grid-info-list-item">
              JavaScript, TypeScript
            </li>
            <li className="about-grid-info-list-item">
              React, Next, React Native
            </li>
            <li className="about-grid-info-list-item">PHP, SQL</li>
            <li className="about-grid-info-list-item">Node.js, Express.js</li>
            <li className="about-grid-info-list-item">MongoDB, MySQL</li>
            <li className="about-grid-info-list-item">
              Linux, NPM, Yarn, Expo
            </li>
            <li className="about-grid-info-list-item">Figma, GIMP, Canva</li>
            <li className="about-grid-info-list-item">WordPress/ Blogger</li>
            <li className="about-grid-info-list-item">CloudFlare, Netlify</li>
            <li className="about-grid-info-list-item">Git, GitHub</li>
            <li className="about-grid-info-list-item">SEO, Digital Marketing</li>
            <li className="about-grid-info-list-item">Graphic Design, Video Editing</li>
            <li className="about-grid-info-list-item">Domain Management, Computer Maintenance</li>
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
