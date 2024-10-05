"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { studentReviews } from '@/constants/constants';
import StudentReview from './StudentReview';

const StudentReviewCarousel: React.FC = () => {
  const [reviews, setReviews] = useState<typeof studentReviews>([]);

  useEffect(() => {
    setReviews(studentReviews);
  }, []);

  if (reviews.length === 0) return <div>Loading reviews...</div>;

  return (
    <Carousel
      data={reviews}
      slidesPerView={3}
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
