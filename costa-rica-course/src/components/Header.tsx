import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import HeaderList from "./HeaderList";
import HeaderLogo from "./HeaderLogo";
import HeaderLoginButton from "./HeaderLoginButton";
// Import FontAwesomeIcon and specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import specific icons

const Header: React.FC = () => {
  // State to toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State to track if the screen width is less than 1380px
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect to track window resize and set isMobileView state
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1380);
    };

    // Set initial state and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <HeaderLogo />

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </div>

      {/* Show/Hide the menu based on menuOpen state */}
      {/* Toggle 'open' class based on menuOpen state */}
      <nav className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
        <HeaderList />
      </nav>

      {/* Conditionally render the Login Button based on screen size */}
      {!isMobileView && <HeaderLoginButton />}
    </header>
  );
};

export default Header;
