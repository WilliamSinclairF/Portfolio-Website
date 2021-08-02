import styles from '../../styles/Layout.module.css';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
