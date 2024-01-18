import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './productsInitialState';
import { getAllProducts, getProductsCategories } from './productsOperations';
import { handleGetAllProductsFulfilled, handleGetProductsCategoriesFulfilled } from './productsHelpers';

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.fulfilled, handleGetAllProductsFulfilled)
      .addCase(getProductsCategories.fulfilled, handleGetProductsCategoriesFulfilled);
  },
});

export const productsReducer = productsSlice.reducer;
