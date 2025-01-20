import { StaticImageData } from "next/image";

export type AvatarPropTypes = {
  srcPhoto: StaticImageData;
  alt: string;
  jobTitle: string;
  profileSummary: string;
};

export type HeroTypes = {
  title: string;
  subtitle: string;
  imageSrc?: string;
};

export type ProjectType = {
  projectImage: StaticImageData;
  projectLink: string;
};
