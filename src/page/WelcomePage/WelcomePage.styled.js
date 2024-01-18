import styled from 'styled-components';

export const WelcomePageBoxStyled = styled('div')({
  paddingTop: '127px',

  '@media screen and (min-width: 768px)': {
    paddingTop: '189px',
  },
  '@media screen and (min-width: 1440px)': {
    display: 'flex',
    gap: '76px',
    paddingRight: '0',
    paddingTop: '200px',
  },
});
