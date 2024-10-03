import "./about.module.scss";

import React from "react";
import styles from "./about.module.scss"; // Create a corresponding module.scss file for styling.

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1 className={styles.heroTitleOne}>ABOUT</h1>
          <h1 className={styles.heroTitleTwo}>US</h1>
        </div>
        <p>Our team, a blend of experienced expats and native Costa Ricans, is dedicated to guiding you through every step of your relocation journey with expertise and passion.</p>
      </div>
      <p className={styles.description}>
        Welcome to our website! We are passionate about providing you with the best experience possible. 
        Our mission is to guide expats and travelers through their journey in Costa Rica by providing 
        essential information, courses, and resources to help them thrive in a new environment.
      </p>
    </div>
  );
};

export default AboutPage;
