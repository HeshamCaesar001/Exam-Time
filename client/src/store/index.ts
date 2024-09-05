import { configureStore } from '@reduxjs/toolkit';
import { authReducer, login,logout } from './slices/authSlice';
import { announcementReducer } from './slices/announcementsSlice';
import { quizesReducer } from './slices/quizzesSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    announcement:announcementReducer,
    quize:quizesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store,login,logout}
export * from "./thunks/getAnnouncements";
export * from "./thunks/getQuizzes";

