import React from 'react';
import Cards from './Cards';
import Interest from './Interest';
import Activities from './Activities';

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-800 text-center">
      {/* Heading for "What I'm Doing?" */}
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
          What I'm Doing?
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </h2>

      {/* Cards Section */}
      <div className="mt-6 px-4 sm:px-8 md:px-16 lg:px-24">
        <Cards />
      </div>

      

      {/* Education Cards Section */}
      <section id="education">
        {/* Heading for "Education" */}
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Education
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </h2>
        
        <div className="mt-6 px-4 sm:px-8 md:px-16 lg:px-24 ">
        <div className="flex flex-col md:flex-row justify-center gap-6 ">
         
          {/* Card 1 */}
          <div className="rounded-2xl p-6 w-full md:w-72  bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800  border border-white">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-20 w-20 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
              </svg>
            </div>

            <h3 className="text-xl font-semibold">B.Tech in Information Technology</h3>
            <p className="mt-2">Vishwakarma Institute of Information Technology Pune (VIIT)</p>
            <p className="text-yellow-400 text-sm mt-1">2024 - 2027</p>
          </div>

          {/* Card 2 */}
           <div className="rounded-2xl p-6 w-full md:w-72 bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800  border border-white">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
              </svg>
            </div>

           <h3 className="text-xl font-semibold ">Diploma in Computer Technology</h3>
            <p className=" mt-2">K. K. Wagh Polytechnic Nashik</p>
            <p className="text-yellow-400 text-sm mt-1">2021 - 2024</p>
          </div>

          {/* Card 3 */}
           <div className="rounded-2xl p-6 w-full md:w-72 bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800  border border-white">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c.465.165.904.385 1.308.653l.416-1.247a1 1 0 0 1 1.748-.284l.77 1.027a1 1 0 0 1 .15.917l-.803 2.407C13.854 6.49 14 7.229 14 8v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8c0-.771.146-1.509.41-2.186l-.802-2.407a1 1 0 0 1 .15-.917l.77-1.027a1 1 0 0 1 1.748.284l.416 1.247A6 6 0 0 1 6 2.34ZM7 2v.083a6 6 0 0 1 2 0V2a1 1 0 1 0-2 0m5.941 2.595.502-1.505-.77-1.027-.532 1.595q.447.427.8.937M3.86 3.658l-.532-1.595-.77 1.027.502 1.505q.352-.51.8-.937M8 3a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7A1.5 1.5 0 0 0 13 13.5V8a5 5 0 0 0-5-5" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold ">High School</h3>
            <p className=" mt-2">Ashokdada Sable High School Mangoan Raigad</p>
            <p className="text-yellow-400 text-sm  mt-1">2018 - 2021</p>
          </div>
        </div>
      </div>
      </section>

    {/* Heading for "Experience" */}
      <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-5">
          Experience
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </h2>
      <div className="mt-6 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Experience Card 1 */}
          <div className="rounded-2xl p-6 w-full md:w-72 bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800 border border-white">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-20 w-20 text-yellow-400 ms-7" 
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
            <p className="mt-2">Worked on frontend and backend integration for responsive web applications.</p>
            <p className="text-yellow-400 text-sm mt-1">June 2023 - AUgust 2023</p>
          </div>
        </div>
      </div>

      {/* Heading for "Activities & Interest" */}
      <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-5">
          Activities & Interest
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </h2>

      {/* Grid Layout for Interest and Activities */}
      <div className="mt-6 px-4 sm:px-8 md:px-16 lg:px-24 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* <Activities /> */}
        <Interest />
      </div>
    </section>
  );
};

export default About;
