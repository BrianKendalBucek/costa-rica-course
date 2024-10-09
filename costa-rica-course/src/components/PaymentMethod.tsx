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
            <input
              className={styles.input}
              type="text"
              placeholder="Card number"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Expiration Date (MM/YY)"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Card Security Code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
