import React from "react";
import styles from "./page.module.scss";
import { Instructor } from "@/components/Instructor";
import { ThreeSteps } from "@/components/ThreeSteps";
import { Students } from "@/components/Students";
import { Courses } from "@/components/Courses";
import MainCourse from "@/components/MainCourse";
import GoalVisual from "@/components/GoalVisual";

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
          <GoalVisual />
          <Instructor />
          <ThreeSteps />
          <MainCourse />
          <div className={styles.studentsContainer}>
            <Students />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
