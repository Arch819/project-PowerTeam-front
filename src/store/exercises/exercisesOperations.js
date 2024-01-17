import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';
import { setToken } from '../auth/operations';

const { getExercises, getExercisesByFilters } = api.exercisesApi;

export const getAllExercises = createAsyncThunk(
  'exercises/getExercises',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.setToken;
      setToken.set(persistedToken);

      const { data } = await getExercises();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExercisesFilters = createAsyncThunk(
  'exercises/getExercisesFilters',
  async (paramsExercises, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.setToken;
      setToken.set(persistedToken);

      const { data } = await getExercisesByFilters(paramsExercises);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
