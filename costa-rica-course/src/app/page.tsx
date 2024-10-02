import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const images = [
  {
    src: "/images/Rectangle 2775 (1).png",
    alt: "Find Your Pura Vida",
    overlayText: "Find Your Pura Vida"
  },
  {
    src: "/images/Rectangle 2776 (1).png",
    alt: "Retire in Costa Rica",
    overlayText: "Retire in Costa Rica"
  },
  {
    src: "/images/Rectangle 2777 (1).png",
    alt: "Find Your Freedom",
    overlayText: "Find Your Freedom"
  }
];

const ImageWithText = ({ image }) => (
  <div className={styles.imageWithTextContainer}>
    <Image
      src={image.src}
      alt={image.alt}
      width={405.67}
      height={288}
      priority
    />
    <div className={styles.overlayText}>
      {image.overlayText}
    </div>
  </div>
);

const instructors = [
  {
    src: "/images/Ellipse 10.png",
    alt: "Mrs. Jane Doe",
    name: "Mrs. Jane Doe",
    title: "INSTRUCTOR SPOTLIGHT",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit mauris eget sem imperdiet scelerisque."
  },
  {
    src: "/images/Ellipse 10 (1).png",
    alt: "Mr. John Doe",
    name: "Mr. John Doe",
    title: "INSTRUCTOR SPOTLIGHT",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit mauris eget sem imperdiet scelerisque."
  },
  {
    src: "/images/Ellipse 10 (2).png",
    alt: "Mrs. Janis Doe",
    name: "Mrs. Janis Doe",
    title: "INSTRUCTOR SPOTLIGHT",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit mauris eget sem imperdiet scelerisque."
  }
];

const Instructor = ({ instructor }) => (
  <div className={styles.instructor}>
    <Image
      src={instructor.src}
      alt={instructor.alt}
      width={128.85}
      height={128.85}
      priority
      className={styles.instructorImage}
    />
    <div>
      <h3>{instructor.name}</h3>
      <h4>{instructor.title}</h4>
    </div>
    <p className={styles.instructorDiscription}>{instructor.discription}</p>
    <div className={styles.socialLinksContainer}>
      {/* <a href={instructor.socials.facebook} className={styles.socialIcon}> */}
      <FontAwesomeIcon icon={faFacebook} className={styles.facebook}/>
      {/* </a> */}
      {/* <a href={instructor.socials.twitter} className={styles.socialIcon}> */}
      <FontAwesomeIcon icon={faXTwitter} className={styles.xtwitter}/>
      {/* </a> */}
      {/* <a href={instructor.socials.linkedin} className={styles.socialIcon}> */}
      <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/>
      {/* </a> */}
    </div>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>EXPERIENCE</h1>
            <h1 className={styles.title2}>EXPAT LIFE</h1>
            <p className={styles.titleDescription}>Has life left you wanting more? Embark on your Expat journey with confidance, and discover and world of opportynity with one stop destination for global living essentials.</p>
            <button className={styles.titleButton}>BEGIN THE ADVENTURE &gt;</button>
          </div>
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.card}>
            <h2>WHAT IS YOUR GOAL?</h2>
            <p>Let us know your goal and we will tell you how we can help you based on your details</p>
          </div>
          <div className={styles.trio}>
            {images.map(image => <ImageWithText key={image.alt} image={image} />)}
          </div>
          <div className={styles.card}>
            <h2>MEET THE LEAD INSTRUCTORS</h2>
            <p>Meet out lead instructors: experts committed to guiding your learning journey with passion and precision.</p>
            <div className={styles.instructorsContainer}>
              {instructors.map(instructor => <Instructor key={instructor.alt} instructor={instructor} />)}
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
