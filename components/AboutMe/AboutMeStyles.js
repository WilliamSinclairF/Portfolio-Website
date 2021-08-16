import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
