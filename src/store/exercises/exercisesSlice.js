import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './exercisesInitialState';
import { getAllExercises, getExercisesFilters } from './exercisesOperations';
import {
  handleGetAllExercisesFulfilled,
  handleGetExercisesFiltersFulfilled,
} from './exercisesHelpers';

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllExercises.fulfilled, handleGetAllExercisesFulfilled)
      .addCase(
        getExercisesFilters.fulfilled,
        handleGetExercisesFiltersFulfilled
      );
  },
});

export const exercisesReducer = exercisesSlice.reducer;
