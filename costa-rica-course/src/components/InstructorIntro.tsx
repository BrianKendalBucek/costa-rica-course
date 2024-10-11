import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./InstructorIntro.module.scss";

const InstructorIntro = ({ instructor }) => {
  return (
    <div className={styles.instructorsContainer}>
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
          <p className={styles.instructorDiscription}>{instructor.description}</p>
          <div className={styles.socialLinksContainer}>
            <a
              href={instructor.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
            </a>
            <a href={instructor.socials.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className={styles.xtwitter} />
            </a>
            <a
              href={instructor.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorIntro;
