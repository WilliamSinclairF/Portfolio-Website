import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';
import SectionHeader from '../components/SectionHeader';

export default function Projects() {
  return (
    <>
      <section className="mainColorBg">
        <NavBar />
        <Layout>
          <SectionHeader title="Recent Projects" color="white" />

          <ProjectList />
        </Layout>
      </section>
      <Footer>
        <SectionHeader title="Contact Me" color="black" />
      </Footer>
    </>
  );
}
