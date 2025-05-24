// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Project';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Header />
      <About />
      {/* <Projects/>  */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
