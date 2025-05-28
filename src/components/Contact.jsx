import React from 'react';
import { FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 h-auto rounded-3xl mx-[80px] mt-[80px] shadow-lg p-6 border bg-gray-900 border-gray-600 flex flex-col items-center max-w-[400px]">
          <h1 className="text-2xl font-semibold text-center mb-6">ASHWINI SALUNKE</h1>

          {/* Email Section */}
          <div className="grid grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaEnvelope className="text-yellow-400 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-400">EMAIL</h2>
              <p className="text-white text-lg">ashwinisalunke205@gmail.com</p>
            </div>
          </div>

          {/* Birthday Section */}
          <div className="grid grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaCalendarAlt className="text-yellow-400 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-400">BIRTHDAY</h2>
              <p className="text-white text-lg">29 JUNE 2005</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="grid grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaMapMarkerAlt className="text-yellow-400 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-400">LOCATION</h2>
              <p className="text-white text-lg">PUNE, MAHARASHTRA</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center">
            <p className="text-lg text-white mb-8">
              If you have any questions or would like to get in touch, feel free to send me a message.
            </p>
            <form className="space-y-6 flex flex-col items-center">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-[400px] p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-[400px] p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Enter Your Message"
                  className="w-[400px] p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[400px] py-3 text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-green-100 hover:to-gray-500 rounded-lg transition-all flex items-center justify-center"
                >
                  <span>Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 7l-5 5m0 0l5 5m-5-5h12"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
