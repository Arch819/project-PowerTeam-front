import styled from 'styled-components';

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 157px;
  height: 96px;
  padding: 14px;
  justify-content: space-between;
  border-radius: 12px;
  border: ${({ border }) => border};
  background-color: ${({ color }) => color};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 214px;
    height: 108px;
    padding: 14px 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 108px;
    padding: 14px 14px;
    gap: 32px;
  }
`;

export const WrapperBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SvgBlock = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--bg-l-icon);
  stroke: var(--bg-l-icon);
`;

export const TextBlock = styled.p`
  color: var(--color-text-pr80);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }
`;

export const ValueBlock = styled.p`
  color: var(--color-text-primary);
  font-weight: Bold;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) and (max-width: 14470px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
