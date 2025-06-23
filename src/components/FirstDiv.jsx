import React from 'react';
import ashwiniImage from '../images/ashwini.jpg';
import { FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const FirstDiv = () => {
  return (
    <div className="bg-gray-900 w-[330px] h-auto rounded-3xl mx-[80px] mt-[80px] shadow-lg p-6 border border-gray-600">

    <div className="h-[150px] w-[150px] rounded-full bg-gray-500 bg-cover border-2 bg-center mx-auto"
         style={{ backgroundImage: `url(${ashwiniImage})` }}>
    </div>

      <div className="text-white py-2 rounded-md mb-6">
        <h1 className="text-xl font-semibold text-center">ASHWINI SALUNKE</h1>
      </div>

      <div className="grid grid-cols-[50px_1fr] gap-4 items-center mb-4 bg-gray-800 p-3 rounded-lg">
        <div className="flex justify-center items-center">
          <FaEnvelope className="text-yellow-400 text-2xl" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-400">EMAIL</h2>
          <p className="text-white text-sm">ashwinisalunke205@gmail.com</p>
        </div>
      </div>

      <div className="grid grid-cols-[50px_1fr] gap-4 items-center mb-4 bg-gray-800 p-3 rounded-lg">
        <div className="bg-gray-800 p-3 rounded-lg shadow-md">
            <FaCalendarAlt className="text-yellow-400 text-xl" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-400">Tech Goal</h2>
          <p className="text-white text-sm">Exploring Computer Networking</p>
        </div>
      </div>

      <div className="grid grid-cols-[50px_1fr] gap-4 items-center mb-4 bg-gray-800 p-3 rounded-lg">
        <div className="bg-gray-800 p-3 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-gray-400">LOCATION</h2>
          <p className="text-white text-sm">PUNE, MAHARASHTRA</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://www.linkedin.com/in/ashwini-salunke-8b0704320/" className="text-gray-400 hover:text-white text-lg">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/AshwiniScripter" className="text-gray-400 hover:text-white text-lg">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-lg">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default FirstDiv;
