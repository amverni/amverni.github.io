import { ExperienceInfos } from 'components/experiences/experience/experience.types';
import microsoftLogo from 'assets/img/experiences/microsoft.png';
import copilotLogo from 'assets/img/experiences/copilot.svg';
import bingChatEnterprise from 'assets/img/experiences/bingChatEnterprise.png';
import hockeyStickTableImage from 'assets/img/experiences/hockeyStickTable.jpg';
import myInstructionalAssistantImage from 'assets/img/experiences/myInstructionalAssistant.png';
import personalWebsiteImage from 'assets/img/experiences/website.png';
import mroverProjectImage from 'assets/img/experiences/mrover_navigation_simulator.png';
import microsoftIdentityDescription from './microsoft_identity.txt';
import microsoftM365CopilotDescription from './microsoft_m365Copilot.txt';
import microsoftEnterpriseSearchDescription from './microsoft_enterpriseSearch.txt';
import hockeyStickTableDescription from './hockeyStickTable.txt';
import myInstructionalAssistantDescription from './michigan_myInstructionalAssistant.txt';
import personalWebsiteDescription from './personalWebsite.txt';
import mroverProjectDescription from './mrover_project.txt';

export const experienceData: ExperienceInfos = {
  workExperiences: [
    {
      title: 'Software Engineer 2',
      entity: {
        name: 'Microsoft',
        location: 'Redmond, WA',
        org: 'M365 Copilot'
      },
      timeline: {
        startDate: new Date('07/01/2024')
      },
      descriptionFilename: microsoftM365CopilotDescription,
      skills: ['React', 'Fluent UI', 'Storybook', 'Jest'],
      image: {
        src: copilotLogo,
        alt: 'M365 Copilot Logo',
        zoomable: false
      }
    },
    {
      title: 'Software Engineer 2, Software Engineer',
      entity: {
        name: 'Microsoft',
        location: 'Redmond, WA',
        org: 'Bing Enterprise Search'
      },
      timeline: {
        startDate: new Date('06/06/2022'),
        endDate: new Date('06/30/2024')
      },
      descriptionFilename: microsoftEnterpriseSearchDescription,
      skills: ['React', 'Web Components', 'JavaScript', 'Fluent UI', 'Storybook', 'Jest'],
      image: {
        src: bingChatEnterprise,
        alt: 'Bing Chat Enterprise UX snippet',
        zoomable: false
      }
    },
    {
      title: 'Software Engineer',
      entity: {
        name: 'Microsoft',
        location: 'Redmond, WA',
        org: 'Azure Identity'
      },
      timeline: {
        startDate: new Date('01/25/2021'),
        endDate: new Date('06/03/2022')
      },
      descriptionFilename: microsoftIdentityDescription,
      skills: ['Typescript', 'KnockoutJS', 'React', 'C#', 'Sinon', 'Jasmine', 'Mocha', 'HTML', 'CSS', 'Azure Pipelines', 'Git'],
      image: {
        src: microsoftLogo,
        alt: 'Microsoft logo',
        zoomable: false
      }
    }
  ],
  researchExperiences: [],
  leadershipExperiences: [],
  educationExperiences: [],
  projectExperiences: [
    {
      title: 'Michigan Mars Rover Team',
      entity: {
        name: 'University of Michigan',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2017, 8),
        endDate: new Date(2020, 11)
      },
      descriptionFilename: mroverProjectDescription,
      skills: ['JavaScript', 'TypeScript', 'Vue', 'HTML', 'CSS', 'C++', 'Python', 'Svelte', 'Git'],
      image: {
        src: mroverProjectImage,
        alt: 'MRover Autonomous Navigation Simulator',
        zoomable: true
      }
    },
    {
      title: 'Personal Website',
      descriptionFilename: personalWebsiteDescription,
      image: {
        src: personalWebsiteImage,
        alt: 'Personal Website',
        zoomable: false
      }
    },
    {
      title: 'My Instructional Assistant',
      timeline: {
        startDate: new Date(2019, 0),
        endDate: new Date(2019, 3)
      },
      descriptionFilename: myInstructionalAssistantDescription,
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'Dialogflow', 'Jinja', 'Git'],
      image: {
        src: myInstructionalAssistantImage,
        alt: 'My Instructional Assistant UX',
        zoomable: true
      }
    },
    {
      title: 'Hockey stick table',
      descriptionFilename: hockeyStickTableDescription,
      image: {
        src: hockeyStickTableImage,
        alt: 'Hockey stick table',
        zoomable: true
      }
    }
  ]
};
