import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@mui/material/Link';
import { SocialMediaInfo } from 'types/socialMedia.types';
import { useStyles } from './socialMediaBubble.styles';

type SocialMediaBubbleProps = SocialMediaInfo;

export const SocialMediaBubble: React.FC<SocialMediaBubbleProps> = ({ color, icon, link }) => {
  const styles = useStyles({ backgroundColor: color });

  return (
    <div className={styles.bubbleContainer}>
      <Link className={styles.bubble} href={link}>
        <FontAwesomeIcon
          icon={icon}
          inverse
          className={styles.logo}
        />
      </Link>
    </div>
  );
};
