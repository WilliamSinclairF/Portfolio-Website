import styles from '../styles/Header.module.css';
import Layout from './Layout';
import Link from 'next/link';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'About me', link: '/about-me' },
];

export default function Header() {
  return (
    <nav className={styles.navContainer}>
      <Layout>
        <ul className={styles.linkList}>
          {navItems.map((i) => (
            <li className={styles.listItem}>
              <Link href={i.link}>
                <a className={styles.link}>{i.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </nav>
  );
}
