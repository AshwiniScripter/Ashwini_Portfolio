import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import backImage from '../images/world.jpg';
import ashwiniImage from '../images/ashwini.jpg';

const Header = () => {
  useEffect(() => {
    // GSAP animation for background image movement
    gsap.to(".bg-cover", {
      backgroundPosition: "center 100%",
      repeat: -1,
      yoyo: true,
      duration: 10,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <header className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backImage})` }}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center h-full bg-black bg-opacity-50 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-white text-center mt-[80px] lg:items-center lg:justify-center lg:text-center lg:mt-0">
          {/* Profile Image */}
          <img
            src={ashwiniImage}
            alt="Ashwini"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mb-6 border-4 border-white"
          />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Hello, I'm Ashwini
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            A passionate Web Developer | Networking | Cloud Enthusiast
          </p>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-justify px-2 sm:px-4 md:px-8 lg:px-12">
            As a web developer with a strong foundation in both front-end and back-end technologies, I specialize in React, HTML, CSS, JavaScript, and tailwind. My passion lies in crafting impactful web solutions while continuously enhancing my skills. Beyond web development, I’m deeply interested in Networking and Cloud Computing, and I thrive on collaborating to create secure, scalable, and innovative tech projects.
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center justify-center">
          {/* Add projects or other content here */}
          {/* <p className="text-white text-xl">Projects and more coming soon!</p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
