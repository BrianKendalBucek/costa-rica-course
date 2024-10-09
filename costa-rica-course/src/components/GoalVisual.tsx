import ImageWithText from "./ImageWithText";
import styles from './GoalVisual.module.scss';
import { images } from "@/constants/constants";

const GoalVisual = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>WHAT IS YOUR GOAL?</h2>
        <p>
          Let us know your goal and we will tell you how we can help you based
          on your details
        </p>
      </div>

      <div className={styles.trio}>
        {images.map((image) => (
          <ImageWithText key={image.alt} image={image} />
        ))}
      </div>
    </>
  );
};

export default GoalVisual;
