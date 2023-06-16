import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <ul className="text-shadow-2 my-20 flex font-serif flex-col items-center  gap-4">
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        <Link activeClass="activeClass" to="Navbar" spy={true} smooth={true}>
          Home
        </Link>
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        <Link to="services" spy={true} smooth={true}>
          Serivces
        </Link>
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        <Link to="experience" spy={true} smooth={true}>
          Experience
        </Link>
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        Protfolio
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        Testimonial
      </li>
    </ul>
  );
};

export default Sidebar;
