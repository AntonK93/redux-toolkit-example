import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAuthApi } from "../api/userAuthApi";

interface User {
    email: string;
    token: string;
    first_name: string;
    password: string;
    last_name: string;
    foreign_lang: string;
}

const initialState: User = {
    token: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    foreign_lang: '',
};

export const userStore = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    updateCredentials: (state, action: PayloadAction<{ email?: User['email'], password?: User['password'] }>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userAuthApi.endpoints.userLogin.matchFulfilled,
      (state, { payload }) => {
        state.first_name = payload.user.first_name;
        state.last_name = payload.user.last_name;
      }
    )
    builder.addMatcher(
      userAuthApi.endpoints.userLogin.matchRejected,
      () => {
        return initialState;
      }
    )
    builder.addMatcher(
      userAuthApi.endpoints.userRegister.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.first_name = payload.user.first_name;
        state.last_name = payload.user.last_name;
      }
    )
  }
});

export const { updateCredentials } = userStore.actions;
