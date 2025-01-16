import Link from "next/link";
import React from "react";

export const NavLinks = ({ isVertical }: { isVertical?: boolean }) => {
  const changeMenuItemVideoOnHover = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "History",
      url: "/history",
    },
    {
      id: 3,
      name: "Projects",
      url: "/projects",
    },
  ];
  return !isVertical ? (
    <ul className="menu menu-horizontal font-playfair">
      {changeMenuItemVideoOnHover.map((navLink) => (
        <li key={navLink.id}>
          <Link href={navLink.url}>{navLink.name}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="menu bg-base-200 font-playfair min-h-full w-80 p-4 flex flex-col justify-center items-center gap-3">
      {changeMenuItemVideoOnHover.map((navLink) => (
        <li key={navLink.id}>
          <Link href={navLink.url}>{navLink.name}</Link>
        </li>
      ))}
    </ul>
  );
};
