import styles from '../styles/SkillColumn.module.css';

export default function SkillColumn({ header, skills }) {
  return (
    <article className={`${styles.skillColumn} ${styles.borderGradient}`}>
      <span className="sectionText">{header}</span>
      {skills.map((s) => (
        <span className="m-s" key={s}>
          {s}
        </span>
      ))}
    </article>
  );
}
