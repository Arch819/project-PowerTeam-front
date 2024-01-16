// Перевикористовуємий компонент, що рендерить у модальному вікні контент, отриманий у вигляді childrens, та кнопку у вигляді іконки-хрестика. Модальне вікно повинно закриватись по clickу на кнопку іконки-хрестика, по clickк на backdrop, а також click по Escape.
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { BasicWindow, Modal, BtnClose, SvgClose } from "./index.styled";

import symbolDefs from "../../../src/images/sprite.svg";



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
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <Modal>
        <BtnClose onClick={() => isOpenModalToggle()}>
          <SvgClose >
            <use href={symbolDefs + "#icon-x"}></use>
          </SvgClose>
        </BtnClose>

        {children}
      </Modal>
    </BasicWindow>
  );

  return createPortal(modal, document.querySelector("#root_modal"));
};

export default BasicModalWindow;