"use client";

import { Courses } from "@/components/Courses";
import styles from "./coursesPage.module.scss";
import { Hero } from "@/components/Hero";
import { Students } from "@/components/Students";

const CoursesPage: React.FC = () => {

  return (
    <main>
      <Hero
        titleOne="MAIN"
        titleTwo="COURSE"
        description="Embark on a comprehensive foundational course designed to guide you through every aspect of becoming an expat in Costa Rica, covering legal requirements, cultural acclimatization, language proficiency, and practical tips for a successful relocation."
        backgroundImage="/images/MainCourseHero.png"
        backgroundPosition="top center"
      />
      <div className={styles.coursesCarousel}>
        <Courses />
        <Students />
      </div>
    </main>
  );
};

export default CoursesPage;
