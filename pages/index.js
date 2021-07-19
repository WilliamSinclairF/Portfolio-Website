import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const heroLinks = [
  { name: 'Projects', link: '/projects' },
  { name: 'A bit about me', link: '/about' },
];

export default function Home() {
  return (
    <Layout>
      <header className={styles.hero}>
        <span className="t-largest text-center block p-l">
          Hi, I'm William! <br /> I'm a software developer from beautiful Montreal.
        </span>
        <span className="t-medium text-center block m-m">
          I'm a fearless learner who's passionate about learning new technologies.
        </span>
        <span className="t-small text-center block m-l">While you're here, why not check these pages out:</span>
        <div className="text-center">
          {heroLinks.map((i) => (
            <div className="inline p-m">
              <Link href={i.link}>
                <a>{i.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </header>
      <main></main>
    </Layout>
  );
}
