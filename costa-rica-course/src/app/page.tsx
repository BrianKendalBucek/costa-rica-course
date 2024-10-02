import React from 'react';
import Image from 'next/image';
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
            <h2>WHAT IS YOUR GOAL?</h2>
            <p>Let us know your goal and we will tell you how we can help you based on your details</p>
          </div>
          <div className={styles.trio}>
            <div className={styles.imageWithTextContainer}>
              <Image
                src="/images/Rectangle 2775 (1).png" // Path to your logo in the public/images directory
                alt="Login Button"
                width={405.67} // Set appropriate width for the logo
                height={288} // Set appropriate height for the logo
                priority // Ensures the logo loads faster
              />
              <div className={styles.overlayText}>
                Find Your Pura Vida
              </div>
            </div>
            <div className={styles.imageWithTextContainer}>
              <Image
                src="/images/Rectangle 2776 (1).png" // Path to your logo in the public/images directory
                alt="Login Button"
                width={405.67} // Set appropriate width for the logo
                height={288} // Set appropriate height for the logo
                priority // Ensures the logo loads faster
              />
              <div className={styles.overlayText}>
                Retire in Costa Rica
              </div>
            </div>
            <div className={styles.imageWithTextContainer}>
              <Image
                src="/images/Rectangle 2777 (1).png" // Path to your logo in the public/images directory
                alt="Login Button"
                width={405.67} // Set appropriate width for the logo
                height={288} // Set appropriate height for the logo
                priority // Ensures the logo loads faster
              />
              <div className={styles.overlayText}>
                Find Your Freedom
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>MEET THE LEAD INSTRUCTORS</h2>
            <p>Meet out lead instructors: experts committed to guiding your learning journey with passion and precision.</p>
            <div className={styles.instructorsContainer}>
              <div className={styles.instructor}>
                <Image
                  src="/images/Ellipse 10.png" // Path to your logo in the public/images directory
                  alt="Login Button"
                  width={128.85} // Set appropriate width for the logo
                  height={128.85} // Set appropriate height for the logo
                  priority // Ensures the logo loads faster
                  className={styles.instructorImage}
                />
              </div>
              <div className={styles.instructor}>
                <Image
                  src="/images/Ellipse 10 (1).png" // Path to your logo in the public/images directory
                  alt="Login Button"
                  width={128.85} // Set appropriate width for the logo
                  height={128.85} // Set appropriate height for the logo
                  priority // Ensures the logo loads faster
                  className={styles.instructorImage}
                />
              </div>
              <div className={styles.instructor}>
                <Image
                  src="/images/Ellipse 10 (2).png" // Path to your logo in the public/images directory
                  alt="Login Button"
                  width={128.85} // Set appropriate width for the logo
                  height={128.85} // Set appropriate height for the logo
                  priority // Ensures the logo loads faster
                  className={styles.instructorImage}
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>MAIN COURSE</h2>
            <p>Embark on a comprehensive foundational course designed to guide you through every aspect of becomming an expat in Costa Rica, covering legal requirements, cultural acclimatization, language proficiency, and practical tips for a successful relocation.</p>
          </div>
          <div className={styles.card}>
            <h2>WHAT OUR STUDENTS HAVE TO SAY</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
