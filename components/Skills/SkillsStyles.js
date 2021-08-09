import styled from 'styled-components';
import BackendIcon from '../../public/icons/backend.svg';
import FrontendIcon from '../../public/icons/frontend.svg';
import DatabaseIcon from '../../public/icons/database.svg';
import DotsIcon from '../../public/icons/dots.svg';

const rotatingIconStyles = `
transition-property: transform;
  transition-duration: 1s;

  &:hover {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`;

export const RotatingFrontEndIcon = styled(FrontendIcon)`
  ${rotatingIconStyles}
`;

export const RotatingBackEndIcon = styled(BackendIcon)`
  ${rotatingIconStyles}
`;

export const RotatingDatabaseIcon = styled(DatabaseIcon)`
  ${rotatingIconStyles}
`;

export const RotatingMiscIcon = styled(DotsIcon)`
  ${rotatingIconStyles}
`;

export const SkillTitle = styled.h3`
  width: 100%;
  font-size: 24px;
  color: white;
  margin-bottom: 1rem;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px 5px;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 2px 2px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: center;
  }
`;

export const SkillColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  text-align: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Skill = styled.li`
  padding: 0px;
  margin: 5px;
  font-size: 20px;
`;
