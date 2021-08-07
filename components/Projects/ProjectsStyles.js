import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const ProjectCard = styled.article`
  min-height: 300px;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 3rem;
  border-style: solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(132, 45, 253, 1) 100%);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
