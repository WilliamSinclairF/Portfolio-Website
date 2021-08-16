import { projects } from '../../constants/constants';
import { SectionTitle } from '../../styles/GlobalComponents';
import { ProjectsContainer } from './ProjectsStyles';
import { ProjectDetail } from './ProjectDetail';

export default function Projects() {
  return (
    <>
      <SectionTitle fontColor="black">Recent Projects</SectionTitle>
      <ProjectsContainer>
        {projects.map((p) => (
          <ProjectDetail project={p} key={p.id} />
        ))}
      </ProjectsContainer>
    </>
  );
}
