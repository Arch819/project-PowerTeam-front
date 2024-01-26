import React, { memo } from 'react';
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
import { useEffect, useState } from 'react';
import {
  getAllProducts,
  getProductsCategories,
} from 'store/products/productsOperations';
import { TitleFilter } from '../../components/products/ProductsFilters/index.styled';
import SearchNoResult from 'components/products/SearchNoResult';
import { LocalTitlePage } from './ProductsPage.styled';

function ProductsPage() {
  const dispatch = useDispatch();

  const query = useSelector(selectQueryFilter);
  const category = useSelector(selectCategoryFilter);
  const recommended = useSelector(selectRecommendedFilter);
  const productsArray = useSelector(selectProducts);
  const categories = useSelector(selectCategoriesProducts);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const loadNextPage = () => {
    if (!loading) {
      setLoading(true);
      dispatch(
        getAllProducts({
          recommended: recommended.value,
          category: category.value,
          query,
          page: page + 1,
        })
      ).then(({ payload }) => {
        setLoading(false);
        const hasNextPage = payload.currentPage < payload.totalPages;
        if (hasNextPage) {
          setPage(prevPage => prevPage + 1);
        }
      });
    }
  };
  useEffect(() => {
    console.log('ProductsPage useEffect loadNextPage');
    loadNextPage();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, page, recommended.value, category.value, query, dispatch]);

  useEffect(() => {
    if (!category.length) {
      dispatch(getProductsCategories());
    }
  }, [category, dispatch]);

  return (
    <Section use={'secondary'}>
      <div className="container">
        <TitleFilter>
          <LocalTitlePage>
            <TitlePage title={'Products'} />
          </LocalTitlePage>
          <ProductsFilters categories={categories} />
        </TitleFilter>
        {productsArray.length > 0 ? (
          <ProductsList productsArray={productsArray} />
        ) : (
          <SearchNoResult />
        )}
        {loading && productsArray.length > 0 && <div>Loading...</div>}
      </div>
    </Section>
  );
}

export default memo(ProductsPage);
