import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await goitApi.post('/users/signup', credentials);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
