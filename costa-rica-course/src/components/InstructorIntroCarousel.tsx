"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { instructors } from '@/constants/constants';
import InstructorIntro from './InstructorIntro';

const InstructorIntroCarousel = () => {
  const [intros, setIntros] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3); // Set default to 3
  const [centeredSlides, setCenteredSlides] = useState(false);

  // Function to update the slidesPerView based on window width
  const handleResize = () => {
    if (window.innerWidth <= 1386) {
      setSlidesPerView(1); // Show 1 slide for smaller screens
      setCenteredSlides(false); // Disable centeredSlides for small screens
    } else {
      setSlidesPerView(3); // Show 3 slides for larger screens
      setCenteredSlides(true); // Enable centeredSlides for larger screens
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
      slidesPerView={Math.min(3, intros.length)}
      // autoplay={true}
      // autoplay={false}
      // centeredSlides={centeredSlides}
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
