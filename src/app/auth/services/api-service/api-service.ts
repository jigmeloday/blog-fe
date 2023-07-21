import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export const authAPI = createApi({
 reducerPath: 'auth',
 baseQuery: fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL
 }as FetchBaseQueryArgs),
 endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  loginUser: builder.mutation<any, string>({
   query (body) {
    return {
     url: 'users/sign_in',
     method: 'POST',
     body
    };
   }
  }),
  getPokemonByID: builder.query<any, string>({
   query: () => '/posts/1'
  }),
 }),
});

export const { useLoginUserMutation } = authAPI;


