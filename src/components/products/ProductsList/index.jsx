// ProductsList містить список всіх продуктів ProductsItem, отриманих з backendу з урахуванням усіх параметрів пошуку. У разі відсутності інформації на backendi, слід повідоміти про це користувача у вигляді тексту-"заглушки"

import ProductsItem from '../ProductsItem';
import ProductsListStyled from './ProductsListStyled';

function ProductsList({ productsArray }) {
  return (
    <ProductsListStyled>
      {productsArray.map(product => {
        return <ProductsItem productData={product} key={product.productId} />;
      })}{' '}
    </ProductsListStyled>
  );
}

export default ProductsList;
