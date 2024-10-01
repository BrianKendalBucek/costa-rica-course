import React from 'react';
import styles from './page.module.scss'; // Import page-specific styles

const HomePage: React.FC = () => {
  return (
    <>
      {/* Main content area */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to Our Website</h1>
          <p className={styles.description}>
            Your go-to solution for [services, products, or content].
          </p>
        </section>

        {/* Content grid or sections */}
        <section className={styles.contentGrid}>
          <div className={styles.card}>
            <h2>About Us</h2>
            <p>Find out more about our mission, vision, and values.</p>
          </div>
          <div className={styles.card}>
            <h2>Our Services</h2>
            <p>Explore the wide range of services we offer to our clients.</p>
          </div>
          <div className={styles.card}>
            <h2>Get In Touch</h2>
            <p>Contact us to learn more or to start working with us today.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
