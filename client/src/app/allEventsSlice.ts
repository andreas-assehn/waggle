import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allEvents: null,
};

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {
    setAllEventsState: (state, action) => {
      state.allEvents = action.payload;
    },
    clearAllEventsState: (state) => {
      state.allEvents = null;
    },
  },
});

export const { setAllEventsState, clearAllEventsState } =
  allEventsSlice.actions;

export default allEventsSlice.reducer;
