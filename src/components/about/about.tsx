import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import * as React from 'react';
import { Section } from 'components/shared/section/section';
import andrew from 'assets/img/andrew.jpg';
import { aboutInfo } from 'assets/data/aboutInfo';
import { Button } from 'components/shared/button/button';
import Resume from 'assets/files/andrew_vernier_resume.pdf';
import { useStyles } from './about.styles';
import { ContactForm } from './contactForm/contactForm';
import { SocialMedias } from './socialMedia/socialMedias';

export const About: React.FC = () => {
  const styles = useStyles();

  return (
    <SectionsContainer>
      <Section title="About">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutColumn}>
            <img className={styles.portrait} src={andrew} alt="andrew vernier headshot" />
          </div>
          <div className={styles.aboutColumn}>
            <p className={styles.bio}>{aboutInfo.bio}</p>
            <Button href={Resume}>Resume</Button>
          </div>
        </div>
      </Section>
      <Section title="Contact">
        <ContactForm />
        <SocialMedias />
      </Section>
    </SectionsContainer>
  );
};
