import React from "react";
import { motion } from "framer-motion";
import { HeroTypes } from "@/types/types";

const Hero: React.FC<HeroTypes> = ({
  title,
  subtitle,
  imageSrc,
}): React.ReactElement => {
  return (
    <div className="hero bg-primary min-h-screen">
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
        <div className=" flex flex-col gap-3 ">
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
