// StudentReview.tsx
import React from 'react';
import styles from './StudentReview.module.scss';
import Image from 'next/image';

interface StudentReviewProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const StudentReview: React.FC<StudentReviewProps> = ({ image, title, subtitle, description }) => {
  return (
    <div className={styles.studentReviews}>
      <p>&quot;{description}&quot;</p>
      <div className={styles.studentData}>
        <Image src={image} alt={title} width={43} height={43} priority />
        <div className={styles.studentInfo}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
