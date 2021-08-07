import Image from 'next/image';
import React from 'react';
import heroImage from '../../public/images/undraw_Coding_re_iv62.svg';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HeroContainer, ImageContainer } from './HeroStyles';

export const Hero = () => {
  return (
    <HeroContainer>
      <SectionTitle main>
        Hi, I&apos;m William. <br />
        Nice to meet you!
      </SectionTitle>
      <ImageContainer>
        <Image src={heroImage} height="300" />
      </ImageContainer>
      <SectionText center>
        I&apos;m a fearless software developer with a passion for learning based in Montreal.
      </SectionText>
    </HeroContainer>
  );
};
