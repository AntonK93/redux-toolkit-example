import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAuthApi } from "../api/userAuthApi";

interface User {
    email: string;
    token: string;
    first_name: string;
    last_name: string;
    foreign_lang: string;
}

const initialState: User = {
    token: '',
    email: '',
    first_name: '',
    last_name: '',
    foreign_lang: '',
};

export const userStore = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userAuthApi.endpoints.userLogin.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.first_name = payload.user.first_name;
        state.last_name = payload.user.last_name;
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

export const { updateUserName } = userStore.actions;
