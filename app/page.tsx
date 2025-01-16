"use client";
import Hero from "@/components/Hero/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import reactLogo from "@/public/assets/react-logo.png";
import jsLogo from "@/public/assets/js-logo.png";
import reactNativeLogo from "@/public/assets/reactnative-logo.svg";
import golangLogo from "@/public/assets/golang-logo.png";
import pythonLogo from "@/public/assets/python-logo.png";
import fastapiLogo from "@/public/assets/fastapi-logo.png";
import flaskLogo from "@/public/assets/flask-logo.png";
import nodejsLogo from "@/public/assets/nodejs-logo.png";
import expressjsLogo from "@/public/assets/expressjs-logo.png";
import nextjsLogo from "@/public/assets/nextjs-logo.png";
import gitLogo from "@/public/assets/git-logo.png";
import nestjsLogo from "@/public/assets/nestjs-logo.png";
import graphqlLogo from "@/public/assets/graphql-logo.webp";
import tailwindLogo from "@/public/assets/tailwind-logo.webp";
import tsLogo from "@/public/assets/ts-logo.png";
import dockerLogo from "@/public/assets/docker-logo.png";
import mongodbLogo from "@/public/assets/mongodb-logo.png";
import postgresqlLogo from "@/public/assets/postgresql-logo.png";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const skillsList = [
    { id: 1, image: reactLogo },
    { id: 2, image: reactNativeLogo },
    { id: 3, image: jsLogo },
    { id: 4, image: golangLogo },
    { id: 5, image: pythonLogo },
    { id: 6, image: fastapiLogo },
    { id: 7, image: flaskLogo },
    { id: 8, image: nodejsLogo },
    { id: 9, image: expressjsLogo },
    { id: 10, image: graphqlLogo },
    { id: 11, image: nextjsLogo },
    { id: 12, image: tsLogo },
    { id: 13, image: tailwindLogo },
    { id: 14, image: gitLogo },
    { id: 15, image: dockerLogo },
    { id: 16, image: nestjsLogo },
    { id: 17, image: postgresqlLogo },
    { id: 18, image: mongodbLogo },
  ];
  return (
    <main className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <Hero title="Stanley Pageot" subtitle="Software Engineer" />
      </motion.section>
      <motion.section className="h-screen flex flex-col justify-around items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair border-t-2 border-b-2 p-10  lg:text-5xl"
        >
          Test and Debug Software
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair border-t-2 border-b-2 p-10   text-end lg:text-5xl"
        >
          Collaborate with Teams and Stakeholders
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair  border-t-2 border-b-2 p-10 lg:text-5xl"
        >
          Write and Maintain Code
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair  border-t-2 border-b-2 p-10  lg:text-5xl"
        >
          Design and Architext Software Systems
        </motion.h2>
      </motion.section>
      <motion.section className="h-screen pt-20 pl-5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair lg:text-5xl sticky top-5"
        >
          Skills
        </motion.h2>
        <ul className="flex gap-10 w-full flex justify-center items-center flex-wrap">
          {skillsList.map((skill) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              key={skill.id}
              className="w-20 sm:w-60"
            >
              <Image
                src={skill.image}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </motion.div>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
