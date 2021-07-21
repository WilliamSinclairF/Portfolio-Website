import styles from '../styles/SkillColumn.module.css';

export default function SkillColumn({ header, skills }) {
  return (
    <article className={`${styles.skillColumn} ${styles.borderGradient}`}>
      <span className="t-medium fw-s m-l">{header}</span>
      {skills.map((s) => (
        <span className="fw-m m-s" key={s}>
          {s}
        </span>
      ))}
    </article>
  );
}
