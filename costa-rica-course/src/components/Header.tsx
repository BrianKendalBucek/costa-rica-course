import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Add the logo using the Image component */}
          <Image
            src="/images/Frame 28991.png" // Path to your logo in the public/images directory
            alt="Logo"
            width={260} // Set appropriate width for the logo
            height={65} // Set appropriate height for the logo
            priority // Ensures the logo loads faster
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link> {/* Remove the <a> tag */}
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link> {/* Remove the <a> tag */}
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Services</Link> {/* Remove the <a> tag */}
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link> {/* Remove the <a> tag */}
          </li>
        </ul>
      </nav>
      <div className={styles.loginButton}>
        <Link href="/login">
          {/* Add the logo using the Image component */}
          <Image
            src="/images/Frame 28994.png" // Path to your logo in the public/images directory
            alt="Login Button"
            width={150} // Set appropriate width for the logo
            height={65} // Set appropriate height for the logo
            priority // Ensures the logo loads faster
          />
        </Link>
      </div>

    </header>
  );
};

export default Header;
