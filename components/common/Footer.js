import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <SocialLinks />
    </footer>
  );
}
