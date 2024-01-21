import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const { getProducts, getProductsByCategories } = api.productsApi;

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
               filterType: transformedRecommended,
               category,
               title: query,
              
               blood: 1,
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
