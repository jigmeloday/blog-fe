import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { UserModel } from '@/app/services/models/users.model';

export const popularAPI = createApi({
 reducerPath: 'popularAPI',
 baseQuery: fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: 'include'
 }as FetchBaseQueryArgs),
 endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  getPopularOtter: builder.query<UserModel[], string>({
   query: () => '/users',
  }),
  getPopularArticle: builder.query({
   query: () => '/articles/popular',
  }),
  // createArticleLike: builder.mutation({
  //  query (body) {
  //   return {
  //    url: 'likes',
  //    method: 'POST',
  //    body,
  //   };
  //  }
  // }),
  // destroyArticleLike: builder.mutation({
  //  query (body) {
  //   return {
  //    url: `likes/${body.like.likable_id}`,
  //    method: 'DELETE',
  //    body,
  //   };
  //  }
  // })
 }),
});

export const {
 useGetPopularOtterQuery,
 useGetPopularArticleQuery,
 useCreateArticleLikeMutation,
 useDestroyArticleLikeMutation
} = popularAPI;
