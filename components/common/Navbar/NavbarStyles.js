import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  padding-top: 2rem;
`;

export const NavListItem = styled.li`
  display: inline;
  padding: 1rem;
  margin: 0rem 1rem;
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 26px;
  }

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
