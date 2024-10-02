// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import styles from './Instructor.module.scss';

// export const Instructor = ({ instructor }) => (
//   <div className={styles.instructor}>
//     <Image
//       src={instructor.src}
//       alt={instructor.alt}
//       width={128.85}
//       height={128.85}
//       priority
//       className={styles.instructorImage}
//     />
//     <div>
//       <h3>{instructor.name}</h3>
//       <h4>{instructor.title}</h4>
//     </div>
//     <p className={styles.instructorDiscription}>{instructor.discription}</p>
//     <div className={styles.socialLinksContainer}>
//       {/* <a href={instructor.socials.facebook} className={styles.socialIcon}> */}
//       <FontAwesomeIcon icon={faFacebook} className={styles.facebook}/>
//       {/* </a> */}
//       {/* <a href={instructor.socials.twitter} className={styles.socialIcon}> */}
//       <FontAwesomeIcon icon={faXTwitter} className={styles.xtwitter}/>
//       {/* </a> */}
//       {/* <a href={instructor.socials.linkedin} className={styles.socialIcon}> */}
//       <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/>
//       {/* </a> */}
//     </div>
//   </div>
// );