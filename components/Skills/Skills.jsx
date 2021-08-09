import { SectionSubHeader, SectionTitle } from '../../styles/GlobalComponents';
import {
  IconContainer,
  RotatingBackEndIcon,
  RotatingDatabaseIcon,
  RotatingFrontEndIcon,
  RotatingMiscIcon,
  Skill,
  SkillColumnContainer,
  SkillsContainer,
} from './SkillsStyles';

import { backEndSkills, databaseSkills, frontEndSkills, miscSkills } from '../../constants/constants';

export const Skills = () => {
  return (
    <>
      <SectionTitle>Skills & Technologies</SectionTitle>

      <SkillsContainer>
        <SkillColumnContainer>
          <IconContainer>
            <RotatingFrontEndIcon height="50" />
          </IconContainer>
          <SectionSubHeader white>Front End</SectionSubHeader>
          {frontEndSkills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillColumnContainer>

        <SkillColumnContainer>
          <IconContainer>
            <RotatingBackEndIcon height="50" />
          </IconContainer>
          <SectionSubHeader white>Back End</SectionSubHeader>
          {backEndSkills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillColumnContainer>

        <SkillColumnContainer>
          <IconContainer>
            <RotatingDatabaseIcon height="50" />
          </IconContainer>
          <SectionSubHeader white>Databases</SectionSubHeader>
          {databaseSkills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillColumnContainer>

        <SkillColumnContainer>
          <IconContainer>
            <RotatingMiscIcon height="50" />
          </IconContainer>
          <SectionSubHeader white>Misc</SectionSubHeader>
          {miscSkills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillColumnContainer>
      </SkillsContainer>
    </>
  );
};
