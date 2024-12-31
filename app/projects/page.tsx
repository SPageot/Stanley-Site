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
      className="h-full w-full flex bg-[rgba(0,0,0,0.8)] absolute z-20 p-10  "
    >
      <Link
        href="https://blackfezbarbershop.netlify.app/"
        className="bg-black w-20 h-20 md:w-60 md:h-60 flex items-center rounded-full relative"
      >
        <Image
          src={blackfezLogo}
          alt="Black Fez Logo"
          className="h-full w-full rounded-full"
          priority
        />
      </Link>
    </motion.section>
  );
};

export default Projects;
