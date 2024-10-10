"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { instructors } from '@/constants/constants';
import InstructorIntro from './InstructorIntro';

const InstructorIntroCarousel = () => {
  const [intros, setIntros] = useState([]);

  
  useEffect(() => {
    setIntros(instructors);
  }, []);
  
  if (intros.length === 0) return <div>Loading intros...</div>;

  return (
    <Carousel
      data={intros}
      slidesPerView={Math.min(3, intros.length)}
      // slidesPerView={Math.min(3, intros.length)}
      // autoplay={true}
      autoplay={false}
      renderSlide={(intro) => (
        <InstructorIntro
          key={intro.title}
          src={intro.src}
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
