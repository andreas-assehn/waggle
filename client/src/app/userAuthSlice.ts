import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAuth: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAuth = action.payload;
    },
    logout: (state) => {
      state.userAuth = null;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
