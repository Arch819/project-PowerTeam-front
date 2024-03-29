import styled from 'styled-components';

export const StatisticListStyle = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingTop: '100px',

  '& svg': {
    width: '12px',
    height: '12px',
    fill: 'var(--color-text-primary)',
  },

  '@media screen and (min-width: 768px)': {
    gap: '14px',
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  '@media screen and (min-width: 1440px)': {
    width: '638px',
    marginLeft: '0px',
    paddingTop: '100px',
  },
});
