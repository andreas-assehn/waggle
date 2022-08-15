import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Get user from localstorage

const user = JSON.parse(localStorage.getItem('user') || '');

const initialState = {
  isAuthenticated: false,
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    setActiveUser: (state, action) => {
      console.log('inside reducer', action.payload.isAuthenticated);
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    setUserLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    extraReducers: () => {},
  },
});

export const { setActiveUser, setUserLogout, reset } = isAuthSlice.actions;

export default isAuthSlice.reducer;
