import { steps } from "@/constants/constants";
import styles from "./ThreeSteps.module.scss";

export const ThreeSteps = () => {
  return (
    <div className={styles.threeStepsContainer}>
      <div className={styles.threeStepsTitle}>
        <h2>MORE MONEY</h2>
        <h2 className={styles.plus}>+</h2>
        <h2>HEALTHIER</h2>
      </div>
      <div className={styles.threeStepsTitle}>
        <h2>LIFESTYLE</h2>
        <h2 className={styles.plus}>+</h2>
        <h2>MORE FREEDOM</h2>
      </div>
      <h3 className={styles.threeStepsExtension}>IN 3 SIMPLE STEPS:</h3>
      <div className={styles.threeStepsSteps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.threeStepsStep}>
            <div className={styles.threeStepNumber}>{step.number}</div>
            <div className={styles.threeStepDescription}>{step.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
