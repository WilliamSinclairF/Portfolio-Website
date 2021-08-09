import { Hero } from '../components/Hero/Hero';
import { AboutMe } from '../components/AboutMe';
import Layout from '../components/common/Layout/Layout';
import NavBar from '../components/common/Navbar/NavBar';
import { Section } from '../styles/GlobalComponents';
import Projects from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';
import { Footer } from '../components/common/Footer/Footer';

export default function Home() {
  return (
    <>
      <Layout bg="linear-gradient(to right, rgba(34, 193, 195, 1), rgba(132, 45, 253, 1))">
        <NavBar />
        <Section id="hero">
          <Hero />
        </Section>
      </Layout>

      <Layout>
        <Section id="projects">
          <Projects />
        </Section>
      </Layout>

      <Layout bg="hsl(232.7,27.3%,23.7%)">
        <Section id="skills">
          <Skills />
        </Section>
      </Layout>

      <Layout>
        <Section id="about" style={{ height: '50vh' }}>
          <AboutMe />
        </Section>
      </Layout>

      <Footer />
    </>
  );
}
