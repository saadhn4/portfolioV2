import React from "react";

const ProjectCard = ({ picture, title, desc,link }) => {
  return (
    <div className="w-[300px] h-[320px] pb-4">
      <a href={link} target="_blank">
        <div className="top">
          <img
            src={picture}
            alt="website-img"
            className="w-[300px] h-[200px] object-cover object-top rounded-lg block"
          />
        </div>
        <div className="bottom mt-4">
          <p className="text-lg leading-tight m-0">{title}</p>
          <p className="text-gray-500 leading-tight mt-1 m-0">{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
