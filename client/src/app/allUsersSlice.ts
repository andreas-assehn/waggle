import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: null,
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllUsersState: (state, action) => {
      state.allUsers = action.payload;
    },
    clearAllUsersState: (state) => {
      state.allUsers = null;
    },
  },
});

export const { setAllUsersState, clearAllUsersState } = allUsersSlice.actions;

export default allUsersSlice.reducer;
