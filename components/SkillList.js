import SectionHeader from './SectionHeader';
import styles from '../styles/SkillList.module.css';
import SkillColumn from './SkillColumn';

const frontEndSkills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Angular', 'AngularJS', 'Rails', 'JQuery'];
const backEndSkills = ['NodeJS (JS/TS)', 'Express', 'Ruby', 'Python', 'Rails', 'C#', 'REST', 'GraphQL'];
const databaseSkills = ['MySQL', 'PostgreSQL'];
const miscSkills = ['Git', 'Jira', 'Cloud', '...And always ready to learn more'];

export default function SkillList() {
  return (
    <div className="m-m">
      <div className={styles.container}>
        <SkillColumn header="Front End" skills={frontEndSkills} />
        <SkillColumn header="Back End" skills={backEndSkills} />
        <SkillColumn header="Databases" skills={databaseSkills} />
        <SkillColumn header="Other" skills={miscSkills} />
      </div>
    </div>
  );
}
