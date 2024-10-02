import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { images, instructors } from '@/constants/constants';
import ImageWithText from '@/components/ImageWithText';
// import { Instructor } from '@/components/Instructor';

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
            <p className={styles.intro}>Meet out lead instructors: experts committed to guiding your learning journey with passion and precision.</p>
            <div className={styles.instructorsContainer}>
              {instructors.map(instructor => <Instructor key={instructor.alt} instructor={instructor} />)}
            </div>
          </div>

          <div className={styles.threeSteps}>
            <div className={styles.threeStepsTitle}>
              <h2>MORE MONEY</h2>
              <h2 className={styles.plus}>+</h2>
              <h2>HEALTHIER</h2>
            </div>
            <div className={styles.threeStepsTitle}>
              <h2>LIFESTYLE</h2>
              <h2 className={styles.plus}>+</h2>
              <h2>MORE FREEDOM</h2>
            </div>
            <h3 className={styles.threeStepsExtension}>IN 3 SIMPLE STEPS:</h3>
            <div className={styles.threeStepsSteps}>
              <div className={styles.threeStepsStep}>
                <div className={styles.threeStepNumber}>1.</div>
                <div className={styles.threeStepDescription}>Move your business and your money offshore to reduce taxes and grow your business faster. This includes tax planning and offshore banking, companies, and merchant accounts.</div>
              </div>
              <div className={styles.threeStepsStep}>
                <div className={styles.threeStepNumber}>2.</div>
                <div className={styles.threeStepDescription}>Move your business and your money offshore to reduce taxes and grow your business faster. This includes tax planning and offshore banking, companies, and merchant accounts.</div>
              </div>
              <div className={styles.threeStepsStep}>
                <div className={styles.threeStepNumber}>3.</div>
                <div className={styles.threeStepDescription}>Move your business and your money offshore to reduce taxes and grow your business faster. This includes tax planning and offshore banking, companies, and merchant accounts.</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>MAIN COURSE</h2>
            <p className={styles.cardMainCourse}>Embark on a comprehensive foundational course designed to guide you through every aspect of becomming an expat in Costa Rica, covering legal requirements, cultural acclimatization, language proficiency, and practical tips for a successful relocation.</p>
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
