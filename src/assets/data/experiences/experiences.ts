import { ExperienceInfos } from 'types/experience.types';
import microsoftLogo from 'assets/img/experiences/microsoft.png';
import copilotLogo from 'assets/img/experiences/copilot.svg';
import bingChatEnterprise from 'assets/img/experiences/bingChatEnterprise.png';
import hockeyStickTableImage from 'assets/img/experiences/hockeyStickTable.jpg';
import myInstructionalAssistantImage from 'assets/img/experiences/myInstructionalAssistant.png';
import personalWebsiteImage from 'assets/img/experiences/website.png';
import mroverProjectImage from 'assets/img/experiences/mrover_navigation_simulator.png';
import eecsLogo from 'assets/img/experiences/eecsLogo.png';
import amazonLogo from 'assets/img/experiences/amazon.png';
import garminInstinctTacticalImage from 'assets/img/experiences/garmin_instinct_tactical.jpg';
import garminAutoOemLogo from 'assets/img/experiences/garmin_aoem.jpg';
import cromaLogo from 'assets/img/experiences/cromaLogo.png';
import mroverRoverImage from 'assets/img/experiences/mrover_rover.jpg';
import mroverRoverAndMeImage from 'assets/img/experiences/mrover_rover_andrew.jpg';
import umrhcLogo from 'assets/img/experiences/umrhc.jpg';
import tecnunLogo from 'assets/img/experiences/tecnun.png';
import michiganSeal from 'assets/img/experiences/um_seal.png';
import michiganWolverineLogo from 'assets/img/experiences/um_wolverine.jpg';
import microsoftIdentityDescription from './microsoft_identity.txt';
import microsoftM365CopilotDescription from './microsoft_m365Copilot.txt';
import microsoftEnterpriseSearchDescription from './microsoft_enterpriseSearch.txt';
import hockeyStickTableDescription from './hockeyStickTable.txt';
import myInstructionalAssistantDescription from './michigan_myInstructionalAssistant.txt';
import personalWebsiteDescription from './personalWebsite.txt';
import mroverProjectDescription from './mrover_project.txt';
import gsiDescription from './michigan_gsi.txt';
import amazonInternshipDescription from './amazon_internship.txt';
import garminOutdoorDescription from './garmin_outdoor.txt';
import garminAutoOemDescription from './garmin_automotiveOem.txt';
import cromaDescription from './michigan_croma.txt';
import mroverTechnicalAdvisorDescription from './mrover_technicalAdvisor.txt';
import mroverAutoLeadDescription from './mrover_autonLead.txt';
import umrhcDescription from './michigan_rollerHockey.txt';
import michiganMastersDescription from './michigan_masters.txt';
import michiganBachelorsDescription from './michigan_bachelors.txt';
import tecnunDescription from './michigan_tecnun.txt';

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
        zoomable: false,
        style: {
          maxWidth: '200px'
        }
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
        zoomable: false,
        style: {
          maxWidth: '500px'
        }
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
        zoomable: false,
        style: {
          maxWidth: '300px'
        }
      }
    },
    {
      title: 'Graduate Student Instructor - Web Systems',
      entity: {
        name: 'University of Michigan',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2020, 7),
        endDate: new Date(2020, 11)
      },
      descriptionFilename: gsiDescription,
      skills: ['JavaScript', 'React', 'Python', 'Git'],
      image: {
        src: eecsLogo,
        alt: 'Michigan Electrical Engineering and Computer Science',
        zoomable: false,
        style: {
          maxWidth: '400px'
        }
      }
    },
    {
      title: 'Software Development Engineer Intern',
      entity: {
        name: 'Amazon.com',
        location: 'Seattle, WA (remote)'
      },
      timeline: {
        startDate: new Date(2020, 4, 11),
        endDate: new Date(2020, 6, 31)
      },
      descriptionFilename: amazonInternshipDescription,
      skills: ['Java', 'AWS Cloud Computing (Lambda, Kinesis Firehose, S3, SNS, CloudFormation)', 'JUnit', 'Git'],
      image: {
        src: amazonLogo,
        alt: 'Amazon Logo',
        zoomable: false,
        style: {
          maxWidth: '300px'
        }
      }
    },
    {
      title: 'Software Engineer Intern',
      entity: {
        name: 'Garmin International',
        location: 'Olathe, KS',
        org: 'Outdoor'
      },
      timeline: {
        startDate: new Date(2019, 4, 13), /* May 13, 2019 */
        endDate: new Date(2019, 7, 16) /* August 16, 2019 */
      },
      descriptionFilename: garminOutdoorDescription,
      skills: ['C', 'Monkey C', 'Git'],
      image: {
        src: garminInstinctTacticalImage,
        alt: 'Garmin Instinct Tactical',
        zoomable: false,
        style: {
          maxWidth: '400px'
        }
      }
    },
    {
      title: 'Software Engineer Intern',
      entity: {
        name: 'Garmin International',
        location: 'Novi, MI',
        org: 'Aotomotive OEM'
      },
      timeline: {
        startDate: new Date(2018, 3, 30), /* April 30, 2018 */
        endDate: new Date(2018, 7, 3) /* August 3, 2018 */
      },
      descriptionFilename: garminAutoOemDescription,
      skills: ['C++', 'Python', 'Qt', 'Squish GUI testing', 'Git'],
      image: {
        src: garminAutoOemLogo,
        alt: 'Garmin Automotive OEM',
        zoomable: false,
        style: {
          maxWidth: '400px'
        }
      }
    }
  ],
  researchExperiences: [
    {
      title: 'Research Assistant',
      entity: {
        name: 'Crowds and Machines Lab',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2019, 0), /* January 2019 */
        endDate: new Date(2020, 4) /* May 2020 */
      },
      descriptionFilename: cromaDescription,
      skills: ['JavaScript', 'JQuery', 'HTML', 'CSS', 'Python', 'LaTex', 'PHP', 'Git'],
      image: {
        src: cromaLogo,
        alt: 'CROMA Lab Logo',
        zoomable: false,
        style: {
          maxWidth: '400px'
        }
      }
    }
  ],
  leadershipExperiences: [
    {
      title: 'Software Technical Advisor',
      entity: {
        name: 'Michigan Mars Rover Team',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2019, 5), /* June 2019 */
        endDate: new Date(2020, 11) /* December 2020 */
      },
      descriptionFilename: mroverTechnicalAdvisorDescription,
      image: {
        src: mroverRoverImage,
        alt: 'MRover Rover',
        zoomable: true
      }
    },
    {
      title: 'Autonomous Navigation Lead',
      entity: {
        name: 'Michigan Mars Rover Team',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2018, 2), /* March 2018 */
        endDate: new Date(2019, 5) /* June 2019 */
      },
      descriptionFilename: mroverAutoLeadDescription,
      image: {
        src: mroverRoverAndMeImage,
        alt: 'MRover Rover and Andrew',
        zoomable: true
      }
    },
    {
      title: 'Vice President | Captain',
      entity: {
        name: 'Michigan Roller Hockey Club',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2017, 0), /* January 2017 */
        endDate: new Date(2018, 7) /* August 2018 */
      },
      descriptionFilename: umrhcDescription,
      image: {
        src: umrhcLogo,
        alt: 'Michigan Roller Hockey Club Logo',
        zoomable: false,
        style: {
          maxWidth: '300px'
        }
      }
    }
  ],
  educationExperiences: [
    {
      title: 'Master of Science in Engineering – Computer Science Engineering',
      entity: {
        name: 'University of Michigan',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2020, 0), /* January 2020 */
        endDate: new Date(2020, 11) /* December 2020 */
      },
      descriptionFilename: michiganMastersDescription,
      note: 'GPA: 4.00 / 4.00',
      skills: ['C', 'Python', 'LaTex', 'Git'],
      image: {
        src: michiganSeal,
        alt: 'University of Michigan Seal',
        zoomable: false,
        style: {
          maxWidth: '300px'
        }
      }
    },
    {
      title: 'Bachelor of Science in Engineering – Computer Science',
      entity: {
        name: 'University of Michigan',
        location: 'Ann Arbor, MI'
      },
      timeline: {
        startDate: new Date(2016, 8), /* September 2016 */
        endDate: new Date(2019, 11) /* December 2019 */
      },
      descriptionFilename: michiganBachelorsDescription,
      note: 'GPA: 3.94 / 4.00',
      skills: ['C++', 'C', 'Python', 'Javascript', 'HTML', 'CSS', 'React', 'Flask', 'SQLite', 'LaTex', 'Scheme', 'Prolog', 'Java', 'Make', 'Markdown', 'Git'],
      image: {
        src: michiganWolverineLogo,
        alt: 'University of Michigan Wolverine Logo',
        zoomable: false,
        style: {
          maxWidth: '300px'
        }
      }
    },
    {
      title: 'Engineering Study Abroad',
      entity: {
        name: 'Universidad de Navarra',
        location: 'Pamplona, Spain'
      },
      timeline: {
        startDate: new Date(2017, 4), /* May 2017 */
        endDate: new Date(2017, 5) /* June 2017 */
      },
      descriptionFilename: tecnunDescription,
      skills: ['C++'],
      image: {
        src: tecnunLogo,
        alt: 'Universidad de Tecnun Seal',
        zoomable: false,
        style: {
          maxWidth: '400px'
        }
      }
    }
  ],
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
