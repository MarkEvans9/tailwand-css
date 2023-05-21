import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto mt-[-80px] w-full h-screen flex flex-col justify-center  text-center">
        <p className="text-[#00df9a] font-bold p-2 mt-20 md:text-xl">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 ">
          GROW WITH DATA
        </h1>
        <div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4  ">
            Fast, flexiable and financing for{" "}
            <Typed
              strings={["BTB", " SAAS", "D2C", "BTB"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="text-gray-500 mt-5 text-xl md:text-2xl p-2 md:pl-4 mb-4">
          Montitor your data analytics to increase revenue for BTB, BTC, & SAAS
          platforms.
        </p>

        <button className="bg-[#00df9a] w-[200px] font-medium rounded-md py-3 text-center mt-6 mx-auto text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
