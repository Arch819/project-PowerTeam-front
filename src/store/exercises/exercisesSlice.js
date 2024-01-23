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
  resetExercisesState,
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
      .addCase(getExercisesId.fulfilled, handleGetExercisesIdFulfilled)
      .addMatcher(({ type }) => type.includes('logOut'), resetExercisesState);
  },
});

export const exercisesReducer = exercisesSlice.reducer;
