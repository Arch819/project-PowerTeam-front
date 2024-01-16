import styled from 'styled-components';

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex-shrink: 0; */
  width: 157px;
  height: 96px;
  padding: 14px;
  gap: 8px;
  border-radius: 12px;
  border: ${({ border }) => border};
  background-color: ${({ color }) => color};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 214px;
    height: 108px;
    padding: 14px 14px;
    gap: 32px;
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
  height: 14px;
  fill: #EF8964;
`;

export const TextBlock = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }
`;

export const ValueBlock = styled.p`
  color: #EFEDE8;
  font-family: 'Roboto';
  font-weight: Bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;
