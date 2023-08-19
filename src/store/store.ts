import { configureStore } from '@reduxjs/toolkit'
import { userStore } from "./slice/user";
import { userAuthApi } from '../store/api/userAuthApi';


export const store = configureStore({
  reducer: {
    userStore: userStore.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
