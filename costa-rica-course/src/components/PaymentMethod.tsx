import styles from './PaymentMethod.module.scss';

const PaymentMethod = () => {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.sectionTitle}>Payment Method</h3>
      <div className={styles.paymentOptions}>
        <div className={styles.paymentOption}>
          <input type="radio" id="paypal" name="payment" />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" id="credit-card" name="payment" />
          <label htmlFor="credit-card">Pay with Credit Card</label>
          <div className={styles.creditCardForm}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                id="cardNumber"
                placeholder=" "
              />
              <label className={styles.label} htmlFor="cardNumber">Card number</label>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                id="expirationDate"
                placeholder=" "
              />
              <label className={styles.label} htmlFor="expirationDate">Expiration Date (MM/YY)</label>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="password"
                id="cardSecurityCode"
                placeholder=" "
              />
              <label className={styles.label} htmlFor="cardSecurityCode">Card Security Code</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
