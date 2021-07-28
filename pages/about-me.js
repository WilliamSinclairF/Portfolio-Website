import NavBar from '../components/NavBar';
import SkillList from '../components/SkillList';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import AboutMeText from '../components/AboutMeText';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="mainColorBg" style={{ color: 'white' }}>
        <NavBar />
        <Layout>
          <SectionHeader title="About Me" color="white" />
          <AboutMeText />
          <SectionHeader title="Skills" color="white" />
          <SkillList />
        </Layout>
      </section>
      <Footer />
    </>
  );
}
