import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectType } from "@/types/types";

const Project: React.FC<ProjectType> = ({
  projectImage,
  projectLink,
}): React.ReactElement => {
  return (
    <Link
      href={projectLink}
      className="bg-black h-32 lg:h-72 flex items-center relative rounded-lg"
    >
      <Image
        src={projectImage}
        alt="Black Fez Logo"
        className="h-full w-full rounded-lg"
        priority
      />
    </Link>
  );
};

export default Project;
