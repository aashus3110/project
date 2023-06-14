import React from "react";
import { RiAngularjsLine, RiReactjsFill } from "react-icons/ri";
import { TbBrandDjango, TbBrandJavascript } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io";
import { FaJava } from "react-icons/fa";

const IntroSideIcon = () => {
  return (
    <div className=" flex flex-col md:w-[50%] md:h-[400px] h-[300px]  md:p-20 p-8 ">
      <div className="absolute top-96 left-8 md:top-28 md:left-[50rem] text-2xl text-shadow-2 font-bold font-serif ">
        My Skill's
      </div>
      <div className="flex flex-col md:flex-row md:my-12 mt-12 mb-4 justify-evenly">
        <div className="flex my-4 justify-around">
          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <RiAngularjsLine className="text-4xl " />
          </div>

          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <RiReactjsFill className="text-4xl " />
          </div>

          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <TbBrandDjango className="text-4xl " />
          </div>
        </div>
        <div className="flex my-4 justify-around">
          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <IoLogoPython className="text-4xl " />
          </div>

          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <TbBrandJavascript className="text-4xl " />
          </div>

          <div className="border-2 rounded-full bg-white shadow-orange-300 shadow-2xl p-2">
            <FaJava className="text-4xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSideIcon;
