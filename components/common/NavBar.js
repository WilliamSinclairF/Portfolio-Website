import styles from '../../styles/NavBar.module.css';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'About me', link: '/about-me' },
];

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <div>
        {navItems.map((i) => (
          <li className={styles.listItem} key={i.name}>
            <Link href={i.link}>
              <a className={styles.link}>{i.name}</a>
            </Link>
          </li>
        ))}
      </div>
      <SocialLinks />
    </nav>
  );
}
