import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export const pokemonApi = createApi({
 reducerPath: 'pokemonApi',
 baseQuery: fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL
 }as FetchBaseQueryArgs),
 endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  getPokemonByName: builder.query<any, string>({
   query: () => '/articles'
  }),
  getPokemonByID: builder.query<any, string>({
   query: () => '/posts/1'
  }),
 }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
export const { useGetPokemonByIDQuery } = pokemonApi;
