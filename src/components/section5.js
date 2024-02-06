import React from "react";
import img from "../images/education-img.jpg";
const Section5 = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 text-white">
      <div className="w-full md:w-1/2 pt-10 pl-4 pr-1 bg-yellow-600 flex-1">
        <h1 className="md:text-2xl font-normal mb-3">My Education</h1>
        <p cl>Lorem ipsum dolor sit amet.</p>
        <h1 className="md:text-xl font-medium mt-6">
          Master in Design{" "}
          <span className="text-base text-black">2012 Jan - 2014 May</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          explicabo.
        </p>
        <h1 className="md:text-xl font-medium mt-6">
          Bachelor of Arts{" "}
          <span className="text-base text-black">2008 May - 2011 Dec</span>
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          explicabo.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full"
          style={{ maxHeight: "350px" }}
        />
      </div>
    </div>
  );
};

export default Section5;
