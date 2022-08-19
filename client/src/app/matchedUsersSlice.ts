import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../globalUtils/Types';

const initialState = {
  matchedUsers: [] as User[],
};

const matchedUsersSlice = createSlice({
  name: 'matchedUsers',
  initialState,
  reducers: {
    setMatchedUsersState: (state, action) => {
      state.matchedUsers = action.payload;
      return state;
    },
    clearMatchedUsersState: (state) => {
      state.matchedUsers = [];
      return state;
    },
  },
});

export const { setMatchedUsersState, clearMatchedUsersState } =
  matchedUsersSlice.actions;

export default matchedUsersSlice.reducer;
