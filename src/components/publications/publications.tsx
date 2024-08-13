import { ComingSoon } from 'components/shared/comingSoon/comingSoon';
import { Section } from 'components/shared/section/section';
import { SectionsContainer } from 'components/shared/section/sectionsContainer';
import React from 'react';

export const Publications: React.FC = () => (
  <SectionsContainer>
    <Section title="Papers">
      <ComingSoon name="The Papers section" />
    </Section>
    <Section title="Posters and Abstracts">
      <ComingSoon name="The Posters and Abstracts section" />
    </Section>
  </SectionsContainer>
);
