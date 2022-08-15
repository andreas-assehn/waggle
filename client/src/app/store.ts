import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import isAuthSliceReducer from './isAuthSlice';

export const store = configureStore({
  reducer: {
    isAuthenticated: isAuthSliceReducer,
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
