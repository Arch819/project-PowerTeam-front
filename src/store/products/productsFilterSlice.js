import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './productsFilterInitialState';

const productsFilterSlice = createSlice({
  name: 'productsFilters',
  initialState,
  reducers: {
    updateQueryFilter(state, action) {
      state.query = action.payload;
    },
    updateCategoryFilter(state, action) {
      state.category = action.payload;
    },
    updateRecommendedFilter(state, action) {
      state.recommended = action.payload;
    },
  },
});

export const {
  updateQueryFilter,
  updateCategoryFilter,
  updateRecommendedFilter,
} = productsFilterSlice.actions;

export const productsFiltersReducer = productsFilterSlice.reducer;
