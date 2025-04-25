import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import cfiLogo from "../assets/cfi-logo.png";
import ruhsLogo from "../assets/the-ruhs-logo.png";
import eatSure from "../assets/eat-sure-website.png";
import gitFind from "../assets/git-find.png";
import theRuhsPic from "../assets/the-ruhs.png";
import twitterAppPic from "../assets/twitter-app.png";
import goat from "../assets/goat2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:pt-[60px] pt-[35px] flex flex-col md:flex-row gap-x-10 gap-y-3"
      >
        <div className="left">
          <img
            src="https://i.pinimg.com/736x/b3/25/f6/b325f69e199b6d6e8d6808129e6d7aa9.jpg"
            alt="hero-pic"
            className="w-60 h-60 rounded-2xl"
          />
        </div>
        <div className="right">
          <h1 className="text-3xl mb-4 font-semibold">Hi, I'm Saad 👋</h1>
          <p className="mb-5">CS grad who enjoys building apps and websites.</p>
          <p>
            Active on
            <a
              className="underline mx-1"
              href="https://github.com/saadhn4"
              target="_blank"
            >
              GitHub
            </a>
            — where I share what I'm learning and working on.
          </p>
          <div className="socials-row mt-4 flex gap-x-4">
            <a href="https://github.com/saadhn4" target="_blank">
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/saadhussain04/" target="_blank">
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/saad.hn/" target="_blank">
              <i className="bi bi-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:pt-[60px] pt-8"
      >
        <h1 className="text-3xl mb-4 font-semibold">Experience</h1>
        <ExperienceCard
          company="Code For India Foundation"
          logo={cfiLogo}
          designation=" Full Stack Web Development Intern | Oct 2024 - Mar 2025 | On-site"
          link="https://codeforindia.com/"
        />
        <ExperienceCard
          company="The Ruhs"
          logo={ruhsLogo}
          designation=" Freelance Web Developer | Mar 2025 - Apr 2025 | Remote"
          link="https://theruhs.vercel.app/"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:pt-[30px] pt-5 pb-5"
      >
        <h1 className="text-3xl mb-8 font-semibold">Projects</h1>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-5">
          <ProjectCard picture={eatSure} title="EatSure" desc="Restaurant Review Application built with MERN stack." link="https://food.saadhn.xyz/" />
          <ProjectCard picture={gitFind} title="GitHub Finder" desc="Search GitHub user profiles using the GitHub REST API." link="https://github-finder-topaz.vercel.app/" />
          <ProjectCard picture={twitterAppPic} title="Twitter Clone" desc="A simple Twitter-style mini posting app built using React." link="https://tweet.saadhn.xyz/" />
          <ProjectCard picture={goat} title="Cat Generator" desc="Fun React app that fetches and displays a random cat image using the Cataas API." link="https://theruhs.vercel.app/" />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link to="/projects">More</Link>
        </div>
      </motion.section>
    </>
  );
};

export default Home;