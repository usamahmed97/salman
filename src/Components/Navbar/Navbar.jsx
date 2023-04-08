import React from "react";
import logo from "../../shared/assests/logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-mattBlack border-b border-white">
      <nav className="h-16 flex justify-between bg-whiteColor items-center px-8 md:px-12 xl:px-60">
        <div>
          <img className="w-12" src={logo} alt="truck_lad" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="px-3 cursor-pointer text-white border border-white rounded-full">
              Home
            </li>
            <li className="px-3 cursor-pointer text-white">About us</li>
            <li className="px-3 cursor-pointer text-white">Services</li>
            <li className="px-3 cursor-pointer text-white">Contact</li>
          </ul>
          <button className="text-white px-5 bg-lightOrangeColor h-10 border border-white rounded-full">
            <li className="px-3">Get started</li>
          </button>
        </div>
      </nav>
      <hr className="border-black"></hr>
    </div>
  );
};

export default Navbar;
