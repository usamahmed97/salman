import React from "react";
import logo from "../../shared/assests/logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 ">
      <nav className="h-16 flex justify-between bg-whiteColor items-center px-8 md:px-12 xl:px-60">
        <div>
          <img className="w-12" src={logo} alt="truck_lad" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="px-3 cursor-pointer">Home</li>
            <li className="px-3 cursor-pointer">About us</li>
            <li className="px-3 cursor-pointer">Services</li>
            <li className="px-3 cursor-pointer">Contact</li>
          </ul>
          <button className="text-textWhite px-5 rounded-full bg-lightOrangeColor h-10">
            <li className="px-3">Get started</li>
          </button>
        </div>
      </nav>
      <hr className="border-black"></hr>
    </div>
  );
};

export default Navbar;
