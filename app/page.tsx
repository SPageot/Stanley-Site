"use client";
import Hero from "@/components/Hero/Hero";
import { motion } from "framer-motion";
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
import { Details } from "@/components/Details/Details";

export default function Home() {
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
    <main className="min-h-screen pt-28">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="border-b-4"
      >
        <Hero title="Stanley Pageot" subtitle="Software Engineer" />
      </motion.section>
      <section className="font-playfair flex justify-center bg-primary items-center p-10 h-96 border-b-4 font-extrabold lg:text-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Experienced Software Engineer with demonstrated success in developing
          robust, secure, and scalable applications. Proven ability to work in
          fast-paced environments, adapt to different work environments, and
          ensuring projects are delivered on time.
        </motion.p>
      </section>
      <motion.section className="bg-primary flex flex-wrap xl:flex-nowrap gap-10 justify-evenly items-center p-10 lg:p-base lg:py-80">
        <Details
          title="Test and Debug Software"
          description="I specialize in testing and debugging software to identify and resolve issues, ensuring smooth functionality and optimal performance. My work involves writing test cases, conducting thorough analysis, and applying debugging techniques to deliver reliable, high-quality applications."
        />
        <Details
          title="Collaborate with Teams and Stakeholders"
          description="I collaborate closely with cross-functional teams and stakeholders to understand project requirements and deliver solutions that align with business goals. Through regular communication and feedback loops, I ensure that the development process meets expectations and achieves optimal results."
        />
        <Details
          title="Write and Maintain Code"
          description="I write clean, efficient, and maintainable code to build robust software solutions while adhering to best practices and coding standards. Additionally, I regularly update and refactor existing code to enhance performance, fix bugs, and ensure long-term maintainability."
        />
        <Details
          title="Design and Architect Systems"
          description="I design and architect scalable, efficient systems that meet both functional and technical requirements, ensuring seamless integration and performance. By carefully selecting appropriate technologies and defining clear system structures, I create solutions that are both reliable and adaptable to future needs."
        />
      </motion.section>
      <motion.section className="pt-10 bg-primary">
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
      </motion.section>
    </main>
  );
}
