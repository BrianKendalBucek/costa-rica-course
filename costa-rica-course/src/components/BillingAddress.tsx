import styles from './BillingAddress.module.scss';

const BillingAddress = () => {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.sectionTitle}>Billing Address</h3>
      <form className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="firstName">First Name</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="lastName"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder=" "
          />
          <label className={styles.label} htmlFor="email">Email Address</label>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            id="streetAddress"
            placeholder=" "
          />
          <label className={styles.label} htmlFor="streetAddress">Street Address</label>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="stateProvince"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="stateProvince">State/Province</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="city"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="city">City</label>
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="postalCode"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="postalCode">Zip/Postal Code</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="phone"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="phone">Phone</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
