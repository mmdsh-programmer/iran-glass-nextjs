import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      {children}
      {pathname === "/" ? (
        <Footer classes="home-footer grey-shadow-top" />
      ) : (
        <Footer />
      )}
    </>
  );
}
