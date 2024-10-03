"use client";

import React, { useState, FormEvent } from "react";
import styles from "./contact.module.scss"; // Import the SCSS module for styling
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import { Hero } from "@/components/Hero";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <main className={styles.contactPage}>
      <Hero
        titleOne="NEED"
        titleTwo="HELP?"
        description="Find the support and answers you're looking for our dedicated team is hereto assist you every step of the way."
      />
      <section className={styles.contactForm}>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Fill out the form below to get in touch!
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>

      <section className={styles.socialMedia}>
        <h2>Follow Us</h2>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
