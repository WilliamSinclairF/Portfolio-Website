import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>{children}</div>
    </div>
  );
}
