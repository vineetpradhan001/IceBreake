import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/user" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => {
        return {
          url: "/",
          params: query,
          credentials: "include",
        };
      },
      providesTags: (res) => {
        const cs = res.map((c) => c._id);
        return cs;
      },
    }),
    getUser: builder.query({
      query: (id) => {
        return {
          url: `/${id}`,
          credentials: "include",
        };
      },
      providesTags: (res) => [res._id],
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
