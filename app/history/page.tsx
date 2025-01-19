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
      className="flex justify-center bg-black items-center"
    >
      <Timeline />
    </motion.section>
  );
};

export default History;
