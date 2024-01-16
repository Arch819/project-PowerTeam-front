// ProductsFilters містить в собі:
//  - поле для пошуку продуктів по вмісту ключового слова в назві. Якщо поле для пошуку заповнене - поряд з іконкою лупи повинна зʼявлятись кнопка з іконкою хрестика, по clickу на яку поле для пошуку має бути очищене. Пошук продуктів відбувається по події submit або  clickу на іконку лупи
//  - поле з випадаючим списком категорій продуктів. Пошук продуктів відбувається при виборі категорії
//  - поле з випадаючим списком типів продуктів. Пошук продуктів відбувається при виборі типу

// Запит на backend має відправлятися з урахуванням усіх параметрів пошуку.
import sprite from '../../../images/sprite.svg';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  ProductsFilterLabel,
  ProductsFilterSearch,
  ProductsBtnClouse,
  ProductsSvgClouse,
  ProductsBtnSearch,
  ProductsSvgSearch,
  SelectWrapper,
  ProductsFilterList,
} from './ProductsFilter.styles';

const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];
const categories = [
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];

function ProductsFilters() {
  const dispatch = useDispatch();

  const capitalizeFirstLetter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const categoriesList = categories?.map(el => ({
    value: el,
    label: capitalizeFirstLetter(el),
  }));

  return (
    <div className="container">
      <ProductsFilterList>
        <li>
          <ProductsFilterLabel>
            <ProductsFilterSearch
              value={search}
              onChange={onChangeSearch}
              name="productSearch"
              type="text"
              placeholder="Search"
            />
            <ProductsBtnClose type="button" onClick={delTextInput}>
              <ProductsSvgClose>
                <use href={sprite + '#icon-close'}></use>
              </ProductsSvgClose>
            </ProductsBtnClose>
            <ProductsBtnSearch type="button">
              <ProductsSvgSearch>
                <use href={sprite + '#icon-search'}></use>
              </ProductsSvgSearch>
            </ProductsBtnSearch>
          </ProductsFilterLabel>
        </li>
        <li>
          <SelectWrapper>
            <Select
              styles={customStyles}
              value={category}
              onChange={onCategoriesChange}
              placeholder="Categories"
              options={categoriesList || []}
              theme={theme => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                  primary: 'transparent',
                  neutral40: '#EFEDE8', // ховер на птичку
                  neutral20: 'transparent', // дефолтный бордер
                  neutral30: 'transparent', // дефолтный ховер бордер
                  neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
            />
          </SelectWrapper>
        </li>
        <li>
          <SelectWrapper>
            <Select
              styles={customStyles}
              onChange={onRecomendedChange}
              value={recommended}
              theme={theme => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)', // Цвет фона при нажатии на селект в меню
                  primary: 'transparent',
                  neutral40: '#EFEDE8', // ховер на птичку
                  neutral20: 'transparent', // дефолтный бордер
                  neutral30: 'transparent', // дефолтный ховер бордер
                  neutral50: 'rgba(239, 237, 232, 1)', // цвет плейсхолдера
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
              options={optionsRec}
            />
          </SelectWrapper>
        </li>
      </ProductsFilterList>
    </div>
  );
}

export default ProductsFilters;
