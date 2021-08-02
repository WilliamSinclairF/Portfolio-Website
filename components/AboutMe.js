import React from 'react';
import { Divider } from './common/Divider';
import SectionHeader from './common/SectionHeader';
import SkillList from './SkillList';

export const AboutMe = () => {
  return (
    <>
      <SectionHeader title="Skills" />
      <SkillList />
      <Divider />

      <SectionHeader title="About Me" />
      <p className="sectionText">
        I have a background in technical support and incidentally, this is what made me want to become a developer. My
        experience gave me a lot of empathy for end users as well as a deep understanding of what kind of impact
        software issues can have. My background in both supporting and building software makes me strive to produce
        quality code with the goal of great user experiences.
      </p>
    </>
  );
};
