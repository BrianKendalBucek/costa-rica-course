"use client";

import React, { useState, FormEvent } from "react";
import styles from "./contact.module.scss";
import { Hero } from "@/components/Hero";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        description="Find the support and answers you're looking for our dedicated team is here to assist you every step of the way."
        backgroundImage="/images/ContactHero.png"
        backgroundPosition="top center"
      />
      <section className={styles.contactForm}>
        <h2>SEND US A MESSAGE</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder=""
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
              placeholder=""
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder=""
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Comment or Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder=""
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
