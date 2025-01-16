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
      className=" font-playfair card border-t-2 border-b-2 sm:border-2 h-96 p-5 w-96 shadow-xl"
    >
      <figure className="font-extrabold text-sm py-10">{title}</figure>
      <div className="card-body p-0 flex-none">
        <p className="text-xs">{description}</p>
      </div>
    </motion.div>
  );
};
