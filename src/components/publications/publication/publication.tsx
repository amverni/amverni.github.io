import React, { useState } from 'react';
import { PublicationInfo } from 'types/publication.types';
import { Button, Link } from '@mui/material';
import { Dialog } from 'components/shared/dialog/dialog';
import { useFileText } from 'hooks/useFileText';
import { useStyles } from './publication.styles';

interface PublicationProps {
  publicationInfo: PublicationInfo;
}

export const Publication: React.FC<PublicationProps> = ({
  publicationInfo: {
    title,
    link,
    authors: authorsList,
    conference,
    thumbnailFilename,
    abstractFilename
  }
}) => {
  const styles = useStyles();
  const [isAbstractShown, setIsAbstractShown] = useState(false);
  const { text: abstractText } = useFileText(abstractFilename);

  const thumbnail = (
    <Link
      classes={{
        root: styles.thumbnailLink
      }}
      href={link}
    >
      <img src={thumbnailFilename} alt={title} className={styles.thumbnail} />
    </Link>
  );

  const authors = authorsList.join(', ');

  const abstractDialog = (
    <Dialog
      title={title}
      open={isAbstractShown}
      onClose={(): void => setIsAbstractShown(false)}
      maxWidth="lg"
    >
      <p className={styles.abstract}>
        {abstractText}
      </p>
    </Dialog>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {thumbnail}
        <div className={styles.details}>
          <Link href={link} underline="none">
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <p className={styles.subtitle}>{authors}</p>
          <p className={styles.subtitle}>
            {conference.shortName}
            {' '}
            {conference.date.getFullYear()}
          </p>
          <div>
            <Button variant="contained" onClick={() => setIsAbstractShown(true)}>Abstract</Button>
          </div>
        </div>
      </div>
      {abstractDialog}
    </div>
  );
};
