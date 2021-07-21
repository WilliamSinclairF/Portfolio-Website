import styles from '../styles/Footer.module.css';
import RoundedIcon from './RoundedIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader';
import Button from './Button';

export default function Footer({ children }) {
  return (
    <footer className={styles.container}>
      {children}
      <span className="t-medium">
        Let's chat! You can find me on&nbsp;
        <a href="https://www.linkedin.com/in/williamsinclairf/" target="_blank" rel="noreferrer">
          <RoundedIcon>
            <FontAwesomeIcon icon={faLinkedinIn} color="blueviolet" />
          </RoundedIcon>
        </a>
        &nbsp;and&nbsp;
        <a href="https://github.com/WilliamSinclairF" target="_blank" rel="noreferrer">
          <RoundedIcon>
            <FontAwesomeIcon icon={faGithub} color="blueviolet" size="sm" />
          </RoundedIcon>
        </a>
      </span>

      <div className={styles.bottomBorder}>
        <span className="t-small">
          Made with&nbsp;
          <FontAwesomeIcon icon={faHeart} />
          &nbsp;by yours truly
        </span>
      </div>
    </footer>
  );
}
