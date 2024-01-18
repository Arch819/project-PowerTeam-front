// ProductsFilters містить в собі:
//  - поле для пошуку продуктів по вмісту ключового слова в назві. Якщо поле для пошуку заповнене - поряд з іконкою лупи повинна зʼявлятись кнопка з іконкою хрестика, по clickу на яку поле для пошуку має бути очищене. Пошук продуктів відбувається по події submit або  clickу на іконку лупи
//  - поле з випадаючим списком категорій продуктів. Пошук продуктів відбувається при виборі категорії
//  - поле з випадаючим списком типів продуктів. Пошук продуктів відбувається при виборі типу

// Запит на backend має відправлятися з урахуванням усіх параметрів пошуку.

import sprite from '../../../images/sprite.svg';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import {
  getResponsiveFontSize,
  capitalizeFirstLetter,
} from './utilityFunctions';
import getCustomStyles from './customStyles';

import {
  ProductsFilterLabel,
  ProductsFilterSearch,
  ProductsBtnClose,
  ProductsSvgClose,
  ProductsBtnSearch,
  ProductsSvgSearch,
  SelectWrapperCategory,
  SelectWrapperRec,
  ProductsFilterList,
  CategoryAll,
  ProductsContainer,
} from './index.styled';

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

const ProductsFilters = () => {
  
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getResponsiveFontSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const customStyles = getCustomStyles(fontSize);

  const categoriesList = categories.map(category => ({
    value: category,
    label: capitalizeFirstLetter(category),
  }));

  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };
  const clearSearch = () => {
    setInputValue('');
  };

  return (
    <ProductsFilterList>
      <ProductsContainer>
        <li>
          <ProductsFilterLabel>
            <ProductsFilterSearch
              name="productSearch"
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleSearchChange}
            />
          </ProductsFilterLabel>
          {inputValue && (
            <ProductsBtnClose
              type="button"
              onClick={clearSearch}
              isVisible={inputValue.length > 0}
            >
              <ProductsSvgClose>
                <use href={`${sprite}#icon-close`}></use>
              </ProductsSvgClose>
            </ProductsBtnClose>
          )}
          <ProductsBtnSearch type="button">
            <ProductsSvgSearch>
              <use href={`${sprite}#icon-search`}></use>
            </ProductsSvgSearch>
          </ProductsBtnSearch>
        </li>
      </ProductsContainer>
      <CategoryAll>
        <li>
          <SelectWrapperCategory>
            <Select
              styles={customStyles}
              placeholder="Categories"
              options={categoriesList || []}
              theme={theme => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)', // bg color in menu
                  primary: 'transparent',
                  neutral40: '#EFEDE8', // hover on dropdown sign
                  neutral20: 'transparent', // border default
                  neutral30: 'transparent', // hover border default
                  neutral50: 'rgba(239, 237, 232, 1)', // placeholder color
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
            />
          </SelectWrapperCategory>
        </li>
        <li>
          <SelectWrapperRec>
            <Select
              options={optionsRec}
              styles={customStyles}
              placeholder="All"
              theme={theme => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary50: 'rgba(255, 255, 255, 0.10)',
                  primary: 'transparent',
                  neutral40: '#EFEDE8',
                  neutral20: 'transparent',
                  neutral30: 'transparent',
                  neutral50: 'rgba(239, 237, 232, 1)',
                  neutral80: 'rgba(239, 237, 232, 1)',
                },
              })}
            />
          </SelectWrapperRec>
        </li>
      </CategoryAll>
    </ProductsFilterList>
  );
};

export default ProductsFilters;
