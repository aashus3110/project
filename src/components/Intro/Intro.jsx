import React, { useRef } from "react";
// import IntroSideIcon from "../IntroSideIcon/IntroSideIcon";
import Typewriter from "typewriter-effect";
import IntroSidePng from "../IntroSidePng/IntroSidePng";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Email from "../Email/Email";

const Intro = () => {
  const toogalSid = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    }
  };
  const ref = useRef();
  return (
    <div className="md:flex mt-10">
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
        <button
          onClick={toogalSid}
          className="md:relative -top-11 mx-auto shadow-lg md:shadow-none shadow-orange-400 box-border font-semibold font-serif text-shadow-2 text-white rounded-full cursor-pointer hover:border-2 hover:border-orange-300 hover:bg-white hover:text-orange-400 bg-orange-400  px-4 py-2 hover:px-[0.9rem] hover:py-[0.4rem]"
        >
          Hire Me
        </button>
        <div
          ref={ref}
          className="hidden h-80 w-72 mx-auto bg-white shadow-2xl absolute md:top-28 md:right-72 md:h-96 md:w-96 "
        >
          <div className=" h-full">
            <Email />
          </div>
          <span onClick={toogalSid}>
            <AiOutlineCloseCircle className="absolute text-lg top-6 right-6" />
          </span>
        </div>
      </div>
      {/* <IntroSideIcon /> */}
      <IntroSidePng />
    </div>
  );
};

export default Intro;
