import styled from 'styled-components';

export const ExersiceModalContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  overflow-y: auto;
  height: 80vh;
  max-width: 335px;
  padding: 48px 16px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 694px;
    height: 550px;
    display: flex;
    overflow: hidden;
    padding: 48px 32px;

    /* align-items: flex-start;
    justify-content: flex-start; */
  }
`;

export const ExersiceModalWindowWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 788px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    height: 454px;
  }
`;

export const RightWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

` ;

export const LeftWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;

@media screen and (min-width: 768px){
 margin-bottom: 0; 
}
`;

export const ExersiceModalImgWrapper = styled.div`
  width: 270px;
  height: 226px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
  }
`;
export const ExersiceModalTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: start;
    width: 125px;
    height: 125px;
  }
`;

export const ExersiceModalImg = styled.img`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  object-fit: cover;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const BoxBtn = styled.div`
  @media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 768px) {
    }
  }
`;

export const ExersiceModalWindowBtn = styled.button`
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 12px 32px;
  border-radius: 12px;
  border-color: transparent;
  background: #e6533c;
  align-self: flex-start;
  
  pointer-events: ${({isDisabled})=>(!isDisabled ? 'none' : 'all')};
  &:hover {
    background: #ef8964;
    color: #efede8;
  }
  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`;