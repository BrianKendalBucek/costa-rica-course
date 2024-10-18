import styles from "./PaymentMethod.module.scss";
import { InputField } from "./InputField";

const PaymentOption = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.paymentOption}>
      <input type="radio" id={id} name="payment" />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.sectionTitle}>Payment Method</h3>
      <div className={styles.paymentOptions}>
        {/* CONTINUE BOXING OF PAYMENT METHODS HERE */}
        <div className={styles.payMethodContainer}>
          <PaymentOption id="paypal" label="PayPal" />
        </div>
        <PaymentOption id="credit-card" label="Pay with Credit Card">
          <div className={styles.creditCardForm}>
            <InputField id="cardNumber" type="text" label="Card number" />
            <InputField
              id="expirationDate"
              type="text"
              label="Expiration Date (MM/YY)"
            />
            <InputField
              id="cardSecurityCode"
              type="password"
              label="Card Security Code"
            />
          </div>
        </PaymentOption>
      </div>
    </div>
  );
};

export default PaymentMethod;
