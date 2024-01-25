import styled from 'styled-components';

export const ProductsFilterLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 12px;
`;
export const CategoryAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: row;
  }
`;

export const ProductsFilterSearch = styled.input`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 14px;
  background-color: transparent;
  color: var(--color-text-white);
  font-size: 14px;
  line-height: 1.3;
  width: 335px;
  box-sizing: border-box;
  flex-grow: 1;

  &::placeholder {
    color: rgba(239, 237, 232, 1);
    opacity: 1;
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--bg-btn);
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ProductsBtnClose = styled.button`
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  position: absolute;
  background: transparent;
  position: absolute;
  top: calc(48% - 16px / 2);
  right: 40px;
  border: none;
  cursor: pointer;
`;
export const ProductsBtnSearch = styled.button`
  position: absolute;
  background: transparent;
  position: absolute;
  top: calc(45% - 16px / 2);
  right: 14px;
  border: none;
`;

export const ProductsSvgClose = styled.svg`
  stroke: var(--bg-btn);
  width: 18px;
  height: 18px;
`;
export const ProductsSvgSearch = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ProductsFilterList = styled.ul`
  margin-bottom: 16px;
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 28px;
  }
`;

export const SelectWrapperCategory = styled.div`
  @media screen and (min-width: 375px) {
    width: 146px;
  }
  @media screen and (min-width: 768px) {
    width: 192px;
  }
`;

export const SelectWrapperRec = styled.div`
  @media screen and (min-width: 375px) {
    width: 173px;
  }
  @media screen and (min-width: 768px) {
    width: 204px;
  }
`;

export const TitleFilter = styled.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding-top: 68px;
  }
`;
export const ProductsContainer = styled.div`
  position: relative;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
