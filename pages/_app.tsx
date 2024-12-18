import { AppProps } from "next/app";
import { wrapper } from "@/lib/RTK/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import Layout from '@/components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
