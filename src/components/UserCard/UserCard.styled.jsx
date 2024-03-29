import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AvatarFrame = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: var(--border-avatar);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const UserPhoto = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100px;
`;

export const UserSvg = styled.svg`
  fill: var(--color-avatar);
  width: 68px;
  height: 68px;
  @media screen and (min-width: 768px) {
    width: 98px;
    height: 98px;
  }
`;

export const Button = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  top: -13px;
  transition: var(--transition);

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconBtnSvg = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const TitleUserName = styled.p`
  color: var(--color-text-primary);
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const SubTitle = styled.p`
  color: var(--color-text-pr50);
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const WrapperDaily = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const WrapperLogOut = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
    margin-top: 32px;
  }
`;
