import React from "react";
import styles from "./page.module.scss";
import { images } from "@/constants/constants";
import ImageWithText from "@/components/ImageWithText";
import { Instructor } from "@/components/Instructor";
import { ThreeSteps } from "@/components/ThreeSteps";
import { Students } from "@/components/Students";
import { Courses } from "@/components/Courses";

const HomePage: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>EXPERIENCE</h1>
            <h1 className={styles.title2}>EXPAT LIFE</h1>
            <p className={styles.titleDescription}>
              Has life left you wanting more? Embark on your Expat journey with
              confidance, and discover and world of opportynity with one stop
              destination for global living essentials.
            </p>
            <button className={styles.titleButton}>
              BEGIN THE ADVENTURE &gt;
            </button>
          </div>
          <Courses />
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.card}>
            <h2>WHAT IS YOUR GOAL?</h2>
            <p>
              Let us know your goal and we will tell you how we can help you
              based on your details
            </p>
          </div>

          <div className={styles.trio}>
            {images.map((image) => (
              <ImageWithText key={image.alt} image={image} />
            ))}
          </div>
          <Instructor />
          <ThreeSteps />
          <div className={styles.card}>
            <h2>MAIN COURSE</h2>
            <p className={styles.cardMainCourse}>
              Embark on a comprehensive foundational course designed to guide
              you through every aspect of becomming an expat in Costa Rica,
              covering legal requirements, cultural acclimatization, language
              proficiency, and practical tips for a successful relocation.
            </p>
          </div>
          <div className={styles.studentsContainer}>
            <Students />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
