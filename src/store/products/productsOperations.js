import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const { getProducts, getProductsByCategories } = api.productsApi;

export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  async ({ recommended, category, query }, { rejectWithValue }) => {
    try {
      const queryParams = [];

      if (recommended && recommended !== 'all') {
        queryParams.push(`recommended=${recommended}`);
      }

      if (category && category !== 'all') {
        queryParams.push(`category_id=${category}`);
      }

      if (query && query.trim() !== '') {
        queryParams.push(`query=${query}`);
      }

      const queryString = queryParams.join('&');      

      const { data } = await getProducts(queryString);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsCategories = createAsyncThunk(
  'products/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProductsByCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
