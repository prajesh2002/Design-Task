import React from "react";
import img from "../images/contact-img.jpg";

const Section7 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-4 bg-red-500 text-gray-200">
      <div className="w-full md:w-2/4 md:mr-4 space-y-5 pl-4 mx-10">
        <h1 className=" md:text-3xl font-medium mt-10">Say Hello...</h1>
        <form>
          <label className="">
            Name
            <br />
          </label>
          <input
            type="text"
            name="name"
            className="bg-red-500 border-10 outline-none mb-5 w-full"
            style={{ borderBottom: "1px solid white" }}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="name"
            className="bg-red-500 border-10 mb-5 outline-none w-full"
            style={{ borderBottom: "1px solid white" }}
          />
          <br />
          <label>Message:</label>
          <br />
          <input
            type="text"
            name="name"
            className="bg-red-500 border-10 outline-none mt-20 w-full"
            style={{ borderBottom: "1px solid white" }}
          />
          <br />
          <button
            type="submit"
            className=" bg-gray-200 text-black py-1 px-10 mt-10 rounded-xl mb-10"
          >
            Send
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/4 bg-black text-white">
        <div className="flex flex-col md:flex-row ">
          <img
            src={img}
            alt=""
            className="w-full md:w-2/4"
            style={{ minHeight: "475px" }}
          />
          <div className="md:ml-10 my-5 md:my-0 md:mr-2 ml-4">
            <h1 className=" text-2xl mb-2 mt-14 ">Visit my office</h1>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              mollitia.
            </p>
            <h1 className=" text-2xl mb-2">Contact</h1>
            <p>
              <i class="fa-solid fa-phone mr-2"></i> 29283728022
            </p>
            <p className=" text-yellow-500 my-2">
              {" "}
              <i class="fa-solid fa-envelope mr-2"></i> absd@gmail.com
            </p>
            <p className=" text-yellow-500">
              {" "}
              <i class="fa-solid fa-globe mr-2"></i> company.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
