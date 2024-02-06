import React from "react";
import img1 from "../images/home-img.jpg";

const Section1 = () => {
  return (
    // <div className="relative">
      <div className="flex items-center bg-orange-50 flex-col-reverse md:flex-row mx-4  pt-10 lg:pt-0" >
        <div className="flex-1">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover"
            style={{ minHeight: "380px" }} // Set a minHeight based on your design
          />
        </div>
        <div className="flex-1 p-4 space-y-4">
          <span className="text-sm text-gray-500">WELCOME TO MY WEBSITE</span>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-light">
            Hello, I am <span className="font-semibold">Stimulus</span> currently based in New York City.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam repellat quaerat libero iusto
            dicta tempora! Aperiam eius repellendus voluptatum vitae nulla rerum maiores dignissimos sunt! Sit,
            fugit iure libero minus culpa, illum voluptatem amet recusandae iste, maiores necessitatibus rem.
          </p>
          <button className="border-2 border-black py-1 px-2 rounded-xl font-semibold max-w-28">
            Get Started
          </button>
        </div>
      </div>
    // </div>
  );
};

export default Section1;
