import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "components/SmoothScroll";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        {children}
      </AnimatePresence>
      {pathname === "/" ? (
        <Footer classes="home-footer grey-shadow-top" />
      ) : (
        <Footer />
      )}
    </>
  );
}
