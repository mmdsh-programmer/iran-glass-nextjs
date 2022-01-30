import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header({ themeColor }) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles["main-header"]}
    >
      <div
        className={`container ${styles.container}`}
        style={!themeColor ? { borderBottom: "1px solid #000000" } : {}}
      >
        <div className="row">
          <a href="#" className={styles["header-menu-icon"]}>
            <span className={!themeColor ? styles["dark"] : {}}></span>
            <span className={!themeColor ? styles["dark"] : {}}></span>
            <span className={!themeColor ? styles["dark"] : {}}></span>
          </a>

          <Link href="/">
            <a
              className={`${styles["header-logo"]} ${
                !themeColor ? styles["dark"] : {}
              }`}
            >
              IGT
            </a>
          </Link>

          <nav className={styles["header-navbar"]}>
            <ul className={styles["header-menu"]}>
              <li className={styles["menu-item"]}>
                <Link href="/">
                  <a
                    className={`${styles["menu-link"]} ${
                      !themeColor ? styles["dark"] : {}
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/category-details">
                  <a
                    className={`${styles["menu-link"]} ${
                      !themeColor ? styles["dark"] : {}
                    }`}
                  >
                    Products
                  </a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/about">
                  <a
                    className={`${styles["menu-link"]} ${
                      !themeColor ? styles["dark"] : {}
                    }`}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/contact">
                  <a
                    className={`${styles["menu-link"]} ${
                      !themeColor ? styles["dark"] : {}
                    }`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles["header-utilities"]}>
            <ul className={styles["header-utilities-menu"]}>
              <li className={styles["menu-item"]}>
                <Link href="/">
                  <a
                    className={`${styles["menu-link"]} ${
                      styles["lang-switch"]
                    } ${!themeColor ? styles["dark"] : {}}`}
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
                      src={
                        themeColor
                          ? "/images/social-icons/instagram.svg"
                          : "/images/social-icons/dark-instagram.svg"
                      }
                      alt="instagram"
                      title="instagram"
                      width="100%"
                      height="100%"
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
