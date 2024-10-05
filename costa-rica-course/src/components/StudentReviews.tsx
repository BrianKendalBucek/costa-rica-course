// StudentReviews.tsx
import React from 'react';
import StudentReview from './StudentReview'; // Import the StudentReview component
import { studentReviews } from '@/constants/constants';

const StudentReviews: React.FC = () => {
  return (
    <div>
      {studentReviews.map((review, index) => (
        <StudentReview
          key={index}
          image={review.image}
          title={review.title}
          subtitle={review.subtitle}
          description={review.description}
        />
      ))}
    </div>
  );
};

export default StudentReviews;
