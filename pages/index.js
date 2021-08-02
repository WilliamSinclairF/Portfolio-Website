import Head from 'next/head';
import Layout from '../components/common/Layout';
import ProjectList from '../components/ProjectList';
import { Section } from '../components/common/Section';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Divider } from '../components/common/Divider';
import { Skills } from '../components/Skills/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Sinclair&apos;s Portfolio</title>
      </Head>

      <Layout>
        <Section id="hero">
          <Hero />
        </Section>

        <Section id="projects">
          <Divider />
          <ProjectList />
        </Section>

        <Section id="skills">
          <Divider />
          <Skills />
        </Section>

        <Section id="about">
          <Divider />
          <AboutMe />
        </Section>
      </Layout>
    </>
  );
}
