import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';
import allUserReducer from './allUsersSlice';
import allEventsReducer from './allEventsSlice';
import unSwipedUsersReducer from './unSwipedUsersSlice';
import matchedUsersReducer from './matchedUsersSlice';
import chatNameReducer from './chatNameSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    allUsers: allUserReducer,
    allEvents: allEventsReducer,
    unSwipedUsers: unSwipedUsersReducer,
    matchedUsers: matchedUsersReducer,
    chatName: chatNameReducer,
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
