"use client";
import React from "react";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline/Timeline";

const History = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.2 }}
      className="h-full w-full flex overflow-y-scroll justify-center bg-[rgba(0,0,0,0.7)] items-center absolute z-30"
    >
      <Timeline />
    </motion.section>
  );
};

export default History;
