import React from "react";
const ExperienceCard = ({ company, logo, designation, link }) => {
  return (
    <div className="border border-gray-700 p-4 pt-2 mb-4 rounded-lg">
      <div className="top-row flex gap-x-2 justify-start items-center">
        <div className="image-container">
          <img src={logo} className="w-10 h-10 rounded-full" />
        </div>
        <a href={link} target="_blank" className="underline font-semibold">
          {company}
        </a>
      </div>
      <div className="bottom-row mt-2">{designation}</div>
    </div>
  );
};

export default ExperienceCard;
