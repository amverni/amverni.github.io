import React from 'react';
import { experiences as experiencesData } from 'assets/data/experiences';
import { Section } from 'components/shared/section/section';
import { stringifyTimeRange } from 'utils/stringifyTimeRange';
import { useStyles } from './experiences.styles';
import type {
  CompanyInfo,
  EducationExperienceInfo,
  ExperienceCategory,
  ExperienceInfo,
  LeadershipExperienceInfo,
  ProjectExperienceInfo,
  ResearchExperienceInfo,
  WorkExperienceInfo
} from './experiences.types';
import { ExperienceCard } from './experienceCard/experienceCard';

function isLeft(index: number): boolean {
  return !!(index % 2);
}

function getTitle(experience: ExperienceInfo): string {
  return !experience.titleDisambiguation ?
    experience.title : `${experience.title} - ${experience.titleDisambiguation}`;
}

function getCompanyTidbit(company: CompanyInfo): string {
  let tidbit = company.name;
  tidbit += company.disambiguation ? `, ${company.disambiguation}` : '';
  tidbit += ` - ${company.location}`;
  return tidbit;
}

function makeExperienceCard(
  experience: ExperienceInfo,
  index: number,
  subtitle1?: string,
  subtitle2?: string,
  subtitle3?: string
): JSX.Element {
  const title = getTitle(experience);

  return (
    <ExperienceCard
      title={title}
      subtitle1={subtitle1}
      subtitle2={subtitle2}
      subtitle3={subtitle3}
      description={experience.description}
      technicalSkills={experience.technicalSkills}
      image={experience.image}
      imagePosition={isLeft(index) ? 'left' : 'right'}
    />
  );
}

function getWorkExperiences(startingIndex: number): JSX.Element[] {
  const workExperienceData: WorkExperienceInfo[] = experiencesData.filter(
    (experience): experience is WorkExperienceInfo => experience.category === 'work'
  );

  return workExperienceData.map((experience, index) => {
    const subtitle1 = getCompanyTidbit(experience.company);
    const subtitle2 = stringifyTimeRange(experience.timeRange.start, experience.timeRange.end);

    return makeExperienceCard(experience, startingIndex + index, subtitle1, subtitle2);
  });
}

function getResearchExperiences(startingIndex: number): JSX.Element[] {
  const researchExperienceData: ResearchExperienceInfo[] = experiencesData.filter(
    (experience): experience is ResearchExperienceInfo => experience.category === 'research'
  );

  return researchExperienceData.map((experience, index) => {
    const title = getTitle(experience);
    const subtitle1 = getCompanyTidbit(experience.lab);
    const subtitle2 = stringifyTimeRange(experience.timeRange.start, experience.timeRange.end);

    return (
      <ExperienceCard
        title={title}
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        description={experience.description}
        technicalSkills={experience.technicalSkills}
        image={experience.image}
        imagePosition={isLeft(startingIndex + index) ? 'left' : 'right'}
      />
    );
  });
}

function getLeadershipExperiences(startingIndex: number): JSX.Element[] {
  const leadershipExperienceData: LeadershipExperienceInfo[] = experiencesData.filter(
    (experience): experience is LeadershipExperienceInfo => experience.category === 'leadership'
  );

  return leadershipExperienceData.map((experience, index) => {
    const subtitle1 = getCompanyTidbit(experience.company);
    const subtitle2 = stringifyTimeRange(experience.timeRange.start, experience.timeRange.end);

    return makeExperienceCard(experience, startingIndex + index, subtitle1, subtitle2);
  });
}

function getEducationExperiences(startingIndex: number): JSX.Element[] {
  const educationExperienceData: EducationExperienceInfo[] = experiencesData.filter(
    (experience): experience is EducationExperienceInfo => experience.category === 'education'
  );

  return educationExperienceData.map((experience, index) => {
    const subtitle1 = getCompanyTidbit(experience.school);
    const subtitle2 = stringifyTimeRange(experience.timeRange.start, experience.timeRange.end);
    const subtitle3 = experience.gpa && `${experience.gpa} / 4.00`;

    return makeExperienceCard(experience, startingIndex + index, subtitle1, subtitle2, subtitle3);
  });
}

function getProjectExperiences(startingIndex: number): JSX.Element[] {
  const projectExperienceData: ProjectExperienceInfo[] = experiencesData.filter(
    (experience): experience is ProjectExperienceInfo => experience.category === 'project'
  );

  return projectExperienceData.map((experience, index) => {
    const subtitle1 = experience.company && getCompanyTidbit(experience.company);
    const subtitle2 = experience.timeRange &&
      stringifyTimeRange(experience.timeRange.start, experience.timeRange.end);

    return makeExperienceCard(experience, startingIndex + index, subtitle1, subtitle2);
  });
}

const sectionTitles: Record<ExperienceCategory, string> = {
  work: 'Work',
  research: 'Research',
  leadership: 'Leadership',
  education: 'Education',
  project: 'Projects'
};

const experiencesSections: ExperienceCategory[] = Object.keys(sectionTitles) as (
  keyof typeof sectionTitles
)[];

export const Experiences: React.FC = () => {
  const styles = useStyles();

  let experiencesCount = 0;
  const workExperiences = getWorkExperiences(0);
  experiencesCount += workExperiences.length;

  const researchExperiences = getResearchExperiences(experiencesCount);
  experiencesCount += researchExperiences.length;

  const leadershipExperiences = getLeadershipExperiences(experiencesCount);
  experiencesCount += leadershipExperiences.length;

  const educationExperiences = getEducationExperiences(experiencesCount);
  experiencesCount += educationExperiences.length;

  const projectExperiences = getProjectExperiences(experiencesCount);

  return (
    <>
      <Section title="Work">
        {workExperiences}
      </Section>
      <Section title="Research">
        {researchExperiences}
      </Section>
      <Section title="Leadership">
        {leadershipExperiences}
      </Section>
      <Section title="Education">
        {educationExperiences}
      </Section>
      <Section title="Project">
        {projectExperiences}
      </Section>
    </>
  );
};
