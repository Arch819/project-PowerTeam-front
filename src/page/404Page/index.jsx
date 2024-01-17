import NotFound from 'components/NoteFound';
import React from 'react';
import { NotFoundContainerStyled } from './404Page.styled';
import Section from 'components/Section';

function NotFoundPage() {
  return (
    <Section use={'first'}>
      <NotFoundContainerStyled className="container">
        <NotFound />
      </NotFoundContainerStyled>
    </Section>
  );
}

export default NotFoundPage;
