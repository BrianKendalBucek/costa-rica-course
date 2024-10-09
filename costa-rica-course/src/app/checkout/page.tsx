import BillingAddress from "@/components/BillingAddress";
import styles from "./checkout.module.scss";
import { Hero } from "@/components/Hero";
import PaymentMethod from "@/components/PaymentMethod";
import OrderReview from "@/components/OrderReview";
import DiscountSection from "@/components/DiscountSection";
import BillingSummary from "@/components/BillingSummary";

const Checkout = () => {
  return (
    <div>
      <div>
        <Hero
          titleOne="CHECKOUT"
          titleTwo="PROCESS"
          description=""
          backgroundImage="/images/CheckoutHero.png"
          backgroundPosition="bottom center"
        />
      </div>
      <div className={styles.checkoutStructure}>
        <div className={styles.container}>
          <BillingAddress />
          <PaymentMethod />
        </div>
        <div className={styles.summarySection}>
          <OrderReview />
          <DiscountSection />
          <BillingSummary />
          <button className={styles.payButton}>Pay $150</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
