import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../globalUtils/Types';

const initialState = {
  userAuth: {} as User,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAuth = action.payload;
    },
    logout: (state) => {
      state.userAuth = {} as User;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
