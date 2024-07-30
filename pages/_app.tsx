'use client';
import type { AppProps } from 'next/app';
import { wrapper } from '@/lib/RTK/store';
import '@/styles/globals.css'; 
import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {

  if (typeof window !== 'undefined') setTimeout(() => {
    console.clear()
  }, 1000);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
