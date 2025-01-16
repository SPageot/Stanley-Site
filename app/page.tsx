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
    <main className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <Hero title="Stanley Pageot" subtitle="Software Engineer" />
      </motion.section>
      <motion.section className="flex flex-wrap gap-10 justify-evenly items-center">
        <Details
          title="Test and Debug Software"
          description="Testing and debugging are critical steps in software development
            that ensure your software functions correctly and is free of errors.
            Testing involves running the software under various conditions to
            verify that it meets its requirements and behaves as expected. This
            includes checking individual components, how they interact, and how
            the entire system performs. Debugging, on the other hand, focuses on
            identifying and fixing issues (or 'bugs') that may arise during
            testing. Together, these processes help improve the reliability,
            security, and user experience of the software, ensuring it runs
            smoothly and meets your needs before it’s released."
        />
        <Details
          title="Collaborate with Teams and Stakeholders"
          description="Collaborating with teams and stakeholders involves working closely
            with various groups—such as developers, designers, product managers,
            and clients—to ensure that everyone is aligned and working towards
            the same goals. This process includes regular communication,
            gathering feedback, and making sure that each team understands their
            role and responsibilities within the project. Collaboration ensures
            that the software being developed meets both technical requirements
            and business needs, while addressing any concerns or changes that
            arise throughout the project. Effective collaboration helps to avoid
            misunderstandings, improve problem-solving, and ensure the timely
            delivery of a high-quality product."
        />
        <Details
          title="Write and Maintain Code"
          description="Writing code involves developing the software's features and
            functionalities using programming languages, ensuring it meets the
            required specifications. Maintenance, on the other hand, is the
            ongoing task of updating the code to fix bugs, improve performance,
            add new features, or ensure compatibility with other systems and
            technologies. It also includes refactoring (restructuring) the code
            to keep it clean and efficient, ensuring that the software remains
            reliable and adaptable over time. Together, these processes ensure
            that the software continues to meet user needs and performs
            optimally."
        />
        <Details
          title="Design and Architect Systems"
          description=" Designing and architecting software systems involves planning and
            structuring the software's overall framework to ensure it meets both
            functional and non-functional requirements. This process includes
            defining how different components of the system will interact,
            selecting the right technologies, and creating an architecture that
            is scalable, reliable, secure, and maintainable. The design phase
            focuses on breaking down the system into manageable parts, while the
            architecture ensures these parts work together effectively. A
            well-designed and well-architected system provides a solid
            foundation for development, helping to prevent future issues,
            accommodate growth, and ensure the software can be easily updated or
            modified as needs evolve."
        />
      </motion.section>
      <motion.section className="h-screen mt-10 pl-5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-playfair lg:text-5xl sticky top-0"
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
              className="w-20 sm:w-32 sm:w-60"
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
