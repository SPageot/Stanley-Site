"use client";
import Hero from "@/components/Hero/Hero";
import { motion } from "framer-motion";
import { Details } from "@/components/Details/Details";
import SkillsList from "@/components/SkillsList/SkillsList";

export default function Home() {
  const summary =
    " Experienced Software Engineer with demonstrated success in developing robust, secure, and scalable applications. Proven ability to work in fast-paced environments, adapt to different work environments, and ensuring projects are delivered on time.";
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
          {summary}
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
        <SkillsList />
      </motion.section>
    </main>
  );
}
