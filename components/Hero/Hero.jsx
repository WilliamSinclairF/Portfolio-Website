import React from 'react';
import HeroImage from '../../public/images/heroimage.svg';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../common/Button';
import { HeroContainer, ImageContainer } from './HeroStyles';

export const Hero = () => {
  return (
    <HeroContainer>
      <SectionTitle main fontColor="white">
        Hi, I&apos;m William. <br />
        Nice to meet you!
      </SectionTitle>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>
      <SectionText center>
        I&apos;m a fearless software developer with a passion for learning based in Montreal.
      </SectionText>
      <Button href="#projects">Recent projects</Button>
      <Button href="#about">A bit about me</Button>
    </HeroContainer>
  );
};
