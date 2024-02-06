// import React from "react";
// import img2 from "../images/about-img.jpg";
// import { ProgressBar } from "react-bootstrap";
// // Import the Bootstrap CSS file in your index.js or App.js file
// import "bootstrap/dist/css/bootstrap.min.css";

// const Section2 = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center mx-4 ">
//       <div className="w-full md:w-2/4 md:mr-4 space-y-5 pl-4 ">
//         <h1 className="text-3xl font-base">Donec Autor</h1>
//         <span>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
//           recusandae?
//         </span>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
//           quod! Consequatur hic earum sequi tempore animi error repudiandae
//           voluptates nihil fuga, nulla laudantium odit esse consequuntur
//           asperiores adipisci? Quibusdam illum quia minima accusamus earum,
//           labore consectetur a dolore autem veniam iste error voluptatem ullam
//           repellat, fugit laboriosam sunt itaque explicabo?
//         </p>
//       </div>
//       <div className="w-full md:w-2/4 bg-yellow-600">
//         <div className="flex flex-col md:flex-row items-center">
//           <img
//             src={img2}
//             alt=""
//             className="w-full md:w-2/4"
//             style={{ minHeight: "350px" }}
//           />
//           <div className="md:ml-5 md:my-0 md:mr-2">
//             <h1 className="text-2xl font-semibold text-white">My Skills</h1>
//             <p className="text-white">
//               HTML, CSS, JavaScript, React JS, Bootstrap, Tailwind CSS
//             </p>
//             <div className="flex justify-between">
//               <p className="text-black font-medium">Frontend Design</p>
//               <p className="text-white font-medium">90%</p>
//             </div>
//             <ProgressBar
//               variant="dark"
//               now={90}
//               className="mb-2"
//               style={{ height: "10px" }}
//             />
//             <div className="flex justify-between">
//               <p className="text-black font-medium">Backend Design</p>
//               <p className="text-white font-medium">70%</p>
//             </div>
//             <ProgressBar
//               variant="dark"
//               now={70}
//               className="mb-2"
//               style={{ height: "10px" }}
//             />
//             <div className="flex justify-between">
//               <p className="text-black font-medium">HTML & CSS</p>
//               <p className="text-white font-medium">80%</p>
//             </div>
//             <ProgressBar
//               variant="dark"
//               now={80}
//               className="mb-2"
//               style={{ height: "10px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section2;

import React from "react";
import img2 from "../images/about-img.jpg";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-4 ">
      <div className="w-full md:w-2/4 md:mr-4 space-y-5 pl-4 ">
        <h1 className="text-3xl font-base">Donec Autor</h1>
        <span className="text-yellow-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          quod! Consequatur hic earum sequi tempore animi error repudiandae
          voluptates nihil fuga, nulla laudantium odit esse consequuntur
          asperiores adipisci? Quibusdam illum quia minima accusamus earum,
          labore consectetur a dolore autem veniam iste error voluptatem ullam
          repellat, fugit laboriosam sunt itaque explicabo?
        </p>
      </div>
      <div className="w-full md:w-2/4 bg-yellow-600">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={img2}
            alt=""
            className="w-full md:w-2/4"
            style={{ minHeight: "350px" }}
          />
          <div className="md:ml-5 md:my-0 md:mr-2 px-4 md:px-0">
            <h1 className="text-2xl font-semibold text-white">My Skills</h1>
            <p className="text-white">
              HTML, CSS, JavaScript, React JS, Tailwind CSS
            </p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-black font-medium">Frontend Design</p>
              <p className="text-white font-medium">90%</p>
            </div>
            <div className="bg-white h-2 rounded mb-2">
              <div
                className="bg-black h-full rounded"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-black font-medium">Backend Design</p>
              <p className="text-white font-medium">70%</p>
            </div>
            <div className="bg-white h-2 rounded mb-2">
              <div
                className="bg-black h-full rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-black font-medium">HTML & CSS</p>
              <p className="text-white font-medium">80%</p>
            </div>
            <div className="bg-white h-2 rounded mb-2">
              <div
                className="bg-black h-full rounded"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
