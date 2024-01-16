import styled from 'styled-components';

export const StatisticItemLStyled = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  minWidth: '146px',
  marginRight: 'auto',
  padding: '14px 18px',
  borderRadius: '12px',
  background: '#303030',
  '@media screen and (min-width: 768px)': {
    minWidth: '206px',
    padding: '20px 23px',
    gap: '12px',
  },
});

export const StatisticLSvgBoxStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  background: 'var(--bg-l-icon)',
  borderRadius: '100%',
});

export const StatisticLTextBoxStyled = styled('div')({});
export const StatisticLTitleStyled = styled('p')({
  color: 'var(--color-text-primary)',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.12',
  marginBottom: '4px',
  '@media screen and (min-width: 768px)': {
    fontSize: '24px',
    lineHeight: '1',
    marginBottom: '8px',
  },
});
export const StatisticLDescStyled = styled('p')({
  color: 'var(--color-text-pr65)',
  fontSize: '12px',
  lineHeight: '1.33',
  '@media screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '1.5',
  },
});
