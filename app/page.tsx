"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const mainScreen =
  "bg-black h-screen w-screen flex justify-center items-center";

const rightSectionLargeScreen =
  "h-full w-full flex flex-col justify-center items-center gap-10 text-xl sm:text-3xl lg:text-5xl p-5 font-playfair absolute bg-[rgba(0,0,0,0.8)]";

const leftSectionLargeScreen = "border-2 w-[50%] h-[95%]";

const hoverAnimation =
  "hover:scale-110 transition-transform duration-300 ease-in-out";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4"
  );

  const changeMenuItemVideoOnHover = [
    {
      name: "Work History",
      url: "/work-history",
      onMouseEnter: useCallback(
        () =>
          setVideoUrl(
            "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4"
          ),
        [videoUrl]
      ),
    },
    {
      name: "Projects",
      url: "/projects",
      onMouseEnter: useCallback(
        () =>
          setVideoUrl(
            "https://videos.pexels.com/video-files/6774635/6774635-uhd_2560_1440_30fps.mp4"
          ),
        [videoUrl]
      ),
    },
    {
      name: "Contact",
      url: "/contact",
      onMouseEnter: useCallback(
        () =>
          setVideoUrl(
            "https://videos.pexels.com/video-files/6183189/6183189-uhd_2560_1440_25fps.mp4"
          ),
        [videoUrl]
      ),
    },
  ];

  return (
    <main className={mainScreen}>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "95%" }}
        transition={{ duration: 2 }}
        className="border-2 border-white h-[95%] w-[95%] flex justify-end items-center relative"
      >
        <video
          key={videoUrl}
          className="w-full h-full absolute rounded-lg object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.section
          initial={{ opacity: 0, width: "60%" }}
          animate={{ opacity: 1, width: "50%" }}
          transition={{ delay: 2, duration: 2 }}
          className={rightSectionLargeScreen}
        >
          {changeMenuItemVideoOnHover.map((menuItem) => (
            <Link
              key={menuItem.name}
              onMouseEnter={menuItem.onMouseEnter}
              className={hoverAnimation}
              href={menuItem.url}
            >
              {menuItem.name}
            </Link>
          ))}
        </motion.section>
      </motion.div>
    </main>
  );
}
