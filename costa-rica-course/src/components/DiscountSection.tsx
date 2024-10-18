import styles from "./DiscountSection.module.scss";

const DiscountSection = () => {
  return (
    <div className={styles.discountSection}>
      <h3 className={styles.sectionTitle}>Discount Codes</h3>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          id="couponCode"
          placeholder=" "
        />
        <label className={styles.label} htmlFor="couponCode">Enter your coupon code</label>
      </div>
    </div>
  );
};

export default DiscountSection;
