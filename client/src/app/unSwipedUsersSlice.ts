import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../globalUtils/Types';

const initialState = {
  unSwipedUsers: [] as User[],
};

const unSwipedUsers = createSlice({
  name: 'unSwipedUsers',
  initialState,
  reducers: {
    setUnSwipedUsersState: (state, action) => {
      state.unSwipedUsers = action.payload;
      return state;
    },
    clearUnSwipedUsersState: (state) => {
      state.unSwipedUsers = [];
      return state;
    },
    shiftUnSwipedUsers: (state) => {
      state.unSwipedUsers = state.unSwipedUsers.slice(0, -1);
      return state;
    },
  },
});

export const {
  setUnSwipedUsersState,
  clearUnSwipedUsersState,
  shiftUnSwipedUsers,
} = unSwipedUsers.actions;

export default unSwipedUsers.reducer;
