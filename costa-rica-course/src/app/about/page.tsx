import "./about.module.scss";

import React from "react";
import styles from "./about.module.scss"; // Create a corresponding module.scss file for styling.

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>Test</div>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our website! We are passionate about providing you with the best experience possible. 
        Our mission is to guide expats and travelers through their journey in Costa Rica by providing 
        essential information, courses, and resources to help them thrive in a new environment.
      </p>
    </div>
  );
};

export default AboutPage;
