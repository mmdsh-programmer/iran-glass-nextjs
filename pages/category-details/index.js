/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./CategoryDetails.module.css";
import { MoreButton } from "components/MoreButton";
import { motion } from "framer-motion";
import { gsap, Power4, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

export default function CategoryDetails() {
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

  const catalogueCounterAnimation = () => {
    const counters = counterHolderRef.current.children;
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: counterHolderRef.current,
        start: "top center - 30%",
      },
    });

    timeLine
      .to(".counter-separator", {
        transformOrigin: "% 50%",
        scaleY: 1,
        duration: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".mask-layer",
        {
          transformOrigin: "50% 0%",
          scaleX: 0,
          duration: 1,
          ease: Power2.easeOut,
        },
        "0.5"
      );
  };

  useEffect(() => {
    heroAnimation();
    bannerDescriptionAnimation();
    catalogueCounterAnimation();
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
                Decorative Mirror
              </h1>
              <p
                className={`${styles["header-subtitle"]} header-subtitle`}
                ref={headerSubtitleRef}
              >
                Products that use mirrors in their production enjoy a great
                variety. Looking more meticulously, you will definitely find
                them in your home and workplace.
              </p>
            </header>
          </div>
          <div className={styles["background"]}>
            <img
              className={styles["background-image"]}
              src="/images/category/hero-image.avif"
              alt="hero"
            />
          </div>

          <p
            className={`${styles["description"]} banner-description`}
            ref={bannerDescriptionRef}
          >
            We are constantly updating and diversifying our products, and we are
            open to take your ideas into account in our future designs. In this
            section, a number of our decorative mirror products, as a small part
            of our capabilities in this field, are introduced. Don’t miss our
            new designs presented to you here.
          </p>
        </section>

        <section className={styles["catalogue"]}>
          <div className={`container ${styles["container"]}`}>
            <div
              className={`row ml-lg-20 mr-lg-20 wrap ${styles["catalogue-counter"]} catalogue-counter`}
              ref={counterHolderRef}
            >
              <div
                className={`col ${styles["col-4"]} row justify-start align-start`}
              >
                <div className="row align-end p-relative">
                  <div className={`${styles["mask-layer"]} mask-layer`}></div>
                  <span className={styles["counter-number"]}>48</span>
                  <span
                    className={`${styles["counter-separator"]} counter-separator`}
                  ></span>
                  <h4 className={`inline-block ${styles["counter-title"]}`}>
                    Wall mirors
                  </h4>
                </div>
              </div>
              <div
                className={`col ${styles["col-4"]} row justify-center align-center`}
              >
                <div className="row align-end p-relative">
                  <div className={`${styles["mask-layer"]} mask-layer`}></div>
                  <span className={styles["counter-number"]}>6</span>
                  <span
                    className={`${styles["counter-separator"]} counter-separator`}
                  ></span>
                  <h4 className={`inline-block ${styles["counter-title"]}`}>
                    Miror tables
                  </h4>
                </div>
              </div>
              <div
                className={`col ${styles["col-4"]} row justify-end align-end`}
              >
                <div className="row align-end p-relative">
                  <div className={`${styles["mask-layer"]} mask-layer`}></div>
                  <span className={styles["counter-number"]}>10</span>
                  <span
                    className={`${styles["counter-separator"]} counter-separator`}
                  ></span>
                  <h4 className={`inline-block ${styles["counter-title"]}`}>
                    Miror consuls
                  </h4>
                </div>
              </div>
            </div>

            <div className={styles["catalogue-data"]}>
              <header
                className={`${styles["catalogue-data-title"]} ml-lg-20 mr-lg-20`}
              >
                <h3 className={styles["title"]}>Wall Mirrors</h3>
              </header>

              <div className="row align-center">
                <span className={`block ${styles["counter-separator"]}`}></span>
                <span className={`block ${styles["counter-number"]}`}>
                  48 products
                </span>
              </div>

              <div className="row wrap align-center">
                <p className={styles["catalogue-data-description"]}>
                  Iran Glass Technology with more than 40 years of experience
                  and with the aim of meeting the needs of customers
                </p>

                <MoreButton
                  href="/product-list-1-1"
                  className={styles["view-products"]}
                >
                  View products
                </MoreButton>

                <div className={styles["catalogue-data-image"]}>
                  <img
                    className={styles["image"]}
                    src="/images/category/product-image.avif"
                    alt="product"
                    title="product image"
                  />
                </div>
              </div>
            </div>

            <div className={styles["catalogue-data"]}>
              <header
                className={`${styles["catalogue-data-title"]} ml-lg-20 mr-lg-20`}
              >
                <h3 className={styles["title"]}>Table Mirrors</h3>
              </header>

              <div className="row align-center">
                <span className={`block ${styles["counter-separator"]}`}></span>
                <span className={`block ${styles["counter-number"]}`}>
                  48 products
                </span>
              </div>

              <div className="row wrap align-center">
                <p className={styles["catalogue-data-description"]}>
                  Iran Glass Technology with more than 40 years of experience
                  and with the aim of meeting the needs of customers
                </p>

                <MoreButton
                  href="/product-list-1-2"
                  className={styles["view-products"]}
                >
                  View products
                </MoreButton>

                <div className={styles["catalogue-data-image"]}>
                  <img
                    className={styles["image"]}
                    src="/images/table-mirror.jpg"
                    alt="product"
                    title="product image"
                  />
                </div>
              </div>
            </div>

            <div className={styles["catalogue-data"]}>
              <header
                className={`${styles["catalogue-data-title"]} ml-lg-20 mr-lg-20`}
              >
                <h3 className={styles["title"]}>Console Mirror</h3>
              </header>

              <div className="row align-center">
                <span className={`block ${styles["counter-separator"]}`}></span>
                <span className={`block ${styles["counter-number"]}`}>
                  48 products
                </span>
              </div>

              <div className="row wrap align-center">
                <p className={styles["catalogue-data-description"]}>
                  Iran Glass Technology with more than 40 years of experience
                  and with the aim of meeting the needs of customers
                </p>

                <MoreButton
                  href="/product-list-1-3"
                  className={styles["view-products"]}
                >
                  View products
                </MoreButton>

                <div className={styles["catalogue-data-image"]}>
                  <img
                    className={styles["image"]}
                    src="/images/console-mirror.jpg"
                    alt="product"
                    title="product image"
                  />
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
