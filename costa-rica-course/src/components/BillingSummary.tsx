import styles from "./BillingSummary.module.scss";

const BillingSummary = () => {
  return (
    <div className={styles.billingSummary}>
      <h3 className={styles.sectionTitle}>Billing Summary</h3>
      <div className={styles.summaryItem}>
        <span>Subtotal</span>
        <span>$199</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Discount</span>
        <span>-$49</span>
      </div>
      <div className={`${styles.summaryItem} ${styles.total}`}>
        <span>Grand Total</span>
        <span>$150</span>
      </div>
    </div>
  );
};

export default BillingSummary;
