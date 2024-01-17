import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContentBoxStyled = styled('div')({
  width: '240px',
  height: '100vh',
  display: 'flex',
  paddingLeft: '20px',
  paddingRight: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'var(--bg-container)',
  '@media screen and (min-width: 768px)': {
    width: '420px',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  '@media screen and (min-width: 1440px)': {
    width: '669px',
    paddingLeft: '96px',
    paddingRight: '96px',
  },
});

export const NotFoundTitleStyled = styled('h2')({
  color: 'var(--color-text-primary)',
  fontSize: '66px',
  fontWeight: '500',
  lineHeight: '1',
  letterSpacing: '0.66px',
  marginBottom: '14px',
  '@media screen and (min-width: 768px)': {
    fontSize: '160px',
    lineHeight: '0.93',
    letterSpacing: '1.6px',
    marginBottom: '28px',
  },
});

export const NotFoundDescriptionStyled = styled('p')({
  color: 'var(--color-text-primary)',
  fontSize: '14px',
  lineHeight: '1.28',
  marginBottom: '28px',
  '@media screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '1.5',
  },
});

export const NotFoundLinkStyled = styled(Link)({
  width: '150px',
  padding: '12px 40px',
  background: 'transparent',
  borderRadius: '12px',
  border: 'var(--border-30)',

  color: 'var(--color-text-primary)',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.12',
  textAlign: 'center',
  textDecoration: 'none',

  '@media screen and (min-width: 768px)': {
    width: '206px',
    padding: '16px 60px',
    fontSize: '20px',
    lineHeight: '1.2',
  },

  '&:is(:hover,:focus)': {
    borderColor: 'var(--border-color-link-hover)',
  },
});
