"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { studentReviews } from '@/constants/constants';
import StudentReview from './StudentReview';

const StudentReviewCarousel: React.FC = () => {
  const [reviews, setReviews] = useState<typeof studentReviews>([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Function to update the slidesPerView based on window width
  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 1390) {
      setSlidesPerView(1);
    } else if (width > 1390 && width <= 2355) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    setReviews(studentReviews);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (reviews.length === 0) return <div>Loading reviews...</div>;

  return (
    <Carousel
      data={reviews}
      slidesPerView={slidesPerView}
      renderSlide={(review) => (
        <StudentReview
          key={review.title}
          image={review.image}
          title={review.title}
          subtitle={review.subtitle}
          description={review.description}
        />
      )}
    />
  );
};

export default StudentReviewCarousel;
