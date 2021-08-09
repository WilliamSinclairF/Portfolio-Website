import styled from 'styled-components';

const ButtonBack = styled.div`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 1rem;
  background: ${({ bg }) => (bg ? bg : '#0070f3')};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: 1;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
  }
`;

const ButtonFront = styled.a`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ bg }) => (bg ? bg : '#0070f3')};
  opacity: 1;
  transition: 0.4s ease;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

const Button = ({ children, onClick, ...props }) => (
  <ButtonBack {...props}>
    <ButtonFront {...props} onClick={onClick}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
