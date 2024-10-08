"use client";

import React, { useState, FormEvent } from "react";
import styles from "./login.module.scss";
import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "@/components/ToggleSwitch";

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

  const handleToggle = (checked: boolean) => {
    console.log("Toggle Switch is now:", checked);
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
          height={124}
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
              {/* <div className={styles.remember}></div> */}
              <ToggleSwitch
                label="Remember me"
                onToggle={handleToggle}
                initialState={true}
              />
              <div className={styles.forgot}>
                <Link href="/forgot-password">Forgot password?</Link>
              </div>
            </div>
            <button type="submit">Log In</button>
          </form>
          <div className={styles.register}>
            <p>Don&apos;t have an account?</p>
            <Link href="/register">Sign up now</Link>
          </div>
          <div className={styles.home}>
            <Link href="/">&lt; Go to the Costa Rica Course</Link>
          </div>
          <div className={styles.copyright}>
            Copyright<span>®</span>2024 The Costa Rica Course
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
