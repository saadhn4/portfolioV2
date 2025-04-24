import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ picture, title, desc, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-[300px] h-[320px] pb-4"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="top">
          <img
            src={picture}
            alt={title}
            className="w-[300px] h-[200px] object-cover object-top rounded-lg block"
          />
        </div>
        <div className="bottom mt-4">
          <p className="text-lg leading-tight m-0 text-white">{title}</p>
          <p className="text-gray-500 leading-tight mt-1 m-0 text-sm">{desc}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
