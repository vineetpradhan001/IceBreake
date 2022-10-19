import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/authApi";
import { convoApi } from "./features/convoApi";
import { userApi } from "./features/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [convoApi.reducerPath]: convoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      convoApi.middleware,
      userApi.middleware
    ),
});
