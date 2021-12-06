import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/Header"));
const Footer = dynamic(() => import("components/Footer"), { ssr: false });
const SmoothScroll = dynamic(() => import("components/SmoothScroll"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();
  return (
    <SmoothScroll>
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      {pathname === "/" ? (
        <Footer classes="home-footer grey-shadow-top" />
      ) : (
        <Footer />
      )}
    </SmoothScroll>
  );
}

export default MyApp;
