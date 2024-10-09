"use client";

import React, { useState } from "react";
import styles from "./CourseProgress.module.scss"; // Import the corresponding CSS/SCSS module

// Define the types for the props if using TypeScript
interface CourseStep {
  title: string;
  isComplete: boolean;
}

interface CourseProgressProps {
  title: string;
  steps: CourseStep[];
}

const CourseProgress: React.FC<CourseProgressProps> = ({ title, steps }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate progress
  const totalSteps = steps.length;
  const completedSteps = steps.filter((step) => step.isComplete).length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.courseProgressContainer}>
      <div className={styles.courseHeader} onClick={handleToggle}>
        <div className={styles.courseInfo}>
          <div className={styles.iconContainer}>
            <span className={styles.checkIcon}>&#10003;</span> {/* Checkmark */}
          </div>
          <h3>{title}</h3>
        </div>
        <div className={styles.statusContainer}>
          <span className={styles.completeButton}>COMPLETE</span>
          <span className={styles.dropdownIcon}>
            {isOpen ? "▲" : "▼"} {/* Arrow icon */}
          </span>
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarInfo}>
              <span>COURSE PROGRESS</span>
              <span className={styles.progressInfo}>
                {progressPercentage}% COMPLETE {completedSteps}/{totalSteps}{" "}
                STEPS
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          {/* List of steps */}
          <ul className={styles.stepsList}>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`${styles.stepItem} ${
                  step.isComplete ? styles.completedStep : ""
                }`}
              >
                <span className={styles.checkIcon}>
                  {step.isComplete ? "✔" : "○"}
                </span>{" "}
                {step.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseProgress;
