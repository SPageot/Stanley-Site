import React from "react";
import { motion } from "framer-motion";

export const Details = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): React.ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className=" font-playfair card border-2 h-[40rem] p-10 w-96 shadow-xl"
    >
      <figure className="font-extrabold text-sm">{title}</figure>
      <div className="card-body">
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
