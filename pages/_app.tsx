import { AppProps } from "next/app";
import { wrapper } from "@/lib/RTK/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default MyApp;
