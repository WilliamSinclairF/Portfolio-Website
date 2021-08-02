import Head from 'next/head';
import Layout from '../components/common/Layout';
import ProjectList from '../components/ProjectList';
import SkillList from '../components/SkillList';
import SectionHeader from '../components/common/SectionHeader';
import { Section } from '../components/common/Section';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Divider } from '../components/common/Divider';

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

        <Section id="aboutme">
          <Divider />
          <AboutMe />
        </Section>
      </Layout>
    </>
  );
}
