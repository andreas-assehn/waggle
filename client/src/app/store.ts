import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';
import allEventsReducer from './allEventsSlice';
import unSwipedUsersReducer from './unSwipedUsersSlice';
import matchedUsersReducer from './matchedUsersSlice';
import chatNameReducer from './chatNameSlice';
import matchModalRoomReducer from './matchModalRoomSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    allEvents: allEventsReducer,
    unSwipedUsers: unSwipedUsersReducer,
    matchedUsers: matchedUsersReducer,
    chatName: chatNameReducer,
    matchModalRoom: matchModalRoomReducer,
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
