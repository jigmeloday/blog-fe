import { configureStore } from '@reduxjs/toolkit';
import { articleAPI } from '@/app/services/api/article.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authAPI } from '@/app/(auth)/services/api-service/api-service';

export const store = configureStore({
 reducer: {
  [articleAPI.reducerPath]: articleAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer

 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authAPI.middleware).concat(articleAPI.middleware),
});

setupListeners(store.dispatch as any);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
