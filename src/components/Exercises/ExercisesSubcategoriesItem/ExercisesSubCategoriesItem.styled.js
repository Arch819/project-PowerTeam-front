import styled from 'styled-components';

export const SubExercisesLi = styled.li`
  position: relative;

  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;

  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 335px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 335px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > h3 {
    font-style: normal;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: #efede8;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  > p {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 2px;
    color: rgba(239, 237, 232, 0.4);
  }
`;
