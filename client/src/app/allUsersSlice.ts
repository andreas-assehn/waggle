import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../globalUtils/Types';

const initialState = {
  allUsers: [] as User[],
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllUsersState: (state, action) => {
      state.allUsers = action.payload;
      return state;
    },
    clearAllUsersState: (state) => {
      state.allUsers = [];
      return state;
    },
  },
});

export const { setAllUsersState, clearAllUsersState } = allUsersSlice.actions;

export default allUsersSlice.reducer;

export const userSelector = (state: any) => state.allUsers;
