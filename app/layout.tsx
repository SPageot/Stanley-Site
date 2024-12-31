"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import "./globals.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { LiaLinkedinIn } from "react-icons/lia";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mainScreen =
  "bg-black h-screen w-screen flex justify-center items-center";

const rightSectionLargeScreen =
  "h-30% w-full h-full flex flex-col justify-center text-white items-center gap-10 text-md sm:text-xl lg:text-2xl p-5 font-playfair absolute bg-[rgba(0,0,0,0.8)] z-30";

const hoverAnimation =
  "hover:scale-110 transition-transform duration-300 ease-in-out";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [videoUrl, setVideoUrl] = useState<string>("/assets/laptop.mp4");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const pathname = usePathname();
  const isPathHome = pathname === "/";

  const changeMenuItemVideoOnHover = [
    {
      name: "Home",
      url: "/",
      onMouseEnter: useCallback(
        () => setVideoUrl("/assets/laptop.mp4"),
        [videoUrl]
      ),
    },
    {
      name: "History",
      url: "/history",
      onMouseEnter: useCallback(
        () => setVideoUrl("/assets/history.mp4"),
        [videoUrl]
      ),
    },
    {
      name: "Projects",
      url: "/projects",
      onMouseEnter: useCallback(
        () => setVideoUrl("/assets/projects.mp4"),
        [videoUrl]
      ),
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <main className={mainScreen}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "95%" }}
            transition={{ duration: isPathHome ? 1 : 0.5 }}
            className="border-2 border-white h-[95%] w-[95%] flex justify-end items-center relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute top-0 right-0 m-5 z-50 flex items-center gap-2 "
            >
              {isFirstOpen && isPathHome && (
                <>
                  <h3 className="text-sm md:text-xl">Start Here</h3>
                  <BsArrowRight size={20} />
                </>
              )}
              {!isMenuOpen ? (
                <BiMenu
                  className="hover:bg-[rgba(169,149,123,0.5)] hover:rounded-full hover:shadow-2xl cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    setIsFirstOpen(false);
                  }}
                  size={30}
                />
              ) : (
                <CgClose onClick={() => setIsMenuOpen(!isMenuOpen)} size={30} />
              )}
            </motion.div>

            <video
              key={videoUrl}
              className="w-full h-full absolute object-cover"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {children}
            {isMenuOpen && (
              <motion.section
                initial={
                  isMenuOpen
                    ? { opacity: 0, width: "20%" }
                    : { opacity: 1, width: "30%" }
                }
                animate={
                  isMenuOpen
                    ? { opacity: 1, width: "30%" }
                    : { opacity: 0, width: "20%" }
                }
                transition={{ duration: 0.2 }}
                className={rightSectionLargeScreen}
              >
                {changeMenuItemVideoOnHover.map((menuItem) => (
                  <Link
                    key={menuItem.name}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={menuItem.onMouseEnter}
                    className={hoverAnimation}
                    href={menuItem.url}
                  >
                    {menuItem.name}
                  </Link>
                ))}
                <div className="absolute bottom-0 left-0 h-1/5 flex flex-col gap-2 justify-center items-center w-full">
                  <div className="flex justify-center items-center gap-1">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/stanley-pageot-a365ab1a0/"
                    >
                      <LiaLinkedinIn size={30} />
                    </Link>
                  </div>
                </div>
              </motion.section>
            )}
          </motion.div>
        </main>
      </body>
    </html>
  );
}
