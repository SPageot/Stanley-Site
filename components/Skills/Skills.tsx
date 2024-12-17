import { skillsList } from "@/constants/helpers";
import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-wrap h-4/5 justify-center items-start gap-4 md:justify-center md:w-full">
      {skillsList.map((skill, index) => (
        <h2
          key={index}
          className=" text-xs rounded-full py-1 px-5 border-white border-2 flex justify-center items-center"
        >
          {skill}
        </h2>
      ))}
    </div>
  );
};

export default Skills;
