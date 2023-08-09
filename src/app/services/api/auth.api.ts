import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export const authAPI = createApi({
 reducerPath: 'auth',
 baseQuery: fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: 'include',
 }as FetchBaseQueryArgs),
 endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  loginUser: builder.mutation<any, string>({
   query (body) {
    return {
     url: 'users/sign_in',
     method: 'POST',
     body,
    };
   }
  }),
  registration: builder.mutation({
   query ( body ) {
    return {
     url: 'users',
     method: 'POST',
     body,
    };
   }
  }),
  confirmation: builder.mutation({
   query (body){
    return {
     url: `users/confirmation?confirmation_token=${body}`,
     method: 'GET',
    };
   }
  }),
  resendConfirmation: builder.mutation({
   query (body) {
    return {
     url: 'users/confirmation',
     method: 'POST',
     body
    };
   }
  })
 }),
});

export const {
 useLoginUserMutation,
 useRegistrationMutation,
 useConfirmationMutation,
 useResendConfirmationMutation
} = authAPI;


