import SectionHeader from './SectionHeader';
import styles from '../styles/Background.module.css';

export default function Background() {
  return (
    <>
      <SectionHeader title="Background" />
      <div className={styles.container}>
        <span className="t-medium">A bit about me</span>
        <p className="t-small fw-m">
          I come from a technical support background, I have a lot of empathy for end users and the issues they can
          experience. This pushes me to write quality code and create experiences that users will enjoy with as few bugs
          as possible!
        </p>

        <p className="t-small fw-m">
          Even in tough situations, I keep a smile on and stay positive while I work to make things better. I love
          sharing knowledge with teammates and I am always ready to learn and experiment with new things.
        </p>

        <span className="t-large">Lets talk!</span>
      </div>
    </>
  );
}
