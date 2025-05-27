import { configureStore } from '@reduxjs/toolkit';
import { wordApi } from './api/wordApi';

export const store = configureStore({
  reducer: {
    [wordApi.reducerPath]: wordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wordApi.middleware),
});
