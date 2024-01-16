import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';
const {
  fetchGetDiaryByDate,
  fetchAddProduct,
  fetchDeleteProduct,
  fetchAddExercise,
  fetchDeleteExercise,
} = api.diaryApi;

export const getDiaryByDateThunk = createAsyncThunk(
  'diary/get',
  async (date, { rejectWithValue }) => {
    try {
      const data = await fetchGetDiaryByDate(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getAddProductThunk = createAsyncThunk(
  'diary/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const data = await fetchAddProduct(product);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getDeleteProductThunk = createAsyncThunk(
  'diary/deleteProduct',
  async (idProduct, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteProduct(idProduct);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getAddExerciseThunk = createAsyncThunk(
  'diary/addExercise',
  async (exercise, { rejectWithValue }) => {
    try {
      const data = await fetchAddExercise(exercise);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getDeleteExerciseThunk = createAsyncThunk(
  'diary/deleteExercise',
  async (idExercise, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteExercise(idExercise);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
