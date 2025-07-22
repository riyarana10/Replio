import React from 'react';
import styles from './EmailInput.module.css';

const EmailInput = ({ emailText, setEmailText }) => {
  return (
    <section className={styles.inputSection}>
      <h3 className={styles.title}>Draft Your Email Response</h3>
      <textarea
        className={styles.textarea}
        placeholder="I hope this email finds you well. I am writing to follow up..."
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <div className={styles.toolbar}>
        <span>Detected Tone: <strong>Neutral</strong></span>
        <button className={styles.clearBtn} onClick={() => setEmailText('')}>
          Clear Input
        </button>
      </div>
    </section>
  );
};

export default EmailInput;
