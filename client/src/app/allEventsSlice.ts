import { createSlice } from '@reduxjs/toolkit';
import { Event } from '../../../globalUtils/Types';

const initialState = {
  allEvents: [] as Event[],
};

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {
    setAllEventsState: (state, action) => {
      state.allEvents = action.payload;
    },
    clearAllEventsState: (state) => {
      state.allEvents = [];
    },
  },
});

export const { setAllEventsState, clearAllEventsState } =
  allEventsSlice.actions;

export default allEventsSlice.reducer;
