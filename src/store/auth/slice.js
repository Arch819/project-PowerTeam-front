import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  fetchCurrentUser,
  logOutUser,
  loginUser,
  registerUser,
  updateAvatar,
  updateProfile,
} from './operations';
import {
  handleFetchCurrentUserFulfilled,
  handleFetchCurrentUserPending,
  handleLogOutFulfilled,
  handleLogOutPending,
  handleLoginFulfilled,
  handleRegisterUserFulfilled,
  handleUpdateAvatarFulfilled,
  handleUpdateProfileFulfilled,
} from './helpers';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleRegisterUserFulfilled)
      .addCase(loginUser.fulfilled, handleLoginFulfilled)
      .addCase(logOutUser.pending, handleLogOutPending)
      .addCase(logOutUser.fulfilled, handleLogOutFulfilled)
      .addCase(fetchCurrentUser.pending, handleFetchCurrentUserPending)
      .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
      .addCase(updateAvatar.fulfilled, handleUpdateAvatarFulfilled)
      .addCase(updateProfile.fulfilled, handleUpdateProfileFulfilled)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.isRefreshing = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
