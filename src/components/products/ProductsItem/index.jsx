import { useState } from 'react';
import ProductsItemStyled from './ProductsItemStyled';
import sprite from '../../../images/sprite.svg';
import BasicModalWindow from '../../Modal';

function ProductsItem({ productData }) {
  const [modal, setModal] = useState(false);
  const { title, category, calories, weight, recommend } = productData;

  const upFirst = string => {
    if (!string) return string;

    return string[0].toUpperCase() + string.slice(1);
  };

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
        <button className="btn-box" onClick={openModal}>
          <span className="btn-text">Add</span>
          <svg className="btn-svg">
            <use href={`${sprite}#icon-next`} />
          </svg>
        </button>
      </div>
      <div className="title-box">
        <div className="title-svg-route">
          <svg className="title-svg-person">
            <use href={`${sprite}#icon-running-stick-figure`} />
          </svg>
        </div>
        <h3 className="title-exercise">{upFirst(title)}</h3>
      </div>
      <ul className="categories-list">
        <li className="categories-item">
          <p className="category-name">Calories:</p>
          <span className="category-data">{calories}</span>
        </li>
        <li className="categories-item">
          <p className="category-name">Category:</p>
          <span className="category-data">{upFirst(category)}</span>
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
