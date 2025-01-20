"use client";
import React from "react";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline/Timeline";

const History = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center bg-primary items-center pt-28"
    >
      <Timeline />
    </motion.main>
  );
};

export default History;
