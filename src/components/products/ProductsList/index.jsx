import ProductsItem from '../ProductsItem';
import ProductsListStyled from './ProductsListStyled';

function ProductsList({ productsArray }) {
  return (
    <ProductsListStyled>
      {productsArray.map(product => {
        return <ProductsItem productData={product} key={product.idProduct} />;
      })}
    </ProductsListStyled>
  );
}

export default ProductsList;
