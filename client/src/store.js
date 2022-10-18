import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authApi";
import { convoApi } from "./features/convoApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [convoApi.reducerPath]: convoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, convoApi.middleware),
});
