import styles from "./BillingAddress.module.scss";
import { InputField } from "./InputField";

const BillingAddress = () => {
  return (
    <div className={styles.formSection}>
      <h3>Billing Address</h3>
      <form className={styles.form}>
        <div className={styles.inputRow}>
          <InputField id="firstName" type="text" label="First Name" />
          <InputField id="lastName" type="text" label="Last Name" />
        </div>
        <InputField id="email" type="email" label="Email Address" />
        <InputField id="streetAddress" type="text" label="Street Address" />
        <div className={styles.inputRow}>
          <InputField id="stateProvince" type="text" label="State/Province" />
          <InputField id="city" type="text" label="City" />
        </div>
        <div className={styles.inputRow}>
          <InputField id="postalCode" type="text" label="Zip/Postal Code" />
          <InputField id="phone" type="text" label="Phone" />
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
