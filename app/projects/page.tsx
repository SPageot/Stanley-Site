"use client";

import React from "react";
import blackfezLogo from "../../public/assets/blackfezlogo.png";
import { motion } from "framer-motion";
import Project from "@/components/Project/Project";

const Projects = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex bg-primary p-10 pt-28"
    >
      <Project
        projectImage={blackfezLogo}
        projectLink="https://blackfezbarbershop.netlify.app/"
      />
    </motion.main>
  );
};

export default Projects;
