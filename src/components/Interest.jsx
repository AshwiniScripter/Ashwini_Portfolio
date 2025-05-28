import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ashwiniTravel from '../images/travel.jpeg';
import ashwiniBook from '../images/book.jpeg';
// import ashwiniMusic from '../images/music.jpeg';
import ashwiniWriting from '../images/writing.jpeg';
// import ashwiniCamera from '../images/camera1.jpeg';
import ashwiniCode from '../images/coding.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Interest = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.interest-item');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const interests = [
    { image: ashwiniTravel, label: 'Traveling' },
    { image: ashwiniBook, label: 'Reading' },
    { image: ashwiniWriting, label: 'Writing' },
    { image: ashwiniCode, label: 'Coding' },
  ];

  const circleSize = 150;
  const gap = 230;

  return (
    <>
      {/* Responsive CSS for mobile stacking */}
      <section id="interest">
        <style>{`
          @media (max-width: 640px) {
            .interest-container {
              position: static !important;
              width: 100% !important;
              height: auto !important;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .interest-container .interest-item {
              position: relative !important;
              left: auto !important;
              top: auto !important;
              margin-bottom: 40px;
              z-index: auto !important;
            }
          }
        `}</style>

        <div
          ref={containerRef}
          className="interest-container relative h-[200px] mx-auto"
          style={{
            width: circleSize + gap * (interests.length - 1),
            position: 'relative',
          }}
        >
          {interests.map((item, index) => (
            <div
              key={index}
              className="interest-item flex flex-col items-center absolute"
              style={{
                top: 0,
                left: index * gap,
                zIndex: interests.length - index,
              }}
            >
              <div
                className="h-[150px] w-[150px] rounded-full bg-cover border-2 bg-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="mt-2 text-white font-semibold text-lg text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interest;
