// ProductsList містить список всіх продуктів ProductsItem, отриманих з backendу з урахуванням усіх параметрів пошуку. У разі відсутності інформації на backendi, слід повідоміти про це користувача у вигляді тексту-"заглушки"

import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem';
import ProductsListStyled from './ProductsListStyled';
import { selectCategoryFilter, selectProducts, selectProductsError, selectProductsIsLoading, selectQueryFilter, selectRecommendedFilter } from 'store/products/productsSelector';
import { useEffect } from 'react';
import { getAllProducts } from 'store/products/productsOperations';
import SearchNoResult from '../SearchNoResult';
import Loader from 'components/Loader';

function ProductsList() {
  const dispatch = useDispatch();

  const query = useSelector(selectQueryFilter);
  const category = useSelector(selectCategoryFilter);
  const recommended = useSelector(selectRecommendedFilter);
  const productsArray = useSelector(selectProducts);
  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {

     dispatch(
       getAllProducts({
         recommended: recommended.value,
         category: category.value,
         query,
       })
     );
   
   }, [recommended, category, query, dispatch]);

  return (
    <>
      {isLoadingProducts && (
        <Loader/>
      )}
      {productsArray.length > 0 && (
      <ProductsListStyled>
        {productsArray.map(product => {
          return <ProductsItem productData={product} key={product.idProduct} />;
        })}
        {productsArray.length === 0 && !isLoadingProducts &&  !error &&<SearchNoResult />}
        </ProductsListStyled>
       )}
    </>
  );
}

export default ProductsList;
