import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/Frame 28991.png"
            alt="Logo"
            width={260}
            height={65}
            priority
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </nav>
      
      <div className={styles.loginButton}>
        <Link href="/login">
          <button>
            <Image
              src="/images/Frame 1000005402.png"
              alt="Login Button"
              width={20}
              height={20}
              priority
            />
            Log In
          </button>
        </Link>
      </div>

    </header>
  );
};

export default Header;
