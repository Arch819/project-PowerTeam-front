import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import {
  getAddExerciseThunk,
  getAddProductThunk,
  getDeleteExerciseThunk,
  getDeleteProductThunk,
  getDiaryByDateThunk,
} from './diaryThunk.js';
import {
  addDiaryExerciseFulfilled,
  addDiaryProductFulfilled,
  deleteDiaryExerciseFulfilled,
  deleteDiaryProductFulfilled,
  getDiaryFulfilled,
  resetState,
} from './diaryHelpers.js';

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDiaryByDateThunk.fulfilled, getDiaryFulfilled)
      .addCase(getAddProductThunk.fulfilled, addDiaryProductFulfilled)
      .addCase(getDeleteProductThunk.fulfilled, deleteDiaryProductFulfilled)
      .addCase(getAddExerciseThunk.fulfilled, addDiaryExerciseFulfilled)
      .addCase(getDeleteExerciseThunk.fulfilled, deleteDiaryExerciseFulfilled)
      .addMatcher(({ type }) => type.includes('logOut'), resetState);
  },
});

export const diaryReducer = diarySlice.reducer;
