import React from 'react';
import {
  NotFoundContentBoxStyled,
  NotFoundDescriptionStyled,
  NotFoundLinkStyled,
  NotFoundTitleStyled,
} from './NotFound.styled';

function NotFound() {
  return (
    <NotFoundContentBoxStyled>
      <NotFoundTitleStyled>404</NotFoundTitleStyled>
      <NotFoundDescriptionStyled>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </NotFoundDescriptionStyled>
      <NotFoundLinkStyled to="/">Go Home</NotFoundLinkStyled>
    </NotFoundContentBoxStyled>
  );
}

export default NotFound;
