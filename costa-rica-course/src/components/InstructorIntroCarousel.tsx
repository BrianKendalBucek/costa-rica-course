"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { instructors } from '@/constants/constants';
import InstructorIntro from './InstructorIntro';

const InstructorIntroCarousel = () => {
  const [intros, setIntros] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Function to update the slidesPerView based on window width
  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      setSlidesPerView(1);
    } else if (width > 600 && width <= 1330) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };
  
  useEffect(() => {
    setIntros(instructors);

    // Set initial value based on the current window width
    handleResize();

    // Listen for resize events and update slidesPerView accordingly
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (intros.length === 0) return <div>Loading intros...</div>;

  return (
    <Carousel
      data={intros}
      slidesPerView={slidesPerView}
      // autoplay={true}
      // autoplay={false}
      renderSlide={(intro) => (
        <InstructorIntro
          key={intro.title}
          image={intro.image}
          title={intro.title}
          name={intro.name}
          alt={intro.alt}
          description={intro.description}
          socials={intro.socials}
        />
      )}
    />
  );
};

export default InstructorIntroCarousel;
