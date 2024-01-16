// ProductsList містить список всіх продуктів ProductsItem, отриманих з backendу з урахуванням усіх параметрів пошуку. У разі відсутності інформації на backendi, слід повідоміти про це користувача у вигляді тексту-"заглушки"

import ProductsItem from '../ProductsItem';
import ProductsListStyled from './ProductsListStyled';

function ProductsList() {
  const productsList = [
    {
      productId: '5d51694902b2373622ff5745',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5733',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: false,
    },
    {
      productId: '5d51694902b2373622ff5772',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5771',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5779',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5778',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: false,
    },
    {
      productId: '5d51694902b2373622ff5777',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5776',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5775',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: false,
    },
    {
      productId: '5d51694902b2373622ff5774',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: true,
    },
    {
      productId: '5d51694902b2373622ff5773',
      title: 'Danbo cheese',
      category: 'dairy',
      calories: 340,
      weight: 100,
      recommend: false,
    },
  ];
  return (
    <ProductsListStyled>
      {productsList.map(product => {
        return <ProductsItem productData={product} key={product.productId} />;
      })}{' '}
    </ProductsListStyled>
  );
}

export default ProductsList;
