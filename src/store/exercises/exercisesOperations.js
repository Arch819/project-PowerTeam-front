import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const { getExercises, getExercisesByFilters, getExercisesById } =
  api.exercisesApi;

export const getAllExercises = createAsyncThunk(
  'exercises/getExercises',
  async (paramsExercises, { rejectWithValue }) => {
    try {
      const data = await getExercises(paramsExercises);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getExercisesFilters = createAsyncThunk(
  'exercises/getExercisesFilters',
  async (paramsExercisesByFilter, { rejectWithValue }) => {
    try {
      const data = await getExercisesByFilters(paramsExercisesByFilter);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getExercisesId = createAsyncThunk(
  'exercises/getExercisesId',
  async (exercisesId, { rejectWithValue }) => {
    try {
      const data = await getExercisesById(exercisesId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
