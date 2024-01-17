import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeWrapStyled = styled('div')({
  marginBottom: '40px',
  '@media screen and (min-width: 768px)': {
    marginBottom: '60px',
  },
  '@media screen and (min-width: 1440px)': {
    width: '598px',
    flex: '1',
    marginBottom: '0px',
  },
});

export const WelcomeTitleBoxStyled = styled('div')({
  position: 'relative',
  marginBottom: '40px',
});
export const WelcomeTitleStyled = styled('h1')({
  maxWidth: '335px',
  fontSize: '38px',
  fontWeight: '500',
  lineHeight: '1.05',
  letterSpacing: '0.38px',
  color: 'var(--color-btn-primary)',

  '@media screen and (min-width: 768px)': {
    maxWidth: '598px',
    fontSize: '70px',
    lineHeight: '1.1',
    letterSpacing: '0.7px',
  },
});

export const WelcomeTitleSvgStyled = styled('svg')({
  width: '98px',
  height: '35px',
  position: 'absolute',
  top: '43px',
  left: '-9px',
  zIndex: '-1',

  '@media screen and (min-width: 768px)': {
    width: '185px',
    height: '67px',
    top: '84px',
    left: '-16px',
  },
});

export const WelcomeLinkList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  marginTop: '40px',

  a: {
    display: 'inline-block',
    padding: '12px 40px',
    borderRadius: '12px',

    color: 'var(--color-btn-primary)',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.12',
    textDecoration: 'none',
  },
  '@media screen and (min-width: 768px)': {
    gap: '14px',
    marginTop: '64px',
    a: {
      padding: '16px 60px',
      fontSize: '20px',
      lineHeight: '1.2',
    },
  },
});

export const WelcomeLinkSingUpStyled = styled(Link)({
  background: 'var(--bg-btn)',
  '&:is(:hover,:focus)': {
    background: 'var(--bg-btn-hover)',
  },
});
export const WelcomeLinkSingInStyled = styled(Link)({
  border: 'var(--border-30)',
  '&:is(:hover,:focus)': {
    borderColor: 'var(--border-color-btn-hover)',
  },
});
