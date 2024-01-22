import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const { getProducts, getProductsByCategories, getProductsById } =
  api.productsApi;

export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  async ({ recommended, category, query }, { rejectWithValue }) => {
    try {
      const transformedRecommended =
        recommended === 'recommended'
          ? true
          : recommended === 'notRecommended'
          ? false
          : 'none';

      const data = await getProducts({
        title: query,
        category,
        filterType: transformedRecommended,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProductsCategories = createAsyncThunk(
  'products/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProductsByCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProductsId = createAsyncThunk(
  'exercises/getProductsId',
  async (productsId, { rejectWithValue }) => {
    try {
      const data = await getProductsById(productsId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
