import Image from "next/image";
import React from "react";
import blackFezLogo from "../../assets/logo.png";
import Link from "next/link";

const Projects = () => {
  return (
    <main className="bg-black container h-screen max-w-full snap-y lg:flex lg:items-end">
      <section className="flex flex-col snap-start h-full lg:p-10 lg:py-40 justify-center items-center">
        <Link
          href="https://blackfezbarbershop.netlify.app/"
          className="rounded-2xl bg-black w-60 h-60 flex items-center relative"
        >
          <Image
            src={blackFezLogo}
            alt="black fez barbershop logo"
            className="absolute h-full rounded-2xl"
          />
        </Link>
      </section>
    </main>
  );
};

export default Projects;
