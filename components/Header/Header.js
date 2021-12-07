import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles["main-header"]}
    >
      <div className={`container ${styles.container}`}>
        <div className="row">
          <a href="#" className={styles["header-menu-icon"]}>
            <span></span>
            <span></span>
            <span></span>
          </a>

          <Link href="/">
            <a className={styles["header-logo"]}>IGT</a>
          </Link>

          <nav className={styles["header-navbar"]}>
            <ul className={styles["header-menu"]}>
              <li className={styles["menu-item"]}>
                <Link href="/">
                  <a className={styles["menu-link"]}>Home</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/category-details">
                  <a className={styles["menu-link"]}>Products</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/404">
                  <a className={styles["menu-link"]}>About</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/">
                  <a className={styles["menu-link"]}>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles["header-utilities"]}>
            <ul className={styles["header-utilities-menu"]}>
              <li className={styles["menu-item"]}>
                <Link href="/">
                  <a
                    className={`${styles["menu-link"]} ${styles["lang-switch"]}`}
                  >
                    فارسی
                  </a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <a
                  className={styles["menu-link"]}
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles["instagram"]}>
                    <img
                      src="/images/social-icons/instagram.svg"
                      alt="instagram"
                      title="instagram"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
