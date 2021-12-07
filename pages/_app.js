import React, { useEffect } from "react";
import "../styles/globals.css";
import { useRouter, Router } from "next/router";
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
    <SmoothScroll>
      <AnimatePresence exitBeforeEnter initial={true}>
        <React.Fragment key={router.route}>
          <Header />
          <Component {...pageProps} />
          {pathname === "/" ? (
            <Footer classes="home-footer grey-shadow-top" />
          ) : (
            <Footer />
          )}
        </React.Fragment>
      </AnimatePresence>
    </SmoothScroll>
  );
}

export default MyApp;
