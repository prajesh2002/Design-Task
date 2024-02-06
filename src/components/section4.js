import React from "react";
import img from "../images/experience-img.jpg";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 text-white">
      <div className="w-full md:w-1/2 flex">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full"
          style={{ maxHeight: "350px" }}
        />
      </div>
      <div className="w-full md:w-1/2 pt-10 pl-4 pr-1 bg-red-500 flex-1">
        <h1 className="md:text-2xl font-normal mb-3">My Experiences</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h1 className="md:text-xl font-medium mt-5 ">
          Graphics Designer{" "}
          <span className="text-base text-black">2014 Jul-2015 Sep</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          explicabo.
        </p>
        <h1 className="md:text-xl font-medium mt-5">
          Web Designer{" "}
          <span className="text-base text-black">2015 Oct-2017 Jan</span>
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          explicabo.
        </p>
      </div>
    </div>
  );
};

export default Section4;
