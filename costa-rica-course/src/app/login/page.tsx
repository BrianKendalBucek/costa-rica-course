"use client";

import React, { useState, FormEvent } from "react";
import styles from "./login.module.scss";
import Image from "next/image";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // You can add logic to send form data to an API or backend server here
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.leftHero}>
        <h1 className={styles.topHeader}>EXPERIENCE</h1>
        <h1 className={styles.bottomHeader}>EXPAT LIFE</h1>
      </div>
      <div className={styles.loginFormContainer}>
        <Image
          src="/images/LoginLogo.png"
          alt="Logo"
          width={201}
          height={124.73}
          priority
        />
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="usernameOrEmail">Username or Email Address</label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleInputChange}
                required
                placeholder=""
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder=""
              />
            </div>
            <div className={styles.rememberForgotContainer}>
              <div className={styles.remember}></div>
              <div className={styles.forgot}></div>
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
