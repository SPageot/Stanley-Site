import { StaticImageData } from "next/image";

export type AvatarPropTypes = {
  srcPhoto: StaticImageData;
  alt: string;
  jobTitle: string;
  profileSummary: string;
};
