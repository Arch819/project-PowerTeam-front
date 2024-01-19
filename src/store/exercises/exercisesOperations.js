import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const { getExercises, getExercisesByFilters } = api.exercisesApi;

export const getAllExercises = createAsyncThunk(
  'exercises/getExercises',
  async (paramsExercises, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams(paramsExercises).toString();
      const { data } = await getExercises(queryString);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getExercisesFilters = createAsyncThunk(
  'exercises/getExercisesFilters',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getExercisesByFilters();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
