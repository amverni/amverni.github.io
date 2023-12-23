import { SocialMediaInfo } from 'components/about/socialMedia/socialMedia.types';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

export const socialMediaData: SocialMediaInfo[] = [
  {
    icon: faLinkedinIn,
    color: '#0077b5',
    link: 'https://www.linkedin.com/in/andrew-vernier/'
  },
  {
    icon: faGithub,
    color: '#25292e',
    link: 'https://github.com/amverni'
  },
  {
    icon: faGoogleScholar,
    // color: '#4285f4',
    color: '#4d90fe',
    link: 'https://scholar.google.com/citations?hl=en&user=1hkR44YAAAAJ'
  },
  {
    icon: faFacebookF,
    color: '#3b5998',
    link: 'https://www.facebook.com/profile.php?id=100009483842716'
  },
  {
    icon: faXTwitter,
    color: '#14171a',
    link: 'https://twitter.com/amvernier'
  },
  {
    icon: faInstagram,
    color: '#c13584',
    link: 'https://www.instagram.com/avernier14/'
  }
];
