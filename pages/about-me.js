import NavBar from '../components/NavBar';
import SkillList from '../components/SkillList';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="mainColorBg" style={{ color: 'white' }}>
        <NavBar />

        <Layout>
          <SectionHeader title="About Me" color="white" />
          <p style={{ fontSize: '1.5rem' }} className="text-center">
            I have a background in technical support and incidentally, this is what made me want to become a developer.
            My experience gave me a lot of empathy for end users as well as a deep understanding of what kind of impact
            software issues can have. My background in both supporting and building software makes me strive to produce
            quality code with the goal of great user experiences.
          </p>
          <SectionHeader title="Skills" color="white" />
          <SkillList />
        </Layout>
      </section>
      <Footer />
    </>
  );
}
