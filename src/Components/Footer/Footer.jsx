import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative h-4/6 sm:h-3/6 px-8 md:px-12 xl:px-60 flex justify-between bg-mattBlack border-t border-white">
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium text-white">About Us</p>
          <ul>
            <li className="mb-2 cursor-pointer text-white">Quality</li>
            <li className="mb-2 cursor-pointer text-white">Safety</li>
            <li className="mb-2 cursor-pointer text-white">Environment care</li>
            <li className="mb-2 cursor-pointer text-white">Quality</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium text-white">Services</p>
          <ul>
            <li className="mb-2 cursor-pointer text-white">New trucks</li>
            <li className="mb-2 cursor-pointer text-white">Use trucks</li>
            <li className="mb-2 cursor-pointer text-white">Our services</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium text-white">Follow Truck Lad</p>
          <ul>
            <li className="mb-2 cursor-pointer text-white">Facebook</li>
            <li className="mb-2 cursor-pointer text-white">Instagram</li>
            <li className="mb-2 cursor-pointer text-white">Twitter</li>
          </ul>
        </div>
        <div className="mt-6 mb-6">
          <p className="mb-4 font-medium text-white">Contact & Locations</p>
          <ul>
            <li className="mb-2 cursor-pointer text-white">Find our store</li>
            <li className="mb-2 cursor-pointer text-white">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
