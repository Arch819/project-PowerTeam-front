import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './exercisesInitialState';
import {
  getAllExercises,
  getExercisesFilters,
  getExercisesId,
} from './exercisesOperations';
import {
  handleGetAllExercisesFulfilled,
  handleGetExercisesFiltersFulfilled,
  handleGetExercisesIdFulfilled,
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
      )
      .addCase(getExercisesId.fulfilled, handleGetExercisesIdFulfilled);
  },
});

export const exercisesReducer = exercisesSlice.reducer;
