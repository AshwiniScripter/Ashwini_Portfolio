import React, { useState } from 'react';
import Cards from './Cards';
import Interest from './interest';

const SecondDiv = () => {
  const [activeSection, setActiveSection] = useState('ABOUT ME'); 

  return (
    <div className='bg-gray-900 h-auto rounded-xl mt-[80px] shadow-lg border border-gray-600 mb-[50px]'>

      <nav className='flex py-5 px-10 items-center justify-between bg-gray-900 rounded-xl text-white'>
        <h1 className='font-semibold text-xl'>{activeSection}</h1>
        <div className='flex gap-7 items-center font-semibold'>
          <h3
            className={`cursor-pointer ${activeSection === 'ABOUT ME' ? 'text-yellow-400' : ''}`}
            onClick={() => setActiveSection('ABOUT ME')}
          >
            About
          </h3>
          
          <h3
            className={`cursor-pointer ${activeSection === 'RESUME' ? 'text-yellow-400' : ''}`}
            onClick={() => setActiveSection('RESUME')} 
          >
            Resume
          </h3>

          <h3
            className={`cursor-pointer ${activeSection === 'CONTACT ME' ? 'text-yellow-400' : ''}`}
            onClick={() => setActiveSection('CONTACT ME')} 
          >
            Contact
          </h3>
          
        </div>
      </nav>

      <div className='p-10 text-white'>
        {activeSection === 'ABOUT ME' && (
          <div>
            <h2 className='text-2xl font-bold'></h2>
            <p className='mt-4'>
              Hello! I'm Ashwini, a web developer with expertise in front-end and back-end technologies like HTML, CSS, JavaScript, and PHP. I'm passionate about creating impactful web solutions and constantly improving my skills.
              I'm also interested in Cloud Computing, Networking, and enjoy collaborating on secure, scalable, and innovative tech projects.
            </p>
            <h1 className='mt-[30px] text-3xl font-semibold'>What I'm Doing ?</h1>
            <Cards/>
            <Interest/>
          </div>
        )}
        {activeSection === 'RESUME' && (
          <div>
            <h2 className='text-2xl font-bold'>Contact Us</h2>
            <p className='mt-4'>
              HHH
            </p>
          </div>
        )}
        {activeSection === 'CONTACT ME' && (
          <div>
            <h2 className='text-2xl font-bold'>Contact Us</h2>
            <p className='mt-4'>
              Reach out to us at contact@yourwebsite.com or call us at +1234567890.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondDiv;
