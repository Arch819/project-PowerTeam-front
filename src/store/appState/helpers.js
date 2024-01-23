import { initialState } from './initialState';

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const resetState = () => {
  return initialState;
};
