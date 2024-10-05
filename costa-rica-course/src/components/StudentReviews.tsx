import React from "react";
import styles from "./StudentReviews.module.scss";
import Image from "next/image";

const StudentReview = () => {
  return (
    <div className={styles.studentReviews}>
      <p>
        &quot;I appreciated the practical advice and real-life insights. The
        lessons on cultural integration were especially helpful and
        eye-opening.&quot;
      </p>
      <div className={styles.studentData}>
        <Image
          src="/images/Student 1.png"
          alt="Logo"
          width={43}
          height={43}
          priority
        />
        <div className={styles.studentInfo}>
          <h3>Zasha Swan</h3>
          <h4>From Sydney, Australia</h4>
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
