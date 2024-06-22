'use client';

import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/redux/store';

interface ReduxProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
