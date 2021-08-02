import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../../styles/SocialLinks.module.css';

export const SocialLinks = () => {
  return (
    <div className={styles.linksContainer}>
      <a href="https://www.linkedin.com/in/williamsinclairf/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialLink} />
      </a>
      <a href="https://github.com/WilliamSinclairF" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className={styles.socialLink} />
      </a>
    </div>
  );
};
