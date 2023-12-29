import * as React from 'react';
import { ImageInfo } from '../experiences.types';
import { useStyles } from './experienceCard.styles';

interface ExperienceCardProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  description: string[];
  technicalSkills?: string[];
  image: ImageInfo;
  imagePosition: 'left' | 'right';
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  description,
  technicalSkills,
  image,
  imagePosition
}) => {
  const styles = useStyles({ imagePosition });

  return (
    <div className={styles.experienceCardContainer}>
      <div className={styles.imageContainer}>
        <img src={image.src} alt={image.alt} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle1 && <h4 className={styles.subtitle}>{subtitle1}</h4>}
        {subtitle2 && <h4 className={styles.subtitle}>{subtitle2}</h4>}
        {subtitle3 && <h4 className={styles.subtitle}>{subtitle3}</h4>}
        {description.map((paragraph, index) => (
          <p key={`${index} ${paragraph[0]}`} className={styles.description}>
            {paragraph}
          </p>
        ))}
        {
          technicalSkills && (
            <p className={styles.description}>
              <i>Technical skills: </i>
              {technicalSkills.join(', ')}
            </p>
          )
        }
      </div>
    </div>
  );
};
