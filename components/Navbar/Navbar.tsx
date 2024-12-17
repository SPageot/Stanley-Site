import Link from "next/link";
import React from "react";
import { ImProfile } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { LuFileStack } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="bg-[rgba(0,0,0,0)] lg:flex justify-center align-center fixed top-10 left-1/2 transform -translate-x-1/2 hidden lg:block lg:z-50">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link href="/">
            <ImProfile size={20} />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <LuFileStack size={20} />
          </Link>
        </li>
        <li>
          <a>
            <IoMdContact size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
