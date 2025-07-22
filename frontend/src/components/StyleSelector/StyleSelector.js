import React from 'react';
import styles from './StyleSelector.module.css';

const STYLE_OPTIONS = [
  'Professional', 'Casual', 'Assertive', 
  'Empathetic', 'Concise', 'Detailed'
];

const StyleSelector = ({ selectedStyle, onStyleChange }) => {
  return (
    <section>
      <h3 className={styles.title}>Choose a Response Style</h3>
      <div className={styles.styleGrid}>
        {STYLE_OPTIONS.map(style => (
          <div
            key={style}
            className={`${styles.styleCard} ${selectedStyle === style ? styles.selected : ''}`}
            onClick={() => onStyleChange(style)}
          >
            {style}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StyleSelector;
