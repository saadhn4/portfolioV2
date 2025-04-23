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

const Projects = () => {
  return (
    <section className="md:pt-[30px] pt-5 pb-5">
      <h1 className="text-3xl mb-6 font-semibold text-center md:text-start">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 place-items-center">
        <ProjectCard
          picture={eatSure}
          title="EatSure"
          desc="Restaurant Review Application built with MERN stack."
          link="https://food.saadhn.xyz/"
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
          link="https://tweet.saadhn.xyz/"
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
          link="https://game.saadhn.xyz/"
        />
            <ProjectCard
          picture={calc}
          title="Calculator"
          desc="Caclculator built with HTML, CSS, and JavaScript."
          link="https://math.saadhn.xyz/"
        />
            <ProjectCard
          picture={todo}
          title="To-Do-List"
          desc="A simple, interactive To-Do List web application built with HTML, CSS, and JavaScript."
          link="https://saad-todo.vercel.app/"
        />
              <ProjectCard
          picture={cPicker}
          title="Color Picker"
          desc="A simple and visually appealing color picker app built with React. "
          link="https://saad-react-color-picker.vercel.app/"
        />
      </div>
      <div className="flex justify-center items-center">
          <a href="https://github.com/saadhn4" target="_blank">More on GitHub</a>
        </div>
    </section>
  );
};

export default Projects;
