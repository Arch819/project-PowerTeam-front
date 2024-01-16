import styled from 'styled-components';

export const WelcomePageBoxStyled = styled('div')({
  paddingTop: '66px',

  '@media screen and (min-width: 768px)': {
    paddingTop: '106px',
  },
  '@media screen and (min-width: 1440px)': {
    display: 'flex',
    gap: '76px',
    paddingRight: '0',
  },
});
