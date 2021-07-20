import styles from '../styles/SkillColumn.module.css';

export default function SkillColumn({ header, skills }) {
  return (
    <article className={styles.skillColumn}>
      <span className="t-medium fw-s m-l">{header}</span>
      {skills.map((s) => (
        <span className="fw-m m-s">{s}</span>
      ))}
    </article>
  );
}
