export const selectProducts = state => state.products.products;
export const selectCategoriesProducts = state => state.products.categories;
export const selectProductsId = state => state.products.productsById;

export const selectQueryFilter = state => state.products.filters.query;
export const selectCategoryFilter = state => state.products.filters.category;
export const selectRecommendedFilter = state =>
  state.products.filters.recommended;
