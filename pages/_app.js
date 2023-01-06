import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { store } from "../store/Store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
