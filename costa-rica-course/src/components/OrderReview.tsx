import styles from "./OrderReview.module.scss";
import Image from "next/image";

const OrderReview = () => {
  return (
    <div className={styles.orderReview}>
      <h3 className={styles.sectionTitle}>Order Review</h3>
      <div className={styles.orderItem}>
        <Image
          src="/images/exampleThumbnail.png"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
        <div>
          <h4>How to Move to Costa Rica!</h4>
          <p>Unlock the secrets to a successful expat life in Costa Rica.</p>
          <p className={styles.price}>$199</p>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
