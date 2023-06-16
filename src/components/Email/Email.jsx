import React from "react";

const Email = () => {
  return (
    <div className="h-full flex flex-col justify-evenly mx-auto w-64">
      <form action="">
        <div className="">
          <input
            className="border-b border-x rounded-md outline-none shadow-md border-black p-4 my-2 w-full h-8"
            type="text"
            name=""
            id=""
            placeholder="Enter your full Name"
          />
        </div>
        <div className="">
          <input
            className="border-b border-x rounded-md outline-none shadow-md border-black p-4 my-2 w-full h-8"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
        </div>
        <div className="">
          <textarea
            className="border-b border-x rounded-md outline-none shadow-md border-black p-4 my-2 w-full"
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Email;
