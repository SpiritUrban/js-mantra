import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import todosSlice from "./slices/todosSlice";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import roadMapSlice from "./slices/roadMapSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      todos: todosSlice,
      counter: counterSlice,
      auth: authSlice,
      roadMap:roadMapSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
