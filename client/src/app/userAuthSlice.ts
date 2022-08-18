import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../globalUtils/Types';

const initialState = {
  userAuth: null as User | null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userAuth = action.payload;
      return state;
    },
    logout: (state) => {
      state.userAuth = null;
      return state;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
