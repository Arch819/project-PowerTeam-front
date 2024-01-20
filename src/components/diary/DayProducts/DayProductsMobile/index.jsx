// import { useSelector } from 'react-redux';
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
// import { selectProducts } from 'store/diary/diarySelectors';

const DayProductsMobile = () => {
  // const products = useSelector(selectProducts);
  const products = [
    {
      productId: '5d51694902b2373622fadsfdsdsf5e13',
      date: '15-01-2024',
      category: 'vegetables and herbs',
      title: 'Salads Belaya Dacha Delicate root',
      recommend: true,
      calories: 17,
      amount: 100,
    },
    {
      productId: '5d51694902b23736sfsdfds22lff5e13',
      date: '15-01-2024',
      category: 'vegetables and herbs',
      title: 'Salads Belaya Dacha Delicate root',
      recommend: true,
      calories: 17,
      amount: 100,
    },
    {
      productId: '5d51694902b237sfds362f2ff5e13',
      date: '15-01-2024',
      category: 'vegetables ',
      title: 'Bread Hercules grain',
      recommend: false,
      calories: 17,
      amount: 100,
    },
    {
      productId: '5d51694902b2373scfs6622ff5e13',
      date: '15-01-2024',
      category: 'Meat',
      title: 'Venison stew Specia',
      recommend: true,
      calories: 17,
      amount: 100,
    },
    {
      productId: '5d51694902b23736dfs92ff5e13',
      date: '15-01-2024',
      category: 'Meat',
      title: 'Venison stew Specia',
      recommend: true,
      calories: 17,
      amount: 100,
    },
    {
      productId: '5d51694902b2373622fdsfsf5e13',
      date: '15-01-2024',
      category: 'Meat',
      title: 'Venison stew Specia',
      recommend: true,
      calories: 17,
      amount: 100,
    },
  ];
  return (
    <ProductsContainer>
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
