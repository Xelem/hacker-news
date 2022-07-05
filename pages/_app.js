import "../styles/globals.css";
import Layout from "../comps/Layout";
import IDContextProvider from "../comps/contexts/IDContext";

function MyApp({ Component, pageProps }) {
  return (
    <IDContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IDContextProvider>
  );
}

export default MyApp;
