/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import "./LandingPage.css"
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds before hiding the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 15,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "triangle",
        options: {
          sides: 5,
        },
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 600,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: ["grab"],
        },
        onclick: {
          enable: false,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    background: {
      image: "url('images/truck.jpg')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

   const contentVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 2.0 } },
   };

  return (
    <div className="App">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-mattBlack">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          <motion.div
            className="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Navbar />
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={options}
            />
            <Hero />
            {/* Here added line breaks to test fixed navbar on scroll */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
