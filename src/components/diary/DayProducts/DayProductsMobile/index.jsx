import { useSelector } from 'react-redux';
import DayProductsItemMobile from '../DayProductItemMobile';
import sprite from '../../../../images/sprite.svg';
import {
  AddProductButton,
  ProductsContainer,
  ProductsHeader,
  ProductList,
  ProductsTitle,
} from './index.styled';
import DayProductsPlug from '../DayProductsPlug';
import { selectProducts } from 'store/diary/diarySelectors';

const DayProductsMobile = () => {
  const products = useSelector(selectProducts);
  return (
    <ProductsContainer $products={products}>
      <ProductsHeader>
        <ProductsTitle>Products</ProductsTitle>
        <AddProductButton to="/products">
          Add product
          <svg width="16" height="16">
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </AddProductButton>
      </ProductsHeader>
      <ProductList>
        {products.length > 0 ? (
          <DayProductsItemMobile products={products} />
        ) : (
          <DayProductsPlug />
        )}
      </ProductList>
    </ProductsContainer>
  );
};

export default DayProductsMobile;
