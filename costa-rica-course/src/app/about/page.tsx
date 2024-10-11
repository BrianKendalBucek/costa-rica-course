import React from "react";
import styles from "./about.module.scss";
import { Instructor } from "@/components/Instructor";
import { Students } from "@/components/Students";
import { Stats } from "@/components/Stats";
import { Hero } from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import Founders from "@/components/Founders";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <Hero
        titleOne="ABOUT"
        titleTwo="US"
        description="Our team, a blend of experienced expats and native Costa Ricans, is dedicated to guiding you through every step of your relocation journey with expertise and passion."
        backgroundImage="/images/Office.png"
        backgroundPosition="bottom center"
      />
      <div className={styles.storyContainer}>
        <div className={styles.storyAndImageContainer}>
          <OriginStory />
          <Founders />
        </div>
      </div>
      <Stats />
      <div className={styles.instructorContainer}>
        <Instructor />
      </div>
      <Students />
    </div>
  );
};

export default AboutPage;
