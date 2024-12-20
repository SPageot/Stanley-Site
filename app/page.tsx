"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="flex justify-start items-center gap-2 flex-col md:flex-row md:gap-10 absolute top-0 left-0 p-2 bg-[rgba(169,149,123,0.7)]"
    >
      <h3 className="text-white text-sm md:text-xl font-extrabold z-50">
        Stanley Pageot
      </h3>
      <h4 className="text-white text-sm md:text-xl font-extrabold z-50">
        Software Engineer
      </h4>
    </motion.section>
  );
}
