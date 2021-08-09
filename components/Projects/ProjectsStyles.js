import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'main main main'
    '. . .';
  align-items: stretch;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'main main'
      '. .'
      '. .';
  }
`;

export const ProjectCard = styled.article`
  border: 1px solid white;
  padding: 2rem;
  color: black;
  box-shadow: 0 0 1px 2px #d0d0d0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const Link = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;
