import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getStatisticThunk } from './statisticThunk';
import { handleStatisticFulfilled } from './statisticHelpers';

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: builder => {
    builder.addCase(getStatisticThunk.fulfilled, handleStatisticFulfilled);
  },
});

export const statisticReducer = statisticSlice.reducer;
