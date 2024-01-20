export const handleGetAllProductsFulfilled = (state, { payload }) => {
  state.products = payload;
};

export const handleGetProductsCategoriesFulfilled = (state, { payload }) => {
  state.categories = payload;
};

export const handleGetProductsIdFulfilled = (state, { payload }) => {
  state.productsById = payload;
};
