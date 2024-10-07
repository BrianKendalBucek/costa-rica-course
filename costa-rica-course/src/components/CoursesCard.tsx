import React from "react";
import Image from "next/image";
import styles from "./CoursesCard.module.scss";

const CoursesCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upperSection}>
        <Image src={image} alt={title} width={300} height={200} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.priceAndButton}>
        <div className={styles.priceOldAndNew}>
          <p className={styles.priceOld}>$499</p>
          <p className={styles.priceNew}>$199</p>
        </div>
        <button>I&apos;m Ready</button>
      </div>
    </div>
  );
};

export default CoursesCard;
