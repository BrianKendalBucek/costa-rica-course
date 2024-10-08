import styles from "./MainCourse.module.scss";
import Image from "next/image";

const MainCourse = () => {
  return (
    <div className={styles.mainCourseContainer}>
      <div className={styles.mainCourseImage}>
        <Image
          src="/images/course 3.jpg"
          alt="Logo"
          width={370}
          height={370}
          priority
        />
      </div>
      <div className={styles.mainCourseDetails}>
        <div className={styles.headerAndParagraph}>
          <h2>How to Move to Costa Rica!</h2>
          <p>
            Unlock the secrets to a successful expat life in Costa Rica with our
            comprehensive course, covering everything from legal procedures to
            cultural integration.
          </p>
        </div>
        <div className={styles.priceAndButton}>
          <div className={styles.priceOldAndNew}>
            <p className={styles.priceOld}>$499</p>
            <p className={styles.priceNew}>$199</p>
          </div>
          <button>I&apos;m Ready</button>
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
