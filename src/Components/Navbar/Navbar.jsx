import React, { useState } from "react";
import logo from "../../shared/assests/logo4.svg";
import { Button } from "antd";
import "./navbar.css";
import MobileNavbar from "./MobileNavbar";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pageName = "Truck Lad";
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutUs = () => {
    const servicesSection = document.getElementById("aboutus");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    const servicesSection = document.getElementById("home");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const servicesSection = document.getElementById("contact");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50 bg-mattBlack border-b border-white">
      <nav className="h-16 flex justify-between bg-whiteColor items-center px-8 md:px-12 xl:px-60">
        <div>
          <img className="w-24" src={logo} alt="truck_lad" />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex" id="customize_button">
            <Button
              className="text-white border-none px-3 text-base"
              onClick={scrollToServices}
            >
              Services
            </Button>
            <Button
              className="text-white border-none px-3 text-base"
              onClick={scrollToAboutUs}
            >
              About us
            </Button>
            <Button
              className="text-white border-none px-3 text-base"
              onClick={scrollToContact}
            >
              Contact
            </Button>
            <button
              onClick={scrollToHome}
              className="text-white px-5 bg-lightOrangeColor h-10 border border-white rounded-full"
            >
              <li className="px-3">Get started</li>
            </button>
          </div>

          {/* Mobile sidebar */}
          <div className="flex md:hidden">
            <MobileNavbar open={open} onClose={onClose} pageName={pageName} />
          </div>
          <button
            onClick={showDrawer}
            className="md:hidden text-2xl border-none text-white "
          >
            <MenuOutlined />
          </button>
        </div>
      </nav>
      <hr className="border-black"></hr>
    </div>
  );
};

export default Navbar;
