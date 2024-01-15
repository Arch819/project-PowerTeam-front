import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

export const getStatisticThunk = createAsyncThunk(
  'statistic/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.statisticApi.getStatistic();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
