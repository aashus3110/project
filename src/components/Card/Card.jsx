import React from "react";

const Card = ({ heading, detail }) => {
  return (
    <>
      <div class="container mt-12">
        <div class="card">
          <div className="md:block blur-3xl opacity-50 left-8 absolute bg-purple-400 md:h-40 md:w-40 h-32 w-32"></div>
          <div class="image border-4 border-orange-300 rounded-2xl">
            <span className="text-3xl font-bold font-serif text-shadow-2">
              {heading}
            </span>
          </div>
          <div class="content font-medium text-xs font-serif">
            <span className="p-shadow-2 m-4 text-gray-500 ">{detail}</span>
            <button className="text-blue-400 my-6 text-xl p-2 shadow-lg shadow-orange-300 bg-white rounded-lg  ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
