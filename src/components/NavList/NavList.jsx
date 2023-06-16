import React from "react";
import { Link } from "react-scroll";

const NavList = () => {
  return (
    <ul className=" text-shadow-2 flex mx-8 text-center h-16 font-serif  items-center gap-6">
      <li className="rotateY cursor-pointer">
        <Link activeClass="activeClass" to="Navbar" spy={true} smooth={true}>
          Home
        </Link>
      </li>
      <li className="rotateY cursor-pointer">
        <Link to="services" spy={true} smooth={true}>
          Serivces
        </Link>
      </li>
      <li className="rotateY cursor-pointer">
        <Link to="experience" spy={true} smooth={true}>
          Experience
        </Link>
      </li>
      <li className="rotateY cursor-pointer">Protfolio</li>
      <li className="rotateY cursor-pointer">Testimonial</li>
    </ul>
  );
};

export default NavList;
