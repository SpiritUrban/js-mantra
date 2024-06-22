'use client';
import type { AppProps } from 'next/app';
import { wrapper } from '@/lib/redux/store';
import '@/styles/globals.css'; 
import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
