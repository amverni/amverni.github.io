import { experienceData } from 'assets/data/experiences/experiences';
import { Section } from 'components/shared/section/section';
import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import React from 'react';
import { ExperienceInfo } from 'types/experience.types';
import { Experience } from './experience/experience';
import { useStyles } from './experiences.styles';

export const Experiences: React.FC = () => {
  const {
    workExperiences: workExperiencesData,
    researchExperiences: researchExperiencesData,
    leadershipExperiences: leadershipExperienesData,
    educationExperiences: educationExperiencesData,
    projectExperiences: projectExperiencesData
  } = experienceData;
  const styles = useStyles();

  let numExperiences = 0;
  const createExperienceComponent = (
    experienceInfo: ExperienceInfo,
    isLastInSection: boolean
  ): JSX.Element => (
    <>
      <Experience
        experienceInfo={experienceInfo}
        imageLocation={numExperiences++ % 2 ? 'left' : 'right'}
        key={`${experienceInfo.title} ${experienceInfo.entity?.org ?? ''}`}
      />
      {!isLastInSection && (<span className={styles.divider} />)}
    </>
  );

  const workExperiences = workExperiencesData.map((experience, index) => createExperienceComponent(
    experience,
    index === workExperiencesData.length - 1
  ));
  const researchExperiences = researchExperiencesData.map(
    (experience, index) => createExperienceComponent(
      experience,
      index === researchExperiencesData.length - 1
    )
  );
  const leadershipExperiences = leadershipExperienesData.map(
    (experience, index) => createExperienceComponent(
      experience,
      index === leadershipExperienesData.length - 1
    )
  );
  const educationExperiences = educationExperiencesData.map(
    (experience, index) => createExperienceComponent(
      experience,
      index === educationExperiencesData.length - 1
    )
  );
  const projectExperiences = projectExperiencesData.map(
    (experience, index) => createExperienceComponent(
      experience,
      index === projectExperiencesData.length - 1
    )
  );

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
