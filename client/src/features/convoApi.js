import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const convoApi = createApi({
  reducerPath: "convoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/convo" }),
  endpoints: (builder) => ({
    getConvos: builder.query({
      query: (query) => {
        return {
          url: "/",
          params: query,
          credentials: "include",
        };
      },
      providesTags: (res) => {
        const cs = res.map((c) => c._id);
        return [...cs, "convo"];
      },
    }),
    getConvo: builder.query({
      query: (id) => {
        return {
          url: `/${id}`,
          credentials: "include",
        };
      },
      providesTags: (res) => [res._id],
    }),
    createConvo: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: (res) => res && [res, "convo"],
    }),
    deleteConvo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (res) => res && [res, "convo"],
    }),
    updateConvo: builder.mutation({
      query: ({ id, ...body }) => {
        console.log(body);
        return {
          url: `/${id}`,
          body,
          method: "PATCH",
          credentials: "include",
        };
      },
      invalidatesTags: (res) => res && [res],
    }),
  }),
});

export const {
  useGetConvoQuery,
  useGetConvosQuery,
  useCreateConvoMutation,
  useDeleteConvoMutation,
  useUpdateConvoMutation,
} = convoApi;
