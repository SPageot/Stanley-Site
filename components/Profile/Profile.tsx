import React from "react";
import Image from "next/image";
import { AvatarPropTypes } from "@/types/types";

const Avatar: React.FC<AvatarPropTypes> = ({
  srcPhoto,
  alt,
  jobTitle,
  profileSummary,
}) => {
  return (
    <div className="card border-2 w-96 lg:h-2/4">
      <figure>
        <Image src={srcPhoto} alt={alt} className="rounded-full p-10 lg:p-32" />
      </figure>
      <div className="card-body bg-black rounded-2xl">
        <h1 className="card-title text-3xl underline text-white">{jobTitle}</h1>
        <p className="text-md font-extrabold text-white flex justify-center items-center lg:text-sm ">
          {profileSummary}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
