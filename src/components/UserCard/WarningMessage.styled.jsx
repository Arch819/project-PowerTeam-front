import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
    margin-top: 32px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: var(--bg-r-icon);
`;

export const TextMess = styled.p`
  color: var(--color-text-pr30);
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

`;