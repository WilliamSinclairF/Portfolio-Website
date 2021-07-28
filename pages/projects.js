import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
