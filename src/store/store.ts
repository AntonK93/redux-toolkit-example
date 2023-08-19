import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { userStore } from "./slice/user";
import { userAuthApi } from '../store/api/userAuthApi';


export const store = configureStore({
  reducer: {
    userStore: userStore.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware)

});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>
