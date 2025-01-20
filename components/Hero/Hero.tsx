import React from "react";
import { motion } from "framer-motion";
import { HeroTypes } from "@/types/types";
import Image from "next/image";
import codingImage from "../../public/assets/codingImage.jpg";

const Hero: React.FC<HeroTypes> = ({
  title,
  subtitle,
  imageSrc,
}): React.ReactElement => {
  return (
    <div className="hero min-h-screen relative">
      <Image
        priority
        src={codingImage}
        className="h-full w-full absolute left-0 top-0"
        alt="Coding Image"
      />
      <div className="hero-content flex-col gap-10 lg:flex-row">
        {imageSrc && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            src={imageSrc}
            className="h-1/2 rounded-lg shadow-2xl"
          />
        )}
        <div className=" flex flex-col gap-3 glass p-10 rounded-xl text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" flex flex-col gap-10 text-6xl sm:text-8xl font-bold"
          >
            {title}
          </motion.h1>
          <h2 className="text-3xl font-bold">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
