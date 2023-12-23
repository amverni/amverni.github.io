import * as React from 'react';
import { socialMediaData } from 'assets/data/socialMedia';
import { useStyles } from './socialMedias.styles';
import { SocialMediaBubble } from './socialMediaBubble';

export const SocialMedias: React.FC = () => {
  const styles = useStyles();

  const socialMediaBubbles = socialMediaData.map((socialMediaInfo) => (
    <SocialMediaBubble {...socialMediaInfo} />
  ));

  return (
    <div className={styles.socialMediaContainer}>
      {socialMediaBubbles}
    </div>
  );
};
