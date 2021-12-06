import React from "react";
import { Head } from "next/head";
import styles from "styles/404.module.css";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Iran Glass | Not found</title>
        <meta name="description" content="Iran Glass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles["not-found-body"]}
      >
        <section className={styles["not-found"]}>
          <h2 className={styles["not-found-text"]}>Page not found!</h2>
        </section>
      </motion.main>
    </>
  );
}
