import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@mui/material/Link';
import { useStyles } from './socialMediaBubble.styles';
import { SocialMediaInfo } from './socialMedia.types';

type SocialMediaBubbleProps = SocialMediaInfo;

export const SocialMediaBubble: React.FC<SocialMediaBubbleProps> = ({ color, icon, link }) => {
  const styles = useStyles({ backgroundColor: color });

  return (
    <div className={styles.bubbleContainer}>
      <Link className={styles.bubble} href={link} onMouseOver={() => { console.log('hovering on ', link); }}>
        <FontAwesomeIcon
          icon={icon}
          inverse
          // size="xl"
          className={styles.logo}
        // fixedWidth
        // height={50}
        // width={50}
        />
      </Link>
    </div>
  );
};
