// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserDataLogin {
    email: string;
    password: string;
}
export interface UserDataRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    email_subscription: boolean;
    native_lang: string;
    foreign_lang: string;
}
export interface UserDataLoginResponse {
    token: {
        token: string;
    }
    user: {
        email: string
        email_subscription: boolean;
        email_verified: boolean;
        first_name: string;
        foreign_lang: string;
        has_password: boolean;
        id: number;
        last_name: string;
        native_lang: string;
        photo:null
        subscription:null
    }
}
interface UserDataRegisterResponse {
    token: {
        token: string;
    }
    user: {
        email: string
        email_subscription: boolean;
        email_verified: boolean;
        first_name: string;
        foreign_lang: string;
        has_password: boolean;
        id: number;
        last_name: string;
        native_lang: string;
        photo:null
        subscription:null
    }
}

export const userAuthApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://coolapiurl.com/api/user',    
    }),
        
    endpoints: (builder) => ({
        userLogin: builder.query<UserDataLoginResponse, UserDataLogin>({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body,
            }),
            async onQueryStarted(_id, { queryFulfilled }) {
                console.log("starting!");
                try {
                  const { data } = await queryFulfilled;
                  console.log("success!", data);
                } catch (err) {
                  console.log("error... ", err);
                }
            }
        }),
        userRegister: builder.query<UserDataRegisterResponse, UserDataRegister>({
            query: (body) => ({
                url: `register`,
                method: 'POST',
                body,
            }),
            async onQueryStarted(_id, { queryFulfilled }) {
                console.log("starting!");
                try {
                  const { data } = await queryFulfilled;
                  console.log("success!", data);
                } catch (err) {
                  console.log("error... ", err);
                }
            }
        }),
        
    }),
});
  