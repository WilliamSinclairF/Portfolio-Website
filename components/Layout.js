import styles from '../styles/Layout.module.css';
export default function Layout({ children }) {
  return <div className={styles.layoutContainer}>{children}</div>;
}
