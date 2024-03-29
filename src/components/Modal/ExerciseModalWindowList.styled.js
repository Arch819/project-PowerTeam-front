import styled from 'styled-components';

export const ExersiceModalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ExersiceModalLink = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  /* width: 147px; */
  flex-basis: calc((100% - 8px) / 2);
  max-height: 98px;
  justify-content: center;

  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-top: 0px;
    width: 168px;
    height: 76px;
    align-items: flex-start;
  }
`;

export const ExersiceModalLinkSub = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const ExersiceModalLinkTitle = styled.p`
  color: #efede8;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;