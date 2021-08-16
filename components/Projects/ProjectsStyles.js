import Image from 'next/image';
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

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    place-items: center;
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
  place-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const TagsContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  margin: 5px;
  padding: 1rem;
  border-radius: 20px;
  background-color: aliceblue;
`;
