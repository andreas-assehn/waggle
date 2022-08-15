import { createSlice } from '@reduxjs/toolkit';

// type isAuth = {
//   isAuthenticated: boolean;
// };

const initialState = {
  isAuthenticated: false,
  user: null,
  isError: false,
  isSuccess: false,
  message: '',
};

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log('inside reducer', action.payload.isAuthenticated);
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    setUserLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setActiveUser, setUserLogout } = isAuthSlice.actions;

export default isAuthSlice.reducer;
