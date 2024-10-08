import React, { useState } from "react";
import styles from "./FAQ.module.scss"; // Import the SASS module
import { faqItems } from "@/constants/constants";

// Define the interface for each FAQ item
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// Props interface for the FAQ component
// interface FAQProps {
//   items: FAQItem[];
// }

const FAQ = () => {
  // State to track which question is currently expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle the expanded state of the selected question
  const toggleQuestion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqItems}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${expandedIndex === index ? styles.expanded : ""}`}
          >
            {/* Question Section */}
            <div
              onClick={() => toggleQuestion(index)}
              className={styles.faqQuestion}
            >
              <span>{item.question}</span>
              <span>{expandedIndex === index ? "▲" : "▼"}</span>
            </div>
            {/* Answer Section */}
            {expandedIndex === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
