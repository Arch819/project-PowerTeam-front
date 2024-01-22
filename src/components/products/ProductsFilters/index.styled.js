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
  justify-content: center;
`;

export const ProductsFilterSearch = styled.input`
  @media screen and (min-width: 375px) {
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 14px;
    background-color: transparent;
    color: var(--color-text-white);
    font-size: 14px;
    line-height: 1.3;
    width: 295px;
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
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ProductsBtnClose = styled.button`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
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
  top: calc(50% - 16px / 2);
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
  @media screen and (min-width: 375px) {
    margin-bottom: 64px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 132px;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    /* margin-top: 68px; */
    display: flex;
    justify-content: flex-end;
  }
`;

export const SelectWrapperCategory = styled.div`
  @media screen and (min-width: 375px) {
    width: 126px;
    margin-right: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 192px;
  }
  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const SelectWrapperRec = styled.div`
  @media screen and (min-width: 375px) {
    width: 153px;
  }
  @media screen and (min-width: 768px) {
    width: 204px;
  }
  @media screen and (min-width: 1440px) {
    width: 204px;
  }
`;

export const ProductTitle = styled.h2`
  @media screen and (min-width: 375px) {
    font-size: 24px;
    /* margin-top: 40px; */
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
    /* margin-top: 72px; */
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
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
  }
`;
export const ProductsContainer = styled.div`
  position: relative;
`;
