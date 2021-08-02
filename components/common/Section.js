import React from 'react';
import styles from '../../styles/Section.module.css';

export const Section = ({ id, children }) => {
  return (
    <section className={styles.container} id={id}>
      {children}
    </section>
  );
};
