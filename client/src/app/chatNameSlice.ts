import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatName: '' as string,
};

const chatNameSlice = createSlice({
  name: 'chatName',
  initialState,
  reducers: {
    setNameState: (state, action) => {
      state.chatName = action.payload;
      return state;
    },
    clearNameState: (state) => {
      state.chatName = '';
      return state;
    },
  },
});

export const { setNameState, clearNameState } = chatNameSlice.actions;

export default chatNameSlice.reducer;
