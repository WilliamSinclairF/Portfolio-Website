import Image from 'next/image';
import Link from 'next/link';
import { SectionSubHeader, SectionText } from '../../styles/GlobalComponents';
import Button from '../common/Button';
import { ProjectCard, ProjectImageContainer, Tag, TagsContainer } from './ProjectsStyles';

export const ProjectDetail = ({ project, children }) => {
  return (
    <ProjectCard key={project.name} style={{ gridArea: project.id === 1 && 'main' }}>
      <SectionSubHeader>{project.name}</SectionSubHeader>
      <ProjectImageContainer>
        <Image
          src={project.image}
          alt="Project photo"
          height="400"
          width="528"
          objectFit="contain"
          placeholder={typeof project.image !== 'string' && 'blur'}
        />
      </ProjectImageContainer>
      <SectionText>{project.shortDescription}</SectionText>
      <TagsContainer>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <Link passHref href={`/projects/${project.id}`}>
        <Button bg="linear-gradient(to right, rgba(34, 193, 195, 1) 0%, rgba(132, 45, 253, 1) 100%)">View more</Button>
      </Link>
      {children}
    </ProjectCard>
  );
};
