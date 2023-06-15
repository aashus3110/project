import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { CgDesignmodo } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiPawFront } from "react-icons/gi";

const Services = () => {
  return (
    <div className="services md:flex md:mt-8">
      <div className="mt-4 flex flex-col md:w-[50%]">
        <span className="text-4xl ml-8 font-serif font-bold text-shadow-2">
          My Awesome
        </span>
        <span className="text-4xl ml-8 font-serif font-bold text-shadow-2">
          services
        </span>
        <span className="ml-16 p-shadow-2 text-xs text-justify font-medium m-4 text-gray-500 font-serif ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          eaque excepturi <br /> aut placeat?Natus ad ut ex nam molestiae
          veritatis!
        </span>
        <a
          className="m-auto font-semibold font-serif text-shadow-2 text-white rounded-full shadow-xl cursor-pointer md:mt-24 shadow-orange-300 hover:bg-white hover:border-2 hover:border-orange-300 hover:text-orange-400 bg-orange-400  px-4 py-2"
          href={Resume}
          download
        >
          <button className="rotateY">Download CV</button>
        </a>
      </div>

      {/*right side*/}
      <div className="cards mt-4 flex flex-col md:block h-96  ">
        {/*1ST*/}
        <div className="md:relative -top-12 -left-20">
          <Card
            emoji={<CgDesignmodo />}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd "}
          />
        </div>
        {/*2ed*/}
        <div className="md:relative -top-64 left-72">
          <Card
            emoji={<MdOutlineDeveloperMode />}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React,Html, Css, JavaScript, React"}
          />
        </div>
        {/*3ed*/}
        <div className="md:relative -top-60 left-40">
          <Card
            emoji={<GiPawFront />}
            heading={"UI/UX"}
            detail={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
