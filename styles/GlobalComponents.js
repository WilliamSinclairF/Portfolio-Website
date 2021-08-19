import styled from 'styled-components';

export const SectionTitle = styled.h1`
  width: 100%;
  color: ${(props) => (props.fontColor ? props.fontColor : props.theme.primary1)};
  text-align: ${(props) => (props.alignment ? props.alignment : 'center')};
  font-weight: 800;
  font-size: ${(props) => (props.main ? '62px' : '56px')};
  line-height: ${(props) => (props.main ? '62px' : '56px')};
  margin-bottom: 16px;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    padding: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    padding: 0;
  }
`;

export const SectionText = styled.p`
  text-align: ${(props) => props.center && 'center'};
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => (props.fontColor ? props.fontColor : props.theme.colors.primary2)};
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Section = styled.section`
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
  }
`;

export const SectionSubHeader = styled.h3`
  font-size: 24px;
  color: ${({ white }) => (white ? 'white' : 'black')};
  text-align: ${({ center }) => (center ? 'center' : '')};
  font-weight: 800;
  margin-bottom: 1rem;
`;
