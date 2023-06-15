import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience relative md:top-28 top-72">
      <div className="achievement">
        <div className="circle">2+</div>
        <span className="text-base font-medium p-shadow-2">Work</span>
        <span className="text-orange-400 p-shadow-2  font-medium text-xl">
          Experience
        </span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span className="text-base font-medium p-shadow-2">Projects</span>
        <span className="text-orange-400 p-shadow-2 font-medium text-xl">
        Experience
        </span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span className="text-base font-medium p-shadow-2">Functional</span>
        <span className="text-orange-400 p-shadow-2 font-medium text-xl">
          Work
        </span>
      </div>
    </div>
  );
}

export default Experience;
