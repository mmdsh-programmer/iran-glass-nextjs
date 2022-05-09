/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./CategoryDetails.module.css";
import plStyles from "../product-list-1-1/ProductList.module.css";
import { MoreButton } from "components/MoreButton";
import { motion } from "framer-motion";
import { gsap, Power4, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

export default function CategoryDetails3() {
  gsap.registerPlugin(ScrollTrigger);
  const mainTitleRef = useRef();
  const headerSubtitleRef = useRef();
  const bannerDescriptionRef = useRef();
  const counterHolderRef = useRef();

  const heroAnimation = () => {
    new SplitType(mainTitleRef.current, {
      linesClass: "split-child",
    });

    new SplitType(headerSubtitleRef.current, {
      linesClass: "split-child",
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: mainTitleRef.current,
        start: "center bottom",
      },
    });
    timeLine
      .from(".main-title .word", {
        duration: 1.2,
        delay: 0.5,
        y: 500,
        ease: Power4.easeOut,
      })
      .from(
        ".header-subtitle .word",
        {
          duration: 1.3,
          y: 500,
          ease: Power2.easeOut,
        },
        "0.5"
      );
  };

  const bannerDescriptionAnimation = () => {
    new SplitType(bannerDescriptionRef.current, {
      linesClass: "split-child",
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: bannerDescriptionRef.current,
        start: "top bottom",
      },
    });

    timeLine.from(".banner-description .word", {
      duration: 1.2,
      delay: 0.5,
      y: 500,
      stagger: 0.01,
      ease: Power4.easeOut,
    });
  };

  useEffect(() => {
    heroAnimation();
    bannerDescriptionAnimation();
  }, []);

  return (
    <>
      <Head>
        <title>Iran Glass | Categories</title>
        <meta name="description" content="Iran Glass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles["category-body"]}
      >
        <section className={styles["hero"]}>
          <div className="container">
            <header className={styles["category-header"]}>
              <h1
                className={`${styles["header-title"]} main-title`}
                ref={mainTitleRef}
              >
                General Glasses
              </h1>
              <p
                className={`${styles["header-subtitle"]} header-subtitle`}
                ref={headerSubtitleRef}
              >
                The first and the only Iranian manufacturer of Glass Touch
                Panels that deploys modern European technological developments
                to make glass products used in smart buildings.
              </p>
            </header>
          </div>
          <div className={styles["background"]}>
            <img
              className={styles["background-image"]}
              src="/images/general-glass.jpg"
              alt="hero"
            />
          </div>

          <p
            className={`${styles["description"]} banner-description`}
            ref={bannerDescriptionRef}
          >
            A wide variety of glass and mirror products can be seen in our
            products. Our other products, including most of the glass products
            used in buildings, interior designs, and home and industrial
            appliances, can help you achieve your goals in choosing the right
            material???? so as to make your dreams come true
          </p>
        </section>

        <section className={styles["catalogue"]}>
          <div className={`container ${styles["container"]}`}>
            <div
              className={plStyles["product-list"]}
              style={{ marginBottom: "0px", marginTop: "300px" }}
            >
              <div className={`${plStyles["container"]} container`}>
                <div
                  className={`${plStyles["product-list-row"]} row wrap justify-center`}
                >
                  <Link href="/test">
                    <article
                      className={plStyles["product"]}
                      style={{ cursor: "pointer" }}
                    >
                      <figure className={plStyles["product-details"]}>
                        <img
                          src="/images/product-list/1.avif"
                          className={plStyles["product-image"]}
                          alt="product image"
                        />
                        <figcaption className={plStyles["product-caption"]}>
                          <span className={plStyles["product-model"]}>
                            Miror model
                          </span>
                          <h4 className={plStyles["product-title"]}>112 D</h4>
                        </figcaption>
                      </figure>
                    </article>
                  </Link>
                  <Link href="/test">
                    <article
                      className={plStyles["product"]}
                      style={{ cursor: "pointer" }}
                    >
                      <figure className={plStyles["product-details"]}>
                        <img
                          src="/images/product-list/2.avif"
                          className={plStyles["product-image"]}
                          alt="product image"
                        />
                        <figcaption className={plStyles["product-caption"]}>
                          <span className={plStyles["product-model"]}>
                            Miror model
                          </span>
                          <h4 className={plStyles["product-title"]}>112 D</h4>
                        </figcaption>
                      </figure>
                    </article>
                  </Link>
                  <Link href="/test">
                    <article
                      className={plStyles["product"]}
                      style={{ cursor: "pointer" }}
                    >
                      <figure className={plStyles["product-details"]}>
                        <img
                          src="/images/product-list/3.avif"
                          className={plStyles["product-image"]}
                          alt="product image"
                        />
                        <figcaption className={plStyles["product-caption"]}>
                          <span className={plStyles["product-model"]}>
                            Miror model
                          </span>
                          <h4 className={plStyles["product-title"]}>112 D</h4>
                        </figcaption>
                      </figure>
                    </article>
                  </Link>
                  <Link href="/test">
                    <article
                      className={plStyles["product"]}
                      style={{ cursor: "pointer" }}
                    >
                      <figure className={plStyles["product-details"]}>
                        <img
                          src="/images/product-list/4.avif"
                          className={plStyles["product-image"]}
                          alt="product image"
                        />
                        <figcaption className={plStyles["product-caption"]}>
                          <span className={plStyles["product-model"]}>
                            Miror model
                          </span>
                          <h4 className={plStyles["product-title"]}>112 D</h4>
                        </figcaption>
                      </figure>
                    </article>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["quote"]}>
          <div className="container">
            <blockquote cite="#" className={styles["quote-text"]}>
              Modern design is about realigning your priorities to help keep you
              focused on the important things in life
            </blockquote>
          </div>
        </section>

        <section className={styles["gallery"]}>
          <div
            className={`container row wrap align-center ${styles["gallery-container"]}`}
          >
            <div className={styles["image-holder"]}>
              <img src="/images/home/image-2.avif" alt="gallery-item-1" />
            </div>
            <div className={styles["image-holder"]}>
              <img src="/images/home/quote-image.avif" alt="gallery-item-2" />
            </div>
            <div className={styles["image-holder"]}>
              <img src="/images/home/work-1.avif" alt="gallery-item-3" />
            </div>
            <div className={styles["image-holder"]}>
              <img src="/images/home/work-2.avif" alt="gallery-item-4" />
            </div>
            <div className={styles["image-holder"]}>
              <img
                src="/images/category/gallery-image-4.avif"
                alt="gallery-item-5"
              />
            </div>
            <div className={styles["image-holder"]}>
              <img
                src="/images/category/gallery-image-2.avif"
                alt="gallery-item-6"
              />
            </div>
            <div className={styles["image-holder"]}>
              <img
                src="/images/category/product-image.avif"
                alt="gallery-item-7"
              />
            </div>
            <div className={styles["image-holder"]}>
              <img
                src="/images/category/gallery-image-1.avif"
                alt="gallery-item-8"
              />
            </div>
            <div className={styles["image-holder"]}>
              <img
                src="/images/category/gallery-image-3.avif"
                alt="gallery-item-9"
              />
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
