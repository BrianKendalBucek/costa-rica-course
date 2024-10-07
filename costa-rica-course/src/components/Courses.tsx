import CourseCarousel from "./CoursesCarousel";
import styles from "./Courses.module.scss";

export const Courses = () => {
  return (
    <div className={styles.card}>
      <CourseCarousel />
    </div>
  );
};
