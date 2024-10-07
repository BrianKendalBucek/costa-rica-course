import React from "react";
import Image from "next/image";
import styles from './CoursesCard.module.scss';

const CoursesCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CoursesCard;
