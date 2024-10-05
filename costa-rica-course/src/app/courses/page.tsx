"use client";

import styles from './courses.module.scss';
import { Hero } from '@/components/Hero';
import { Students } from '@/components/Students';

const CoursesPage = () => {
  return (
    <main className={styles.coursesPage}>
      <Hero
        titleOne="MAIN"
        titleTwo="COURSE"
        description="Embark on a comprehensive foundational course designed to guide you through every aspect of becoming an expat in Costa Rica, covering legal requirements, cultural acclimatization, language proficiency, and practical tips for a successful relocation."
        backgroundImage="/images/MainCourseHero.png"
        backgroundPosition="top center"
      />
      <Students />
    </main>
  );
};

export default CoursesPage;