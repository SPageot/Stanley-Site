import { skillsList } from "@/constants/helpers";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillsList = () => {
  return (
    <ul className="flex gap-10 md:w-full justify-center items-center flex-wrap">
      {skillsList.map((skill) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          key={skill.id}
          className="w-20 lg:w-32 lg:w-60"
        >
          <Image
            src={skill.image}
            alt="logo"
            className="h-full w-full object-contain"
          />
        </motion.div>
      ))}
    </ul>
  );
};

export default SkillsList;
