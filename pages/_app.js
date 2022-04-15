import "../styles/globals.css";
import { useRouter, Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Home from "./index";
import CategoryDetails from "./category-details";
import ProductList_1_1 from "./product-list-1-1";
import About from "./about";
import Contact from "./contact";
import NotFound from "./404";
import { ProductView } from "components/ProductView";
import CategoryDetails2  from "./category-details-2";
import CategoryDetails3 from "./category-details-3";
import ProductList_1_2 from "./product-list-1-2";
import ProductList_1_3 from "./product-list-1-3";
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
