import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import fetch from "../lib/fetchJson";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err);
        },
      }}>
      <Component {...pageProps} />
      <ToastContainer />
    </SWRConfig>
  );
}

export default MyApp;
