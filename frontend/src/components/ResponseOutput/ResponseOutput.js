import React, { useState } from 'react';
import styles from './ResponseOutput.module.css';

const ResponseOutput = ({ generatedResponse }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Response');

  const handleCopy = () => {
    if (generatedResponse) {
      navigator.clipboard.writeText(generatedResponse);
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy Response'), 2000);
    }
  };

  return (
    <section className={styles.outputSection}>
      <textarea
        className={styles.textarea}
        readOnly
        placeholder="Your generated response will appear here..."
        value={generatedResponse}
      />
      <div className={styles.copyContainer}>
        <button 
          className={styles.copyBtn} 
          onClick={handleCopy}
          disabled={!generatedResponse}
        >
          {copyButtonText}
        </button>
      </div>
    </section>
  );
};

export default ResponseOutput;
