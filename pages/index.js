import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import ProjectList from '../components/ProjectList';
import SkillList from '../components/SkillList';
import Background from '../components/Background';

const heroLinks = [
  { name: 'Projects', link: '/projects' },
  { name: 'A bit about me', link: '/about' },
];

export default function Home() {
  return (
    <>
      <div className={styles.heroBg}>
        <NavBar />
        <Layout>
          <header className={styles.hero}>
            <span className="t-largest block p-l white fw-l">
              Hi, I'm William! <br /> I'm a software developer based in beautiful Montreal.
            </span>
            <span className="t-medium block m-m white">
              I'm a fearless learner who's passionate about learning new technologies.
            </span>
            {/* <span className="t-small text-center block m-l white fw-l">
            While you're here, why not check these pages out:
          </span>
          <div className="text-center">
            {heroLinks.map((i) => (
              <Link href={i.link}>
                <Button label={i.name}></Button>
              </Link>
            ))}
          </div> */}
          </header>
        </Layout>
      </div>

      <section>
        <Layout>
          <ProjectList />
        </Layout>
      </section>

      <section className={styles.skillsBg}>
        <Layout>
          <SkillList />
        </Layout>
      </section>

      <section>
        <Layout>
          <Background />
        </Layout>
      </section>
    </>
  );
}
