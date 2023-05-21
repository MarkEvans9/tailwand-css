import React from "react";
import laptop from "../assets/images/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full h-screen bg-white py-2  px-4">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-2 md:pt-20 ">
        <img
          src={laptop}
          alt="laptop showin analytics"
          className="w-[350px] md:w-[500px] mx-auto my-4 "
        />
        <div className="flex flex-col justify-center md: py-10">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl py-2 md:py-4">
            Manage Data Analytics
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            libero maxime similique in iusto maiores, ad, voluptatibus numquam
            reiciendis sed voluptas autem corporis, distinctio eum! Facilis sit
            perferendis architecto, totam, natus dolor dolore, quis ipsam
            deleniti vitae error odit possimus nihi.
          </p>
          <button className="text-[#00df9a] w-[200px] font-medium rounded-md py-3 text-center mt-6 mx-auto md:mx-0 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
