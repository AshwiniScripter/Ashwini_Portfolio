import React, { useState } from "react";
import { FaEnvelope, FaCalendarAlt, FaMapMarkerAlt,FaBullseye  } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !msg) {
      alert("Please fill all the fields");
      return;
    }

    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "ef21ebc7-b74a-4ea6-88c6-e1fb500d79f8");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        setResult("Failed to send: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while sending your message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 h-auto rounded-3xl md:mx-[80px] mt-[40px] md:mt-[80px] shadow-lg p-6 border bg-gray-900 border-gray-600 flex flex-col items-center max-w-full sm:max-w-[400px]">
          <h1 className="text-2xl font-semibold text-center mb-6">ASHWINI SALUNKE</h1>
          <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaEnvelope className="text-yellow-400 text-2xl sm:text-3xl" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-400">EMAIL</h2>
              <p className="text-white text-base sm:text-lg break-words">ashwinisalunke205@gmail.com</p>
            </div>
          </div>
          <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaBullseye  className="text-yellow-400 text-2xl sm:text-3xl" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-400">Tech Goal</h2>
              <p className="text-white text-base sm:text-lg">Exploring Computer Networks and Cyber security</p>
            </div>
          </div>
          <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-center items-center">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl sm:text-3xl" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-400">LOCATION</h2>
              <p className="text-white text-base sm:text-lg">PUNE, MAHARASHTRA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center w-full max-w-full sm:max-w-[500px]">
            <p className="text-base sm:text-lg text-white mb-8">
              If you have any questions or would like to get in touch, feel free to send me a message.
            </p>

            {result && (
              <p className="text-green-400 font-semibold text-center mb-4">{result}</p>
            )}

            <form onSubmit={onSubmit} className="space-y-6 flex flex-col items-center w-full">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Enter Your Message"
                  className="w-full p-4 text-black rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                  rows="5"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-green-100 hover:to-gray-500 rounded-lg transition-all flex items-center justify-center"
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
