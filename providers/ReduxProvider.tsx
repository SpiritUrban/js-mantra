// components/Provider.tsx
"use client";

import { Provider } from "react-redux";
import store from "@/lib/redux/store"; // Убедитесь, что путь к файлу store.ts верный
import React from "react";

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
