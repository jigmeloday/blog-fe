import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '@/app/services/api/test.slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
 reducer: {
  [pokemonApi.reducerPath]: pokemonApi.reducer,

 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch as any);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
