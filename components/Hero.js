import React from 'react';
import styles from '../styles/Hero.module.css';

export const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <h1 className={styles.titleText}>Hi, I&apos;m William. Nice to meet you!</h1>
      <p className="sectionText">
        I&apos;m a fearless software developer with a passion for learning based in Montreal.
      </p>
    </header>
  );
};
