import styles from "./DiscountSection.module.scss";
import { InputField } from "./InputField";

const DiscountSection = () => {
  return (
    <div className={styles.discountSection}>
      <h3 className={styles.sectionTitle}>Discount Codes</h3>
      <InputField id="couponCode" type="text" label="Enter your coupon code" />
    </div>
  );
};

export default DiscountSection;
