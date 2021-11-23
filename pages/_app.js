import "../styles/globals.css";
import { Layout } from "components/Layout";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "components/SmoothScroll";

function MyApp({ Component, pageProps, router }) {
  return (
    <SmoothScroll>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </SmoothScroll>
  );
}

export default MyApp;
