import styles from './Stats.module.scss';

export const Stats = () => {
  return (
    <div className={styles.statBarContainer}>
      <div className={styles.statBarSection}>
        <h2>10+</h2>
        <p>Awards</p>
      </div>
      <div className={styles.statBarSection}>
        <h2>5+</h2>
        <p>Countries</p>
      </div>
      <div className={styles.statBarSection}>
        <h2>12+</h2>
        <p>Partners</p>
      </div>
      <div className={styles.statBarSection}>
        <h2>7k</h2>
        <p>Students</p>
      </div>
    </div>
  );
};
