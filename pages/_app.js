import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Home from "./index";
import CategoryDetails from "./category-details";
import NotFound from "./404";

const Header = dynamic(() => import("components/Header"));
const Footer = dynamic(() => import("components/Footer"), { ssr: false });
const SmoothScroll = dynamic(() => import("components/SmoothScroll"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <SmoothScroll key={router.route}>
        <Header />
        <Component {...pageProps} />
        {pathname === "/" ? (
          <Footer
            classes="home-footer grey-shadow-top"
            curvedTextColor={"#bdbdbd"}
            borderColor={"#616161"}
          />
        ) : (
          <Footer curvedTextColor={"#757575"} borderColor={"#ffffff"} />
        )}
      </SmoothScroll>
    </AnimatePresence>
  );
}

export default MyApp;
