import React from "react";
import styles from "styles/404.module.css";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
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
  );
}
