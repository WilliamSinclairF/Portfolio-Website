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
`;
