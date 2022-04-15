import React from "react";
import styles from "./ProductList.module.css";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";


export default function ProductList_1_1() {
  return (
    <>
      <Head>
        <title>Iran Glass | Product List</title>
        <meta name="description" content="Iran Glass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles["product-list-body"]}
      >
        <section className={styles["hero"]}>
          <div className={styles["background"]}></div>
          <div className={`${styles["container"]} container`}>
            <div className={styles["hero-context"]}>
              <h1 className={styles["hero-title"]}>Wall Mirrors</h1>
              <h2 className={styles["hero-subtitle"]}>Decorative Mirror</h2>
            </div>
          </div>
        </section>

        <section className={styles["product-description-container"]}>
          <div className={`${styles["container"]} container`}>
            <p className={styles["description-text"]}>
              Iran Glass Technology with more than 40 years of experience and
              with the aim of meeting the needs of customers and improving the
              quality of products since 2001 has changed its name and created
              the Iranian glass technology brand (with the brand name Gilda
              Glass)
            </p>
            <h3 className={styles["description-title"]}>Wall Mirrors</h3>
          </div>
        </section>

        <section className={styles["product-list"]}>
          <div className={`${styles["container"]} container`}>
            <div
              className={`${styles["product-list-row"]} row wrap justify-center`}
            >
              <Link href="/test">
                <article
                  className={styles["product"]}
                  style={{ cursor: "pointer" }}
                >
                  <figure className={styles["product-details"]}>
                    <img
                      src="/images/product-list/1.avif"
                      className={styles["product-image"]}
                      alt="product image"
                    />
                    <figcaption className={styles["product-caption"]}>
                      <span className={styles["product-model"]}>
                        Miror model
                      </span>
                      <h4 className={styles["product-title"]}>112 D</h4>
                    </figcaption>
                  </figure>
                </article>
              </Link>
              <Link href="/test">
                <article
                  className={styles["product"]}
                  style={{ cursor: "pointer" }}
                >
                  <figure className={styles["product-details"]}>
                    <img
                      src="/images/product-list/2.avif"
                      className={styles["product-image"]}
                      alt="product image"
                    />
                    <figcaption className={styles["product-caption"]}>
                      <span className={styles["product-model"]}>
                        Miror model
                      </span>
                      <h4 className={styles["product-title"]}>112 D</h4>
                    </figcaption>
                  </figure>
                </article>
              </Link>
              <Link href="/test">
                <article
                  className={styles["product"]}
                  style={{ cursor: "pointer" }}
                >
                  <figure className={styles["product-details"]}>
                    <img
                      src="/images/product-list/3.avif"
                      className={styles["product-image"]}
                      alt="product image"
                    />
                    <figcaption className={styles["product-caption"]}>
                      <span className={styles["product-model"]}>
                        Miror model
                      </span>
                      <h4 className={styles["product-title"]}>112 D</h4>
                    </figcaption>
                  </figure>
                </article>
              </Link>
              <Link href="/test">
                <article
                  className={styles["product"]}
                  style={{ cursor: "pointer" }}
                >
                  <figure className={styles["product-details"]}>
                    <img
                      src="/images/product-list/4.avif"
                      className={styles["product-image"]}
                      alt="product image"
                    />
                    <figcaption className={styles["product-caption"]}>
                      <span className={styles["product-model"]}>
                        Miror model
                      </span>
                      <h4 className={styles["product-title"]}>112 D</h4>
                    </figcaption>
                  </figure>
                </article>
              </Link>
            </div>

            <div className={styles["more-products"]}>
              <h5 className={styles["more-products-title"]}>more products</h5>
              <Link href="/product-list-1-2" scroll={false}>
                <a className={`${styles["more-product-category"]} block`}>
                  Table & Console Mirrors
                </a>
              </Link>

              <Link href="/product-list-1-3" scroll={false}>
                <a className={`${styles["more-product-category"]} block`}>
                  Full-length Mirrors
                </a>
              </Link>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
