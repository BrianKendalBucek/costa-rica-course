import styles from "./Instructor.module.scss";
// import InstructorIntroCarousel from "./InstructorIntroCarousel";
import ResponsiveCarousel from "./ResponsiveCarousel";

export const Instructor = () => (
  <div className={styles.card}>
    <h2>MEET THE LEAD INSTRUCTORS</h2>
    <p className={styles.intro}>
      Meet out lead instructors: experts committed to guiding your learning
      journey with passion and precision.
    </p>
    {/* <InstructorIntroCarousel /> */}
    <ResponsiveCarousel />
  </div>
);
