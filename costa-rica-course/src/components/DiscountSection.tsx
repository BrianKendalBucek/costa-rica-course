import styles from "./DiscountSection.module.scss";

const DiscountSection = () => {
  return (
    <div className={styles.discountSection}>
      <h3 className={styles.sectionTitle}>Discount Codes</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your coupon code"
      />
    </div>
  );
};

export default DiscountSection;
