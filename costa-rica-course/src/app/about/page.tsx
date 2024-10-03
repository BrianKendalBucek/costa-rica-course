import "./about.module.scss";

import React from "react";
import styles from "./about.module.scss";
import { Instructor } from "@/components/Instructor";

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
      <div className={styles.storyContainer}>
        <div className={styles.storyAndImageContainer}>
          <div className={styles.story}>
            <h2>ORIGIN STORY</h2>
            <p>This course was born out of the personal journey of its creator, a Canadian expat who made the life-changing decision to move to Costa Rica several years ago.
                Faced with the challenges and adventures of adapting to a new culture, navigating the legal intricacies of residency, and learning the ropes of living in a foreign land, they recognized a gap in available resources for those looking to make a similar move. Leveraged by their firsthand experiences, trials, and successes, the course is designed to offer a roadmap to prospective expats. <br /><br />
                It encapsulates years of accumulated knowledge, insights, and practical advice, aiming to smooth the path for others by providing a comprehensive guide to relocating, settling, and thriving in the beautiful and diverse country of Costa Rica. The creator&apos;s passion for their adopted home and desire to share the beauty of expat life with others is the driving force behind this course, making it not just a set of instructions but a personal guide infused with love and enthusiasm for Costa Rican life.</p>
          </div>
          <div className={styles.images}>
            <div className={styles.imageTop}>
              <div className={styles.imageTopLeft}></div>
              <div className={styles.imageTopRight}>
                <h4>Dr. John Smith</h4>
                <h5>Founder & CEO</h5>
              </div>
            </div>
            <div className={styles.imageBottom}>
              <div className={styles.imageBottomLeft}>
                <h4>Lisa Green</h4>
                <h5>CMO</h5>
              </div>
              <div className={styles.imageBottomRight}></div>
            </div>
          </div>
        </div>
      </div>
      {/* make seperate component */}
      <div className={styles.statBarContainer}>
        <div className={styles.statBarSection}>
          <h2>10+</h2>
          <p>Awards</p>
        </div>
        <div className={styles.statBarSection}>
          <h2>5+</h2>
          <p>Countries</p>
        </div>
        <div className={styles.statBarSection}>
          <h2>12+</h2>
          <p>Partners</p>
        </div>
        <div className={styles.statBarSection}>
          <h2>7k</h2>
          <p>Students</p>
        </div>
      </div>

      <Instructor />
    </div>
  );
};

export default AboutPage;
