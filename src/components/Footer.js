import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-20 flex-col text-center">
      Copyright @2024
      <p className="text-yellow-600">Qloron Tehcnology</p>
      <div className="grid place-content-center grid-flow-col gap-4 mt-5">
        <i class="fa-brands fa-facebook fa-lg"></i>
        <i class="fa-brands fa-linkedin fa-lg"></i>
        <i class="fa-brands fa-google fa-lg"></i>
        <i class="fa-brands fa-discord fa-lg"></i>
        <i class="fa-brands fa-instagram fa-lg"></i>
      </div>
    </div>
  );
};

export default Footer;
