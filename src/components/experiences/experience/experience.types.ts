export type ExperienceInfo = {
  title: string;
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
  skills?: [string, ...string[]];
  image: {
    src: string;
    alt: string;
    zoomable: boolean;
  };
}

export type WorkExperienceInfo = Required<Omit<ExperienceInfo, 'note'>>;

export type ResearchExperienceInfo = Required<Omit<ExperienceInfo, 'note'>>;

export type LeadershipExperienceInfo = Required<Omit<ExperienceInfo, 'note'>>;

export type EducationExperienceInfo = Required<Omit<ExperienceInfo, 'note'>>;

export type ProjectExperienceInfo = ExperienceInfo;

export type ExperienceInfos = {
  workExperiences: WorkExperienceInfo[];
  researchExperiences: ResearchExperienceInfo[];
  leadershipExperiences: LeadershipExperienceInfo[];
  educationExperiences: EducationExperienceInfo[];
  projectExperiences: ProjectExperienceInfo[];
}
