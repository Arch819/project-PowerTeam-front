import styled from 'styled-components';

export const Item = styled.li`
  width: calc((100vw - 66px) / 2);
  height: 96px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
    width: 155px;
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 116px;
    padding: 18px;
  }

  &.accent {
    background-color: var(--bg-container);
  }

  &.success {
    border: var(--border-positive);
  }

  &.warning {
    border: var(--border-negative);
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h4`
  color: rgba(239, 237, 232, 0.8);
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

export const Text = styled.p`
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--bg-l-icon);
  stroke: var(--bg-l-icon);
  display: inline-block;
`;
