import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : "https://sign-language-visual-dictionary.onrender.com";

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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



