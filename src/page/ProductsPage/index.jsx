//  Products page "/products"
// Складається з:
//  - компоненту TitlePage (опис компонента деталізовано у Diary page)
//  - компоненту ProductsFilters, що дозволяє користувачу відфільтрувати продукти по ключовому слову, за категорією, а також в
// залежності рекомендовано цей продукт йому або ні
//  - компоненту ProductsList, що містить перелік продуктів

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
        <TitlePage title={'Products'} />
        <ProductsFilters
          categories={categories}
        />
        <ProductsList productsArray={productsArray} />
      </div>
    </Section>
  );
}

export default ProductsPage;
