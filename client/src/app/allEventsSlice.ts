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
      return state;
    },
    clearAllEventsState: (state) => {
      state.allEvents = [];
      return state;
    },
  },
});

export const { setAllEventsState, clearAllEventsState } =
  allEventsSlice.actions;

export default allEventsSlice.reducer;
