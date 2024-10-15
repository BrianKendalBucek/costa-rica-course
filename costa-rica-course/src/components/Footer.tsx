import React from "react";
// import Link from 'next/link';
import styles from "./Footer.module.scss";
// import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.headerDivison}>
        <h1>Join our happy</h1>
        <h1 className={styles.titleTwo}>students today!</h1>
      </div>
      <p>Begin your journey to a new life in Costa Rica</p>
      <button>Begin The Adventure</button>
      <p className={styles.copyright}>Copyright ® 2024 The Costa Rica Course</p>
    </footer>
  );
};

export default Footer;
