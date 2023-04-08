import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative h-4/6 sm:h-3/6 px-8 md:px-12 xl:px-60 flex justify-between bg-white">
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium">About Us</p>
          <ul>
            <li className="mb-2 cursor-pointer">Quality</li>
            <li className="mb-2 cursor-pointer">Safety</li>
            <li className="mb-2 cursor-pointer">Environment care</li>
            <li className="mb-2 cursor-pointer">Quality</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium">Services</p>
          <ul>
            <li className="mb-2 cursor-pointer">New trucks</li>
            <li className="mb-2 cursor-pointer">Use trucks</li>
            <li className="mb-2 cursor-pointer">Our services</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium">Follow Truck Lad</p>
          <ul>
            <li className="mb-2 cursor-pointer">Facebook</li>
            <li className="mb-2 cursor-pointer">Instagram</li>
            <li className="mb-2 cursor-pointer">Twitter</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium">Contact & Locations</p>
          <ul>
            <li className="mb-2 cursor-pointer">Find our store</li>
            <li className="mb-2 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
