import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';
import allUserReducer from './allUsersSlice';
import allEventsReducer from './allEventsSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    allUsers: allUserReducer,
    allEvents: allEventsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
