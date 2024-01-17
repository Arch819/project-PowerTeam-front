import styled from 'styled-components';

export const StatisticItemRStyled = styled('li')({
  minWidth: '146px',
  marginLeft: 'auto',
  padding: '14px 18px',
  borderRadius: '12px',
  background: 'var(--bg-btn-sec)',
  '@media screen and (min-width: 768px)': {
    minWidth: '180px',
  },
});

export const StatisticRSvgBoxStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '24px',
  height: '24px',
  background: 'var(--bg-r-icon)',
  borderRadius: '100%',
  marginBottom: '4px',
  '@media screen and (min-width: 768px)': {
    marginBottom: '8px',
  },
  '@media screen and (min-width: 1440px)': {
    marginBottom: '12px',
  },
});

export const StatisticRTextBoxStyled = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '8px',
  '@media screen and (min-width: 768px)': {
    gap: '11px',
  },
});
export const StatisticRTitleStyled = styled('p')({
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '1',
  letterSpacing: '-1px',
  textTransform: 'uppercase',
  color: 'var(--color-text-primary)',
  '@media screen and (min-width: 768px)': {
    fontSize: '48px',
  },
});
export const StatisticRDescStyled = styled('p')({
  color: 'var(--color-text-pr65)',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '1.33',
  '@media screen and (min-width: 768px)': {
    fontSize: '16px',
    lineHeight: '1.5',
  },
});
