import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';
import allUserReducer from './allUsersSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    allUsers: allUserReducer,
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
