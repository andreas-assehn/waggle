import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  matchModalRoom: '' as string,
};

const matchModalRoomSlice = createSlice({
  name: 'matchModalRoom',
  initialState,
  reducers: {
    setModalRoomState: (state, action) => {
      state.matchModalRoom = action.payload;
      return state;
    },
    clearModalRoomState: (state) => {
      state.matchModalRoom = '';
      return state;
    },
  },
});

export const { setModalRoomState, clearModalRoomState } =
  matchModalRoomSlice.actions;

export default matchModalRoomSlice.reducer;
