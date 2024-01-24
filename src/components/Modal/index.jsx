import { useEffect } from "react";
import { createPortal } from "react-dom";

import { BasicWindow, Modal, BtnClose, SvgClose, ModalWraper } from "./index.styled";

import sprite from "../../images/sprite.svg";

const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
      document.body.style.overflow = 'auto';
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

   useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <Modal>
        <BtnClose onClick={() => isOpenModalToggle()}>
          <SvgClose >
            <use href={`${sprite}#icon-close`}></use>
          </SvgClose>
        </BtnClose>
        {children}
        
      </Modal>
    </BasicWindow>
  );

  return createPortal(modal, document.body);
};

export default BasicModalWindow;