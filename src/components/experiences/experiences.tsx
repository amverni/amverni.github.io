import { experienceData } from 'assets/data/experiences/experiences';
import { Section } from 'components/shared/section/section';
import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import React from 'react';
import { Experience } from './experience/experience';

export const Experiences: React.FC = () => {
  const {
    workExperiences: workExperiencesData,
    projectExperiences: projectExperiencesData
  } = experienceData;

  let numExperiences = 0;
  const workExperiences = workExperiencesData.map(
    (experienceInfo) => (
      <Experience
        experienceInfo={experienceInfo}
        imageLocation={numExperiences++ % 2 ? 'left' : 'right'}
        key={experienceInfo.title}
      />
    )
  );

  const projectExperiences = projectExperiencesData.map(
    (experienceInfo) => (
      <Experience
        experienceInfo={experienceInfo}
        imageLocation={(numExperiences++) % 2 ? 'left' : 'right'}
        key={experienceInfo.title}
      />
    )
  );

  return (
    <SectionsContainer>
      <Section title="Work Experience">
        {workExperiences}
      </Section>
      <Section title="Project Experience">
        {projectExperiences}
      </Section>
    </SectionsContainer>
  );
};
