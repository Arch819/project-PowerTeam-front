import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  resetState,
} from './helpers';

const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(({ type }) => type.includes('logOut'), resetState)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const appReducer = appSlice.reducer;
