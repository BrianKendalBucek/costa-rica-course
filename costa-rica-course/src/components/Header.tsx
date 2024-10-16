import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import HeaderList from "./HeaderList";
import HeaderLogo from "./HeaderLogo";
import HeaderLoginButton from "./HeaderLoginButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1380);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <HeaderLogo />

      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </div>

      <nav
        ref={menuRef}
        className={`${styles.navList} ${menuOpen ? styles.open : ""}`}
      >
        <HeaderList onItemClick={handleMenuItemClick} />{" "}
        {/* Pass the function */}
      </nav>

      {!isMobileView && <HeaderLoginButton />}
    </header>
  );
};

export default Header;
