import styles from "./Hero.module.scss";

export const Hero = ({ titleOne, titleTwo, description, backgroundImage, backgroundPosition }) => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: `${backgroundPosition}` }}>
      <div className={styles.heroTitle}>
        <h1 className={styles.heroTitleOne}>{titleOne}</h1>
        <h1 className={styles.heroTitleTwo}>{titleTwo}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};
