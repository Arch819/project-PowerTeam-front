
import Section from 'components/Section';
import TitlePage from 'components/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters';
import ProductsList from 'components/products/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesProducts,
  selectCategoryFilter,
  selectProducts,
  selectQueryFilter,
  selectRecommendedFilter,
} from 'store/products/productsSelector';
import { useEffect } from 'react';
import { getAllProducts, getProductsCategories } from 'store/products/productsOperations';
import { TitleFilter } from '../../components/products/ProductsFilters/index.styled'; 
import SearchNoResult from 'components/products/SearchNoResult';

function ProductsPage() {
  const dispatch = useDispatch();

  const query = useSelector(selectQueryFilter);
  const category = useSelector(selectCategoryFilter);
  const recommended = useSelector(selectRecommendedFilter);
  const productsArray = useSelector(selectProducts);
  const categories = useSelector(selectCategoriesProducts);

  useEffect(() => {
    dispatch(
      getAllProducts({
        recommended: recommended.value,
        category: category.value,
        query,
      })
    );
  }, [recommended, category, query, dispatch]);

  
  useEffect(() => {
    if (!category.length) {
      dispatch(getProductsCategories());
    }
  }, [category, dispatch]);


  return (
    <Section use={'secondary'}>
      <div className="container">
        <TitleFilter>
          <TitlePage title={'Products'} />
          <ProductsFilters categories={categories} />
        </TitleFilter>
        {productsArray.length > 0 ? (
          <ProductsList productsArray={productsArray} />
        ) : (
          <SearchNoResult />
        )}
      </div>
    </Section>
  );
}

export default ProductsPage;
