import api from 'api';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { register, login, logOut, currentUser, avatar, profile } = api.authApi;

export const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (body, { rejectWithValue }) => {
    try {
      const data = await register(body);
      setToken.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      setToken.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOut();
      setToken.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue();
    }
    try {
      setToken.set(token);
      const data = await currentUser();
      return data;
    } catch (error) {
      setToken.unset();
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const data = await avatar(formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      return data.avatarURL;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (newUserData, { rejectWithValue }) => {
    try {
      const data = await profile(newUserData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
