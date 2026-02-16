import { CSSProperties } from 'react';
import { ListAtLeastOne } from './utils.types';

export type ExperienceInfo = {
  title: string;
  previousTitles?: ListAtLeastOne<string>;
  entity?: {
    name: string;
    location: string;
    org?: string;
  };
  timeline?: {
    startDate: Date;
    endDate?: Date;
  };
  note?: string;
  descriptionFilename: string;
  skills?: ListAtLeastOne<string>;
  image: {
    src: string;
    alt: string;
    zoomable: boolean;
    style?: CSSProperties;
  };
}

export type WorkExperienceInfo = Omit<ExperienceInfo, 'note'>;

export type ResearchExperienceInfo = Omit<ExperienceInfo, 'note' | 'previousTitles'>;

export type LeadershipExperienceInfo = Omit<ExperienceInfo, 'note' | 'skills' | 'previousTitles'>;

export type EducationExperienceInfo = Omit<ExperienceInfo, 'previousTitles'>;

export type ProjectExperienceInfo = Omit<ExperienceInfo, 'previousTitles'>;

export type ExperienceInfos = {
  workExperiences: WorkExperienceInfo[];
  researchExperiences: ResearchExperienceInfo[];
  leadershipExperiences: LeadershipExperienceInfo[];
  educationExperiences: EducationExperienceInfo[];
  projectExperiences: ProjectExperienceInfo[];
}
