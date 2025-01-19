"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import blackfezLogo from "../../public/assets/blackfezlogo.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="flex bg-black p-10"
    >
      <Link
        href="https://blackfezbarbershop.netlify.app/"
        className="bg-black h-32 lg:h-72 flex items-center relative rounded-lg"
      >
        <Image
          src={blackfezLogo}
          alt="Black Fez Logo"
          className="h-full w-full rounded-lg"
          priority
        />
      </Link>
    </motion.section>
  );
};

export default Projects;
