import Link from 'next/link';
import Image from 'next/image';
import placeholderImage from '../../public/images/placeholder.jpg';
import { projects } from '../../constants/constants';
import { SectionSubHeader, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ProjectCard, ProjectsContainer } from './ProjectsStyles';
import Button from '../common/Button';

export default function Projects() {
  return (
    <>
      <SectionTitle fontColor="black">Recent Projects</SectionTitle>
      <ProjectsContainer>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} style={{ gridArea: i === 0 && 'main' }}>
            <SectionSubHeader>{p.name}</SectionSubHeader>
            <Image src={placeholderImage} alt="Project photo" />
            <SectionText>{p.description}</SectionText>
            <Button bg="linear-gradient(to right, rgba(34, 193, 195, 1) 0%, rgba(132, 45, 253, 1) 100%)">More</Button>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </>
  );
}
