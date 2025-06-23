// Skills.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const containerRef = useRef(null);

  const skills = [
    {
      category: "Programming Languages",
      items: ["HTML","React", "CSS", "JavaScript", "Java", "PHP"],
    },
    {
      category: "Frameworks & Libraries",
      items: [ "Tailwind CSS", "GSAP", "Bootstrap"],
    },
    {
      category: "Database & Backend",
      items: ["MySQL"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Visual Studio Code", "Canva"],
    },
    {
      category: "Others",
      items: ["Data Structures & Algorithms", "Networking Basics"],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    // GSAP infinite horizontal scrolling
    gsap.fromTo(
      container,
      { x: 0 },
      {
        x: "-50%", // Scroll halfway for a seamless loop
        duration: 20,
        ease: "linear",
        repeat: -1, // Infinite loop
      }
    );
  }, []);

  return (
    <section id="skills" className="py-2 bg-gray-800 overflow-hidden">
      {/* <h2 className="text-3xl font-semibold text-center text-white">Skills</h2> */}
      <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-5">
          Skills
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </h2>
      <div className="mt-8 w-full overflow-hidden relative">
        <div ref={containerRef} className="flex gap-5 w-max">
          {/* Combine original and duplicated items into one array */}
          {skills.concat(skills).map((skillSet, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl shadow-lg p-6 text-white min-w-[300px] border border-gray-300 transition-transform transform hover:scale-90 hover:shadow-2xl hover:bg-gray-950"
            >
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
