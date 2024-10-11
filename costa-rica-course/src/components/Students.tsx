import StudentReviewCarousel from "./StudentReviewCarousel";
import styles from "./Students.module.scss";

export const Students = () => {
  return (
    <div className={styles.card}>
      <h2>WHAT OUR STUDENTS HAVE TO SAY</h2>
      <StudentReviewCarousel />
    </div>
  );
};
