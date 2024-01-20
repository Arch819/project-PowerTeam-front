import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './productsInitialState';
import {
  getAllProducts,
  getProductsCategories,
  getProductsId,
} from './productsOperations';
import {
  handleGetAllProductsFulfilled,
  handleGetProductsCategoriesFulfilled,
  handleGetProductsIdFulfilled,
} from './productsHelpers';

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.fulfilled, handleGetAllProductsFulfilled)
      .addCase(
        getProductsCategories.fulfilled,
        handleGetProductsCategoriesFulfilled
      )
      .addCase(getProductsId.fulfilled, handleGetProductsIdFulfilled);
  },
});

export const productsReducer = productsSlice.reducer;
