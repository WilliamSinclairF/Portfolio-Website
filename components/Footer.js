import styles from '../styles/Footer.module.css';
import RoundedIcon from './RoundedIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <span className="t-medium m-m w-100">Let&apos;s chat!</span>
      <span>
        You can find me on&nbsp;
        <a href="https://www.linkedin.com/in/williamsinclairf/" target="_blank" rel="noreferrer">
          <RoundedIcon>
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
          </RoundedIcon>
        </a>
        &nbsp;and&nbsp;
        <a href="https://github.com/WilliamSinclairF" target="_blank" rel="noreferrer">
          <RoundedIcon>
            <FontAwesomeIcon icon={faGithub} color="white" size="sm" />
          </RoundedIcon>
        </a>
      </span>

      <span className="t-small w-100 m-s">
        Made with&nbsp;
        <FontAwesomeIcon icon={faHeart} />
        &nbsp;by yours truly
      </span>
    </footer>
  );
}
