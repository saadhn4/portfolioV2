import React from "react";
import ProjectCard from "../components/ProjectCard";
import eatSure from "../assets/eat-sure-website.png";
import gitFind from "../assets/git-find.png";
import theRuhsPic from "../assets/the-ruhs.png";
import twitterAppPic from "../assets/twitter-app.png";
import rpsGame from "../assets/rock-paper-scissors.png";
import calc from "../assets/calculator.png";
import todo from "../assets/to-do-app.png";
import cPicker from "../assets/color-picker.png";
import weather from "../assets/weather.png";

const Projects = () => {
  return (
    <section className="md:pt-[30px] pt-5 pb-5">
      <h1 className="text-3xl mb-6 font-semibold text-center md:text-start">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-20 gap-y-4">
        <ProjectCard
          picture={eatSure}
          title="EatSure"
          desc="Restaurant Review Application built with MERN stack."
          link="https://github.com/saadhn4/capstone-fr"
        />
        <ProjectCard
          picture={gitFind}
          title="GitHub Finder"
          desc="A simple React app that lets you search for GitHub user profiles using the GitHub REST API."
          link="https://github-finder-topaz.vercel.app/"
        />
        <ProjectCard
          picture={twitterAppPic}
          title="Twitter Clone"
          desc="A simple Twitter-style mini posting app built using React."
          link="https://saad-twitter-clone.vercel.app/"
        />
          <ProjectCard
          picture={weather}
          title="Weather App"
          desc="React-based weather app that fetches current weather data using the OpenWeatherMap API."
          link="https://saad-weather.vercel.app/"
        />
        <ProjectCard
          picture={theRuhsPic}
          title="The Ruhs"
          desc="A custom website built from scratch to showcase the RUHS brand online."
          link="https://theruhs.vercel.app/"
        />
        <ProjectCard
          picture={rpsGame}
          title="Rock Paper Scissors"
          desc="A Rock, Paper, Scissors game built with HTML, CSS, and JavaScript."
          link="https://saad-rock-paper-scissors.vercel.app/"
        />
        <ProjectCard
          picture={calc}
          title="Calculator"
          desc="Caclculator built with HTML, CSS, and JavaScript."
          link="https://saad-js-calculator.vercel.app//"
        />
        <ProjectCard
          picture={todo}
          title="To-Do-List"
          desc="A simple, interactive To-Do List web application built with HTML, CSS, and JavaScript."
          link="https://saad-todo.vercel.app/"
        />
      
      </div>
      <div className="flex justify-center items-center">
        <a href="https://github.com/saadhn4" target="_blank">
          More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
