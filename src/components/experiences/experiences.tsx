import { experienceData } from 'assets/data/experiences/experiences';
import { Section } from 'components/shared/section/section';
import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import React from 'react';
import { Experience } from './experience/experience';
import { ExperienceInfo } from './experience/experience.types';

export const Experiences: React.FC = () => {
  const {
    workExperiences: workExperiencesData,
    researchExperiences: researchExperiencesData,
    leadershipExperiences: leadershipExperienesData,
    educationExperiences: educationExperiencesData,
    projectExperiences: projectExperiencesData
  } = experienceData;

  let numExperiences = 0;
  const createExperienceComponent = (experienceInfo: ExperienceInfo): JSX.Element => (
    <Experience
      experienceInfo={experienceInfo}
      imageLocation={numExperiences++ % 2 ? 'left' : 'right'}
      key={experienceInfo.title}
    />
  );

  const workExperiences = workExperiencesData.map(createExperienceComponent);
  const researchExperiences = researchExperiencesData.map(createExperienceComponent);
  const leadershipExperiences = leadershipExperienesData.map(createExperienceComponent);
  const educationExperiences = educationExperiencesData.map(createExperienceComponent);
  const projectExperiences = projectExperiencesData.map(createExperienceComponent);

  return (
    <SectionsContainer>
      <Section title="Work Experience">
        {workExperiences}
      </Section>
      <Section title="Research Experience">
        {researchExperiences}
      </Section>
      <Section title="Leadership Experience">
        {leadershipExperiences}
      </Section>
      <Section title="Education">
        {educationExperiences}
      </Section>
      <Section title="Project Experience">
        {projectExperiences}
      </Section>
    </SectionsContainer>
  );
};
