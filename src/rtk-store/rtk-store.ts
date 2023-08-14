import { configureStore } from '@reduxjs/toolkit';
import { articleAPI } from '@/app/services/api/article.api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authAPI } from '@/app/services/api/auth.api';
import { popularAPI } from '@/app/services/api/get-popular.api';
import { userAPI } from '@/app/services/api/user.api';


export const store = configureStore({
 reducer: {
  [articleAPI.reducerPath]: articleAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [popularAPI.reducerPath]: popularAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer

 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
   .concat(authAPI.middleware)
   .concat(articleAPI.middleware)
   .concat(popularAPI.middleware)
   .concat(userAPI.middleware),
});

setupListeners(store.dispatch as any);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
