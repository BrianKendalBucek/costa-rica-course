import React from 'react';
import styles from './page.module.scss'; // Import page-specific styles

const HomePage: React.FC = () => {
  return (
    <>
      {/* Main content area */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>EXPERIENCE</h1>
            <h1 className={styles.title2}>EXPAT LIFE</h1>
            <p className={styles.titleDescription}>Has life left you wanting more? Embark on your Expat journey with confidance, and discover and world of opportynity with one stop destination for global living essentials.</p>
            <button className={styles.titleButton}>BEGIN THE ADVENTURE &gt;</button>
          </div>
          {/* <p className={styles.description}>
            Your go-to solution for [services, products, or content].
          </p> */}
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
