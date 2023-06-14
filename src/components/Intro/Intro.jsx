import React from "react";
import IntroSideIcon from "../IntroSideIcon/IntroSideIcon";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="md:flex">
      <div className="md:w-[50%] md:h-[400px] h-[300px] flex flex-col justify-between md:p-20 p-8">
        <span className="text-3xl font-bold font-serif text-shadow-2">
          Hy! I Am
        </span>
        <span className="text-3xl font-bold font-serif text-shadow-2">
          Aashutosh Singh
        </span>
        <span className="text-shadow-2 md:ml-24 md:mb-11 md:text-4xl text-3xl text-justify font-medium m-4 text-slate-600 font-serif ">
          <Typewriter
            options={{
              strings: ["Web Developer", "UI UX Designer", "React Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
        </span>
        <div className="mx-auto hidden md:block relative top h-40 w-40 bg-orange-300 blur-md"></div>
        <button className="rotateY md:relative -top-11 mx-auto shadow-lg md:shadow-none shadow-orange-400 box-border font-semibold font-serif text-shadow-2 text-white rounded-full cursor-pointer hover:border-2 hover:border-orange-300 hover:bg-white hover:text-orange-400 bg-orange-400  px-4 py-2 hover:px-[0.9rem] hover:py-[0.4rem]">
          Hire Me
        </button>
      </div>
      <IntroSideIcon />
    </div>
  );
};

export default Intro;
