// ProductsFilters містить в собі:
//  - поле для пошуку продуктів по вмісту ключового слова в назві. Якщо поле для пошуку заповнене - поряд з іконкою лупи повинна зʼявлятись кнопка з іконкою хрестика, по clickу на яку поле для пошуку має бути очищене. Пошук продуктів відбувається по події submit або  clickу на іконку лупи
//  - поле з випадаючим списком категорій продуктів. Пошук продуктів відбувається при виборі категорії
//  - поле з випадаючим списком типів продуктів. Пошук продуктів відбувається при виборі типу

// Запит на backend має відправлятися з урахуванням усіх параметрів пошуку.

import sprite from '../../../images/sprite.svg';
import Select from 'react-select';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';

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
// const useFetchCategories = url => {
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get('https://powerpulse-backend-heie.onrender.com/products/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         setError(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [url]);

//   return { categories, isLoading, error };
// };

const ProductsFilters = () => {
  //function for responsive font sizes in placeholder:

  const getResponsiveFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      return '16px';
    } else {
      return '14px';
    }
  };
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());
  useEffect(() => {
    const handleResize = () => {
      setFontSize(getResponsiveFontSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const { categories, isLoading, error } = useFetchCategories(
  //   'https://powerpulse-backend-heie.onrender.com/products/categories'
  // );

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const categoriesList = categories.map(category => ({
    value: category,
    label: capitalizeFirstLetter(category),
  }));

  // if (isLoading) return <div>Loading categories...</div>;
  // if (error) return <div>Error fetching categories: {error.message}</div>;

  const customStyles = {
    //control wrapper that surrounds the actual input field
    control: provided => ({
      ...provided,
      backgroundColor: 'transparent',
      appearance: 'none', // Removes the default browser appearance
      WebkitAppearance: 'none', // Removes the default browser appearance
      MozAppearance: 'none', // Removes the default browser appearance
      padding: '6px 10px',
      cursor: 'pointer',
    }),
    //options within the dropdown menu
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      backgroundColor: isSelected
        ? 'rgba(28, 28, 28, 1)'
        : isFocused
        ? 'rgba(28, 28, 28, 1)'
        : 'rgba(28, 28, 28, 1)',
      color: isSelected ? '#E6533C' : '#EFEDE8',
      padding: '8px',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: 'rgba(28, 28, 28, 1)',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#EFEDE8', // color of active placeholder
    }),

    dropdownIndicator: provided => ({
      ...provided,
      color: '#EFEDE8',
    }),
    container: provided => ({
      ...provided,
      border: '1px solid rgba(239, 237, 232, 0.30)',
      borderRadius: '12px',
      outline: 'none',
    }),
    valueContainer: provided => ({
      ...provided,
      padding: '0', // Override padding inside the value container if necessary
    }),
    placeholder: provided => ({
      ...provided,
      fontSize,
    }),
    menuList: base => ({
      ...base,
      borderRadius: '12px', // border of dropdown menu

      // '::-webkit-scrollbar': {
      //   display: 'none',
      // },
      overflowY: 'scroll',
    }),
  };

  return (
    <div>
      <ProductsFilterList>
        <li>
          <ProductsFilterLabel>
            <ProductsFilterSearch
              name="productSearch"
              type="text"
              placeholder="Search"
            />
            <ProductsBtnClose type="button">
              <ProductsSvgClose>
                <use href={`${sprite}#icon-close`}></use>
              </ProductsSvgClose>
            </ProductsBtnClose>
            <ProductsBtnSearch type="button">
              <ProductsSvgSearch>
                <use href={`${sprite}#icon-search`}></use>
              </ProductsSvgSearch>
            </ProductsBtnSearch>
          </ProductsFilterLabel>
        </li>
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
    </div>
  );
};

export default ProductsFilters;
