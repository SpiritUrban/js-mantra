import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todosSlice from "./slices/todosSlice";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import roadMapSlice from "./slices/roadMapSlice"

const combinedReducer = combineReducers({
  todos: todosSlice,
  counter: counterSlice,
  auth: authSlice,
  roadMap:roadMapSlice

});

const reducer = (state: ReturnType<typeof combinedReducer> | undefined, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
