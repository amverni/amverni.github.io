import { publicationsData } from 'assets/data/publications/publications';
import { Section } from 'components/shared/section/section';
import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import React from 'react';
import { PublicationInfo } from 'types/publication.types';
import { Publication } from './publication/publication';

export const Publications: React.FC = () => {
  const {
    papers: papersData,
    postersAndAbstracts: postersAndAbstractsData
  } = publicationsData;

  const createPublicationComponent = (publicationInfo: PublicationInfo): JSX.Element => (
    <Publication
      publicationInfo={publicationInfo}
      key={publicationInfo.title}
    />
  );

  const papers = papersData.map(createPublicationComponent);
  const postersAndAbstracts = postersAndAbstractsData.map(createPublicationComponent);

  return (
    <SectionsContainer>
      <Section title="Papers">
        {papers}
      </Section>
      <Section title="Posters and Abstracts">
        {postersAndAbstracts}
      </Section>
    </SectionsContainer>
  );
};
