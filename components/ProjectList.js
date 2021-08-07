import styles from '../styles/ProjectList.module.css';
import Button from './common/Button';
import Link from 'next/link';
import Image from 'next/image';
import placeholderImage from '../public/images/placeholder.jpg';
import { projects } from '../constants/constants';
import { SectionText, SectionTitle } from '../styles/GlobalComponents';
import { ProjectCard, ProjectsContainer } from './Projects/ProjectsStyles';

export default function ProjectList() {
  return (
    <>
      <SectionTitle>Recent Projects</SectionTitle>

      <ProjectsContainer>
        {projects.map((p) => (
          <ProjectCard key={p.name}>
            <div className="text-center p-s">
              <span className="t-medium">{p.name}</span>
            </div>
            <div className="text-center">
              <Image src={placeholderImage} height="200" width="200" alt="Project photo" />
            </div>
            <SectionText>{p.description}</SectionText>
            <div className="text-center p-s">
              <Link href="" passHref>
                <Button label="See more"></Button>
              </Link>
            </div>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </>
  );
}
