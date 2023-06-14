import React from "react";

const Sidebar = () => {
  return (
    <ul className="text-shadow-2 my-20 flex font-serif flex-col items-center  gap-4">
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        Home
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        Serivces
      </li>
      <li className="rotateY hover:text-orange-400 hover:py-1 hover:px-4 hover:rounded-full">
        Experience
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
