import React from 'react';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import AboutMeImage from '../../public/images/about me image.svg';
import { Container, ImageWrapper } from './AboutMeStyles';

export const AboutMe = () => {
  return (
    <Container>
      <SectionTitle fontColor="black">About Me</SectionTitle>
      <ImageWrapper>
        <AboutMeImage height="440" />
      </ImageWrapper>
      <SectionText fontColor="black">
        I have a background in technical support and incidentally, this is what made me want to become a developer. My
        experience gave me a lot of empathy for end users as well as a deep understanding of what kind of impact
        software issues can have. My background in both supporting and building software makes me strive to produce
        quality code with the goal of great user experiences.
      </SectionText>
    </Container>
  );
};
