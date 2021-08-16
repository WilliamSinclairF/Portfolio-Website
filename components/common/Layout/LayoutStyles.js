import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.background1};
  background: ${(props) => props.bg};
  width: 100%;
  min-height: 100vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: auto;
  }
`;
