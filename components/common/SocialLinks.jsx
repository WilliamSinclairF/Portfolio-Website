import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  height: 45px;
  color: white;
  margin: 0rem 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 25px;
  }
`;

export const SocialLinks = () => {
  return (
    <div>
      <Link href="https://www.linkedin.com/in/williamsinclairf/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link href="https://github.com/WilliamSinclairF" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
  );
};
