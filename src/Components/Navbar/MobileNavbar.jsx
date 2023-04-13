import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React from "react";
import "./navbar.css";

const MobileNavbar = ({ open, onClose, pageName }) => {
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
    <Drawer
      bodyStyle={{ backgroundColor: "#151A24" }}
      headerStyle={{ backgroundColor: "#151A24" }}
      closeIcon={<ArrowLeftOutlined className="text-white" />}
      title={
        <div className="font-extrabold text-2xl text-white">{pageName}</div>
      }
      placement="left"
      width={200}
      onClose={onClose}
      open={open}
    >
      <div>
        <Button
          className="no-underline text-white border-none text-lg font-medium antialiased mb-2 "
          onClick={scrollToHome}
        >
          Home
        </Button>
        <Button
          className="no-underline text-white border-none text-lg font-medium antialiased mb-2"
          onClick={scrollToServices}
        >
          Services
        </Button>
        <Button
          className="no-underline text-white border-none text-lg font-medium antialiased mb-2"
          onClick={scrollToAboutUs}
        >
          About us
        </Button>
        <Button
          className="no-underline text-white border-none text-lg font-medium antialiased"
          onClick={scrollToContact}
        >
          Contact
        </Button>
      </div>
    </Drawer>
  );
};

export default MobileNavbar;
