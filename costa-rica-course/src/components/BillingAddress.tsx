import styles from './BillingAddress.module.scss';

const BillingAddress = () => {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.sectionTitle}>Billing Address</h3>
      <form className={styles.form}>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
          />
          <input className={styles.input} type="text" placeholder="Last Name" />
        </div>
        <input
          className={styles.input}
          type="email"
          placeholder="Email Address"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Street Address"
        />
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="State/Province"
          />
          <input className={styles.input} type="text" placeholder="City" />
        </div>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="Zip/Postal Code"
          />
          <input className={styles.input} type="text" placeholder="Phone" />
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
