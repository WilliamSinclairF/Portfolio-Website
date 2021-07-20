import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'About me', link: '/about-me' },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <nav className={`${styles.navContainer} p-l`}>
        <ul className={styles.linkList}>
          {navItems.map((i) => (
            <li className={`${styles.listItem} ${router.pathname === i.link ? styles.active : ''}`}>
              <Link href={i.link}>
                <a className={styles.link}>{i.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
