
import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
  name: 'film',
  initialState: {
    movies: []
  },
  reducers: {
    addSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    cleanSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }

});

export const { addSearch, cleanSearch } = filmSlice.actions;

export const filmData = (state) => state.film;

export default filmSlice.reducer;