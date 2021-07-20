import styles from '../styles/Button.module.css';

export default function Button({ label }) {
  return <a className={styles.button}>{label}</a>;
}
