import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import ProjectList from '../components/ProjectList';
import SkillList from '../components/SkillList';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className={styles.heroBg}>
        <NavBar />
        <Layout>
          <header className={styles.hero}>
            <span className="t-largest block p-l white fw-l text-center">
              Hi, I&apos;m William. <br />
              Nice to meet you!
            </span>
            <span className="t-medium block m-m white text-center">
              I&apos;m a fearless software developer who&apos;s passionate about learning new technologies.
            </span>
          </header>
        </Layout>
      </div>

      <section>
        <Layout>
          <SectionHeader title="About Me" color="black" />
          <SkillList />
        </Layout>
      </section>

      <section className={styles.skillsBg}>
        <Layout>
          <SectionHeader title="Recent Projects" color="white" />
          <ProjectList />
        </Layout>
      </section>

      <Footer scrollToTop={scrollToTop}>
        <SectionHeader title="Contact Me" color="black" />
      </Footer>
    </>
  );
}
