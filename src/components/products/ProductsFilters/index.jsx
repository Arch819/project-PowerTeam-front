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
import { handleUpdateFilters } from 'store/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { optionsRec } from '../../../store/products/productsInitialState';
import { selectCategoriesProducts } from '../../../store/products/productsSelector';

const ProductsFilters = () => {
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

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

  const categories = useSelector(selectCategoriesProducts);

  const categoriesList = [
    { value: 'all', label: 'All' },
    ...categories.map(category => ({
      value: category,
      label: capitalizeFirstLetter(category),
    })),
  ];

  const handleSearchChange = event => {
    setInputValue(event.target.value);
  };
  const clearSearch = () => {
    dispatch(
      handleUpdateFilters({
        query: '',
      })
    );
    setInputValue('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      handleUpdateFilters({
        query: inputValue,
      })
    );
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!event.repeat) {
        handleSubmit(event);
      }
    }
  };

  const handleCategoriesChange = selectedOption => {
    dispatch(handleUpdateFilters({ category: selectedOption }));
  };

  const handleRecomendedChange = selectedOption => {
    dispatch(handleUpdateFilters({ recommended: selectedOption }));
  };

  return (
    <form onKeyDown={handleKeyDown}>
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
                $isVisible={inputValue.length > 0}
              >
                <ProductsSvgClose>
                  <use href={`${sprite}#icon-close`}></use>
                </ProductsSvgClose>
              </ProductsBtnClose>
            )}
            <ProductsBtnSearch type="submit" onClick={handleSubmit}>
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
                onChange={handleCategoriesChange}
                styles={customStyles}
                placeholder="Categories"
                options={categoriesList || []}
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
            </SelectWrapperCategory>
          </li>
          <li>
            <SelectWrapperRec>
              <Select
                onChange={handleRecomendedChange}
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
    </form>
  );
};

export default ProductsFilters;
