import React, { useEffect, useState } from 'react';
import styles from './HeaderList.module.scss';
import Link from 'next/link';

const HeaderList = ({ onItemClick }: { onItemClick: () => void }) => {
  // State to track if the screen width is less than 1380px
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check the screen width
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1380);
    };

    // Set initial state and add event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.navList}>
      <nav>
        <ul>
          <li onClick={onItemClick}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={onItemClick}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={onItemClick}>
            <Link href="/courses">Courses</Link>
          </li>
          <li onClick={onItemClick}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={onItemClick}>
            <Link href="/account">Account</Link>
          </li>
          <li onClick={onItemClick}>
            <Link href="/checkout">Checkout</Link>
          </li>
          {/* <li>
            <Link href="/test">Test</Link>
          </li> */}
          {isMobileView && (
            <li onClick={onItemClick}>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderList;
