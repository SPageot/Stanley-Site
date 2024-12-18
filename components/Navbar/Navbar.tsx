import Link from "next/link";
import React from "react";
import { ImProfile } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { LuFileStack } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-[rgba(0,0,0,0)] z-50 fixed bottom-0 lg:flex lg:justify-center lg:align-center lg:fixed lg:top-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:bottom-auto">
      <ul className="menu menu-horizontal flex justify-evenly items-center bg-base-200 w-screen lg:static lg:w-auto lg:rounded-box">
        <li>
          <Link href="/">
            <ImProfile size={30} />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <LuFileStack size={30} />
          </Link>
        </li>
        <li>
          <a>
            <IoMdContact size={30} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
