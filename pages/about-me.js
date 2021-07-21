import NavBar from '../components/NavBar';
import SkillList from '../components/SkillList';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <section className="mainColorBg" style={{ height: '80vh', color: 'white' }}>
        <NavBar />
        <Layout>
          <SectionHeader title="Skills" color="white" />
          <SkillList />
        </Layout>
      </section>
      <Footer>
        <SectionHeader title="Contact Me" color="black" />
      </Footer>
    </>
  );
}
