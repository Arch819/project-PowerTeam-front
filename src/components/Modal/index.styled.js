import styled from 'styled-components';

export const BasicWindow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(04, 04, 04, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
 border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  position: relative;
  max-height: 80%;
`;

export const BtnClose = styled.button`
  width: 22px;
  height: 22px;

  border: none;
  background: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
  @media screen and (min-width: 768px) {
  
    width: 26px;
    height: 26px;
  }

    &:hover,
    &focus {
    transform: scale(1.2);
  }
`;

export const SvgClose = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #efede8;

  &:hover,
  &:focus {
    stroke: #ffffff;
  }
`;

export const ModalWraper = styled.div`
/* overflow: auto; */
height: 100%;
`