import React from "react";
import "./hero.css";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="home" className="relative h-4/6 sm:h-3/6 px-8 md:px-12 xl:px-60">
        <h2 className="pt-24">The Truck Lad</h2>
        <h3 className="py-8">
          A one-stop shop for your company
          <br /> including factoring service, dispatch, ELD, and Compliance.
        </h3>
        <button
          onClick={scrollToServices}
          className="text-textWhite px-12 border border-black rounded-full bg-pureBlack h-10 font-normal text-lg mb-8"
        >
          Start Exploring
        </button>
      </div>
    </>
  );
};

export default Hero;
