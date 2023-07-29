import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export const articleAPI = createApi({
 reducerPath: 'articleAPI',
 baseQuery: fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: 'include'
 }as FetchBaseQueryArgs),
 endpoints: (builder: EndpointBuilder<any, any, any>) => ({
  getArticle: builder.query<any, string>({
   query: () => '/articles',
  }),
  getArticleByID: builder.query({
   query: () => '/articles',
  }),
  createArticleLike: builder.mutation({
   query (body) {
    return {
     url: 'likes',
     method: 'POST',
     body,
    };
   }
  }),
  destroyArticleLike: builder.mutation({
   query (body) {
    return {
     url: `likes/${body.like.likable_id}`,
     method: 'DELETE',
     body,
    };
   }
  })
 }),
});

export const {
 useGetArticleQuery,
 useGetArticleByIDQuery,
 useCreateArticleLikeMutation,
 useDestroyArticleLikeMutation
} = articleAPI;
