import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'types/authState';

import SecureStorageService from '../../services/SecureStorageService';

const { getItem, removeItem } = SecureStorageService;

const initialState: AuthState = {
  accessToken: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch the accessToken from secure storage
export const fetchAccessToken = createAsyncThunk('auth/fetchAccessToken', async (_, { rejectWithValue }) => {
  try {
    // Introduce a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Fetch the token from secure storage
    const token = await getItem('accessToken');
    return token;
  } catch (error) {
    return rejectWithValue('Failed to fetch accessToken');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      removeItem('accessToken');
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;

export default authSlice.reducer;
