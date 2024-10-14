import styles from "./Instructor.module.scss";
// import ResponsiveCarousel from "./ResponsiveCarousel";
import InstructorIntroCarousel from "./InstructorIntroCarousel";

export const Instructor = () => (
  <div className={styles.card}>
    <h2>MEET THE LEAD INSTRUCTORS</h2>
    <div className={styles.intro}>
      <p>
        Meet out lead instructors: experts committed to guiding your learning
        journey with passion and precision.
      </p>
    </div>
    {/* <ResponsiveCarousel /> */}
    <InstructorIntroCarousel />
  </div>
);
