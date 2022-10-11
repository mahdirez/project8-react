import React from "react";

const liNav = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#categories",
    text: "Categories",
  },
  {
    href: "#courses",
    text: "Courses",
  },
  {
    href: "#about",
    text: "About Us",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

export default function Navbar() {
  return (
    <ul className="navbar">
      {liNav.map(({href,text}) => {
      return <li>
          <a href={href}>{text}</a>
        </li>;
      })}
    </ul>
  );
}
