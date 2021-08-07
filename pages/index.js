import Head from 'next/head';
import ProjectList from '../components/ProjectList';
import { Hero } from '../components/Hero/Hero';
import { AboutMe } from '../components/AboutMe';
import { Divider } from '../components/common/Divider';
import { Skills } from '../components/Skills/Skills';
import Layout from '../components/common/Layout/Layout';
import NavBar from '../components/common/Navbar/NavBar';
import Footer from '../components/common/Footer';
import { Section } from '../styles/GlobalComponents';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Sinclair&apos;s Portfolio</title>
      </Head>

      <NavBar />
      <Layout bg="radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(132, 45, 253, 1) 100%)">
        <Section id="hero">
          <Hero />
        </Section>
      </Layout>

      <Layout>
        <Section id="projects">
          <Divider />
          <ProjectList />
        </Section>
      </Layout>

      <Layout>
        <Section id="skills">
          <Divider />
          <Skills />
        </Section>
      </Layout>

      <Layout>
        <Section id="about">
          <Divider />
          <AboutMe />
        </Section>
      </Layout>
      <Footer />
    </>
  );
}
