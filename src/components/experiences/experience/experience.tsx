import React, { useState } from 'react';
import { stringifyDateRange } from 'utils/dateUtils';
import { useFileText } from 'hooks/useFileText';
import Markdown from 'react-markdown';
import { Link } from 'components/shared/link/link';
import { Dialog } from 'components/shared/dialog/dialog';
import { ExperienceInfo } from './experience.types';
import { useStyles } from './experience.styles';

interface ExperienceProps {
  experienceInfo: ExperienceInfo;
  imageLocation: 'left' | 'right';
}

export const Experience: React.FC<ExperienceProps> = ({
  experienceInfo: {
    title,
    entity: entityData,
    timeline,
    descriptionFilename,
    skills,
    image: imageData
  },
  imageLocation
}) => {
  const styles = useStyles();
  const { text: descriptionText } = useFileText(descriptionFilename);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const org = entityData?.org && (
    <span>
      {' | '}
      {entityData.org}
    </span>
  );

  const header = (
    <h3 className={styles.title}>
      {title}
      {org}
    </h3>
  );

  const entity = entityData && (
    <p className={styles.subtitle}>
      {entityData.name}
      {' - '}
      {entityData.location}
    </p>
  );

  const timerange = timeline && (
    <p className={styles.subtitle}>{stringifyDateRange(timeline.startDate, timeline.endDate)}</p>
  );

  const description = (
    <Markdown
      className={styles.description}
      components={{
        a: Link
      }}
    >
      {descriptionText}
    </Markdown>
  );

  const technicalSkills = skills && (
    <p className={styles.skills}>
      <em>Technical skills:</em>
      {' '}
      {skills.join(', ')}
    </p>
  );

  const onImageClick = (e: React.KeyboardEvent | React.MouseEvent): void => {
    if (!('key' in e) || e.key === 'Enter') {
      setIsImagePopupOpen(true);
    }
  };

  const imageClassName = `${styles.image} ${imageData.zoomable ? styles.clickableImage : ''}`;
  const image = (
    <div
      className={styles.imageContainer}
      onClick={onImageClick}
      onKeyDown={onImageClick}
      role="button"
      tabIndex={0}
    >
      <img className={imageClassName} src={imageData.src} alt={imageData.alt} />
    </div>
  );

  const imageDialog = imageData.zoomable && (
    <Dialog
      title={imageData.alt}
      open={isImagePopupOpen}
      onClose={(): void => setIsImagePopupOpen(false)}
      maxWidth="lg"
    >
      <img src={imageData.src} alt={imageData.alt} className={styles.image} />
    </Dialog>
  );

  const containerClassNames = `${styles.container} ${imageLocation === 'left' ? styles.reverseContainer : ''}`;

  return (
    <div className={containerClassNames}>
      <div className={styles.infoContainer}>
        {header}
        {entity}
        {timerange}
        {description}
        {technicalSkills}
      </div>
      {image}
      {imageDialog}
    </div>
  );
};
