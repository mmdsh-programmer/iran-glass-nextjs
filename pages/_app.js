import "../styles/globals.css";
import { Layout } from "components/Layout";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "components/SmoothScroll";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
