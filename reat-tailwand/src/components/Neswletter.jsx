import React from "react";

const Neswletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div
        className="max-w-[1240px] mx-auto grid lg:grid-cols-3
       "
      >
        <div className=" lg:col-span-2 my-4">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to data</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="text-black px-2 py-3 flex w-full rounded-md"
            />
            <button className="text-black w-[200px] font-medium rounded-md py-3 text-center ml-4 my-6 bg-[#00df9a]">
              Get Started
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neswletter;
