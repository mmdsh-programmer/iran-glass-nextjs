import "../styles/globals.css";
import { useRouter, Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Home from "./index";
import CategoryDetails from "./category-details";
import ProductList from "./product-list";
import About from "./about";
import NotFound from "./404";
import { ProductView } from "components/ProductView";
import { useEffect, useMemo } from "react";

const Header = dynamic(() => import("components/Header"));
const Footer = dynamic(() => import("components/Footer"), { ssr: false });
const SmoothScroll = dynamic(() => import("components/SmoothScroll"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();

  const footerStyle = useMemo(() => {
    switch (pathname) {
      case "/":
        return (
          <Footer
            classes="home-footer grey-shadow-top"
            curvedTextColor={"#bdbdbd"}
            borderColor={"#616161"}
          />
        );
      case "/contact":
      case "/test":
        return;
      default:
        return <Footer curvedTextColor={"#757575"} borderColor={"#ffffff"} />;
    }
  }, [pathname]);

  const headerStyle = useMemo(() => {
    switch (pathname) {
      case "/about":
      case "/contact":
        return <Header themeColor={false} />; //false=dark
      default:
        return <Header themeColor={true} />; //true=light
    }
  }, [pathname]);

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <SmoothScroll key={router.route}>
        {headerStyle}
        <Component {...pageProps} />
        {footerStyle}
      </SmoothScroll>
    </AnimatePresence>
  );
}

export default MyApp;
