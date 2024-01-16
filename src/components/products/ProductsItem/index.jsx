// ProductsItem містить інформацію про продукт, а саме:
//  - назву продукту
//  - кількість калорій, яку вміщає продукт
//  - категорію продукту
//  - кількість продукту (в грамах), за яку проведено розрахунок кількості калорій в продукті
// Також ProductsItem відображає користувачу, чи рекомендований цей продукт для нього, та містить кнопку Add, що відкриває модальне вікно BasicModalWindow,  яке містить AddProductForm

import { useState } from 'react';
import ProductsItemStyled from './ProductsItemStyled';
import sprite from '../../../images/sprite.svg';
import BasicModalWindow from '../../Modal';

function ProductsItem({ productData }) {
  const [modal, setModal] = useState(false);
  const { productId, title, category, calories, weight, recommend } =
    productData;

  const openModal = () => {
    setModal(preModal => {
      return !preModal;
    });
  };

  return (
    <ProductsItemStyled>
      <p className="diet">DIET</p>
      <div className="under-box">
        <div className="recommend-box">
          <div
            className={recommend ? 'recommend-marker' : 'no-recommend-marker'}
          />
          <p className="recommend-text">
            {recommend ? 'Recommended' : 'Not recommended'}
          </p>
        </div>
        <div className="btn-box" onClick={openModal}>
          <p className="btn-text">Add</p>
          <svg className="btn-svg">
            <use href={`${sprite}#icon-next`} />
          </svg>
        </div>
      </div>
      <div className="title-box">
        <div className="title-svg-route">
          <svg className="title-svg-person">
            <use href={`${sprite}#icon-running-stick-figure`} />
          </svg>
        </div>
        <h3 className="title-exercise">{title}</h3>
      </div>
      <ul className="categories-list">
        <li className="categories-item">
          <p className="category-name">Calories:</p>
          <span className="category-data">{calories}</span>
        </li>
        <li className="categories-item">
          <p className="category-name">Category:</p>
          <span className="category-data">{category}</span>
        </li>
        <li className="categories-item">
          <p className="category-name">Weight:</p>
          <span className="category-data">{weight}</span>
        </li>
      </ul>
      {modal && <BasicModalWindow productData={productData} />}
    </ProductsItemStyled>
  );
}

export default ProductsItem;
