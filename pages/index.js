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
      <Head>
        <title>William Sinclair&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

      <section style={{ paddingBottom: '5vh' }}>
        <Layout>
          <SectionHeader title="About Me" color="black" />
          <p style={{ fontSize: '1.5rem' }} className="text-center">
            I have a background in technical support and incidentally, this is what made me want to become a developer.
            My experience gave me a lot of empathy for end users as well as a deep understanding of what kind of impact
            software issues can have. My background in both supporting and building software makes me strive to produce
            quality code with the goal of great user experiences.
          </p>
          <SectionHeader title="Skills" color="black" />
          <SkillList />
        </Layout>
      </section>

      <section className={styles.skillsBg}>
        <Layout>
          <SectionHeader title="Recent Projects" color="white" />
          <ProjectList />
        </Layout>
      </section>

      <Footer scrollToTop={scrollToTop} />
    </>
  );
}
