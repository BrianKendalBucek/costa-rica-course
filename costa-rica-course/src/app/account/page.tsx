import React from "react";
import UserModBlock from "@/components/UserModBlock";
import styles from "./account.module.scss";
import { Hero } from "@/components/Hero";
import CourseProgress from "@/components/CourseProgress";
import { courses } from "@/constants/constants";

const AccountPage = () => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.hero}>
        <Hero
          titleOne="MY"
          titleTwo="ACCOUNT"
          description=""
          backgroundImage="/images/AccountBackground.png"
          backgroundPosition="bottom center"
        />
      </div>
      <div className={styles.userModBlock}>
        <UserModBlock />
      </div>
      <div className={styles.coursesStatsContainer}>
        <div className={styles.coursesStats}>
          <div>
            {courses.map((course, index) => (
              <CourseProgress
                key={index}
                title={course.title}
                steps={course.steps}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
