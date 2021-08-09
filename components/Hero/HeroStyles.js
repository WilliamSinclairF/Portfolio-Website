import styled from 'styled-components';

export const HeroContainer = styled.header`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
