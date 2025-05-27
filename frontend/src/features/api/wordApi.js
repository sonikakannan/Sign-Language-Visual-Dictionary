import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// wordApi.js
export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  endpoints: (builder) => ({
    getWordByQuery: builder.query({
      query: (query) => `/words/${query.toLowerCase()}`
    }),
    getAllWords: builder.query({
      query: () => '/words'
    }),
    createWord: builder.mutation({
      query: (newWord) => ({
        url: '/words',
        method: 'POST',
        body: newWord,
      })
    }),
deleteWord: builder.mutation({
  query: (id) => ({
    url: `/word/delete/${id}`,
    method: 'POST',
  }),
}),

  }),
});

export const {
  useGetWordByQueryQuery,
  useGetAllWordsQuery,
  useCreateWordMutation,
  useDeleteWordMutation, // <-- Add this
} = wordApi;



