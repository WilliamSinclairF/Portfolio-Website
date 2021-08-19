import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: rgba(255, 255, 255, 0.75);
  margin: 0rem 1.5rem;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 25px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLinks = () => {
  return (
    <LinksContainer>
      <Link href="https://www.linkedin.com/in/williamsinclairf/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </Link>
      <Link href="https://github.com/WilliamSinclairF" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
    </LinksContainer>
  );
};
