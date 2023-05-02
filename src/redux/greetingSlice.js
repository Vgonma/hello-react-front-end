import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await axios.get('http://localhost:3000/api/greetings/random');
    return response.data;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
        state.error = '';
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default greetingSlice.reducer;
export const greetingsActions = greetingSlice.actions;
