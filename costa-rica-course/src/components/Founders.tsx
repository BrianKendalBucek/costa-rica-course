import styles from "./Founders.module.scss";

const Founders = () => {
  return (
    <div className={styles.foundersImagesAndData}>
      <div className={styles.founderLeft}>
        <div className={styles.image}></div>
        <div className={styles.data}>
          <h4>Lisa Green</h4>
          <h5>CMO</h5>
        </div>
      </div>
      <div className={styles.founderRight}>
        <div className={styles.image}></div>
        <div className={styles.data}>
          <h4>Dr. John Smith</h4>
          <h5>Founder & CEO</h5>
        </div>
      </div>
    </div>
  );
};

export default Founders;
