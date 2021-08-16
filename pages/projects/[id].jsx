import { Footer } from '../../components/common/Footer/Footer';
import Navbar from '../../components/common/Navbar/Navbar';
import Image from 'next/image';
import Layout from '../../components/common/Layout/Layout';
import { projects } from '../../constants/constants';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../components/common/Button';
import styled from 'styled-components';

export const getStaticPaths = async () => {
  const paths = projects.map((project) => {
    return { params: { id: project.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const project = projects.find((project) => +project.id === +id);
  return {
    props: { project },
  };
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  height: auto;
`;

const ProjectDetailPage = ({ project }) => {
  return (
    <>
      <Layout bgColor="hsl(232.7,27.3%,23.7%)">
        <Navbar />
        <Section>
          <Container>
            <SectionTitle>{project.name}</SectionTitle>
            <Image src={project.image} height="800" width="1200" objectFit="contain" />
            <SectionText>{project.description}</SectionText>
            <Button href={project.github}>Source code</Button>
          </Container>
        </Section>
      </Layout>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
