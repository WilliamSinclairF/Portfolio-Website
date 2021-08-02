import styles from '../../styles/Button.module.css';

export default function Button({ label, onClick }) {
  return (
    <a className={styles.button} onClick={onClick}>
      {label}
    </a>
  );
}
