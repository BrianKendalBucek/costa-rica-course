import styles from "./checkout.module.scss";
import { Hero } from "@/components/Hero";

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.hero}>
        <Hero
          titleOne="CHECKOUT"
          titleTwo="PROCESS"
          description=""
          backgroundImage="/images/CheckoutHero.png"
          backgroundPosition="bottom center"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Billing Address</h3>
          <form className={styles.form}>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                type="text"
                placeholder="First Name"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Last Name"
              />
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

        <div className={styles.orderReview}>
          <h3 className={styles.sectionTitle}>Order Review</h3>
          <div className={styles.orderItem}>
            <img src="course-image-url" alt="Course Thumbnail" />
            <div>
              <h4>How to Move to Costa Rica!</h4>
              <p>
                Unlock the secrets to a successful expat life in Costa Rica.
              </p>
              <p className={styles.price}>$199</p>
            </div>
          </div>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.discountSection}>
            <h3 className={styles.sectionTitle}>Discount Codes</h3>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your coupon code"
            />
          </div>

          <div className={styles.billingSummary}>
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

          <button className={styles.payButton}>Pay $150</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
