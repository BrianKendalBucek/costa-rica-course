import styles from "./Founders.module.scss";

const Founders = () => {
  return (
    <div className={styles.images}>
      <div className={styles.imageTop}>
        <div className={styles.imageTopLeft}></div>
        <div className={styles.imageTopRight}>
          <h4>Dr. John Smith</h4>
          <h5>Founder & CEO</h5>
        </div>
      </div>
      <div className={styles.imageBottom}>
        <div className={styles.imageBottomLeft}>
          <h4>Lisa Green</h4>
          <h5>CMO</h5>
        </div>
        <div className={styles.imageBottomRight}></div>
      </div>
    </div>
  );
};

export default Founders;
