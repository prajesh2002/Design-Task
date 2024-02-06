import React from "react";
import img from "../images/quotes-bg.jpg";

const Section6 = () => {
  return (
    <div className="mx-4 relative">
      <img src={img} alt="" className="w-full h-64 md:h-96 object-cover" />
      <div className="bg-black bg-opacity-50 p-4 md:p-8 lg:p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <i className="fa-solid fa-star fa-2xl text-white mb-5"></i>
        <h1 className="text-white text-sm md:text-xl lg:text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti
          iusto ratione quis! Cupiditate alias odit commodi sed! ad obcaecati
          soluta deleniti alias{" "}
        </h1>
        <p className="text-gray-300 mt-5 text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam
          optio. Assumenda eveniet est maiores
        </p>
      </div>
    </div>
  );
};

export default Section6;
