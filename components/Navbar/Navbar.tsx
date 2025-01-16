import React from "react";
import Image from "next/image";
import logoName from "@/public/assets/logo.png";
import { NavLinks } from "../NavLinks/NavLinks";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer relative z-50 sticky top-0 left-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-black w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost relative z-30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <Image src={logoName} width={100} alt="I dot create logo" />
          </div>
          <div className="hidden flex-none lg:block">
            <NavLinks />
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <NavLinks isVertical />
      </div>
    </div>
  );
};
