export type ExperienceCategory = 'work' | 'education' | 'project' | 'research' | 'leadership';

export type ExperienceInfo = WorkExperienceInfo | EducationExperienceInfo | ProjectExperienceInfo | ResearchExperienceInfo | LeadershipExperienceInfo;

export type WorkExperienceInfo = ExperienceInfoBase & {
  category: 'work';
  company: CompanyInfo;
  timeRange: TimeInfo;
}

export type EducationExperienceInfo = ExperienceInfoBase & {
  category: 'education';
  gpa?: string;
  school: CompanyInfo;
  timeRange: TimeInfo;
}

export type ProjectExperienceInfo = ExperienceInfoBase & {
  category: 'project';
  company?: CompanyInfo;
  timeRange?: TimeInfo;
}

export type ResearchExperienceInfo = ExperienceInfoBase & {
  category: 'research';
  lab: CompanyInfo;
  timeRange: TimeInfo;
}

export type LeadershipExperienceInfo = ExperienceInfoBase & {
  category: 'leadership';
  company: CompanyInfo;
  timeRange: TimeInfo;
}

type ExperienceInfoBase = {
  category: ExperienceCategory;
  title: string;
  titleDisambiguation?: string;
  image: ImageInfo;
  description: [string, ...string[]]; /* Description broken down by paragraph*/
  technicalSkills?: [string, ...string[]];
  otherInfo?: any; /* Use to store other info that we might want to render in the future */
}

export type CompanyInfo = {
  name: string;
  disambiguation?: string;
  location: string;
}

export type ImageInfo = {
  src: string;
  alt: string;
}

type TimeInfo = {
  start: Date;
  end?: Date;
}