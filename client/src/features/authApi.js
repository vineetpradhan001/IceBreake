import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    currentUser: builder.query({
      query: () => ({
        url: "/currentuser",
        credentials: "include",
      }),
      providesTags: ["currentUser"],
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: (res) => res && ["currentUser"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: (res) => res && ["currentUser"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        credentials: "include",
      }),
      invalidatesTags: (res) => res && ["currentUser"],
    }),
  }),
});

export const {
  useCurrentUserQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
