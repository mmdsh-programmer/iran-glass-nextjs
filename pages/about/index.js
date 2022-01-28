import React, { useEffect } from "react";
import styles from "./About.module.css";
import Head from "next/head";
import { motion } from "framer-motion";
import { gsap, Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const imageMaskReveal = () => {
    const imageContainers = gsap.utils.toArray(".image-container");
    const revealCover = gsap.utils.toArray(".reveal-cover");
    const motionImages = gsap.utils.toArray(".reveal-image");

    imageContainers.forEach((container, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
        },
      });

      tl.from(container, {
        scale: 0.6,
        ease: Power2.easeOut,
        duration: 1.3,
      });

      tl.from(
        revealCover[i],
        {
          scale: 1.4,
          top: 0,
          ease: Power2.easeOut,
          duration: 2,
          onComplete: () => {
            gsap.set(revealCover[i], { opacity: 0 });
          },
        },
        "-=1.3"
      );

      tl.from(
        motionImages[i],
        {
          autoAlpha: 0,
          scale: 0.2,
          top: 0,
          ease: Power2.easeOut,
          duration: 2,
        },
        "-=2"
      );
    });
  };

  useEffect(() => {
    imageMaskReveal();
  }, []);

  return (
    <>
      <Head>
        <title>Iran Glass | About</title>
        <meta name="description" content="Iran Glass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles["about-body"]}
      >
        <section className={styles["hero"]}>
          <div className={`${styles["container"]} container`}>
            <header className={styles["hero-title-holder"]}>
              <h1
                className={`${styles["hero-title"]} ${styles["d-md-none"]} ${styles["d-lg-block"]}`}
              >
                Iran Glass Technology
              </h1>
              <h1
                className={`${styles["hero-title"]} ${styles["d-md-block"]} ${styles["d-lg-none"]}`}
              >
                Iran
              </h1>
              <h1
                className={`${styles["hero-title"]} ${styles["d-md-block"]} ${styles["d-lg-none"]}`}
              >
                Glass
              </h1>
              <h1
                className={`${styles["hero-title"]} ${styles["d-md-block"]} ${styles["d-lg-none"]}`}
              >
                Technology
              </h1>
              <h2 className={styles["hero-subtitle"]}>
                A premium and world class producer of table, consul and wall
                mirrors in Middle East
              </h2>
            </header>
            <div
              className={`${styles["hero-image-container"]} border-overlay image-container`}
            >
              <div className={`${styles["reveal-cover"]} reveal-cover`}></div>
              <img
                src="/images/about/1.avif"
                className={`${styles["hero-image"]} reveal-image`}
                alt="hero image"
                title="Iran Glass"
              />
            </div>
          </div>
        </section>

        <section className={styles["about-text"]}>
          <div className={`${styles["container"]} container`}>
            <div className="row flex-column">
              <p
                className={`${styles["paragraph"]} ml-auto ${styles["mr-75"]}`}
              >
                This collection with more than 40 years of experience and with
                the aim of meeting the needs of customers and improving the
                quality of products since 2001 has changed its name and created
                the Iranian glass technology brand (with the brand name Gilda
                Glass).
              </p>
              <p
                className={`${styles["paragraph"]} mr-auto ${styles["ml-75"]}`}
              >
                By trying around the clock and improving the quality of the
                products of this collection, while obtaining the national
                standard No. 2385 for the production of construction safety
                glass and standard No. 5004 for the production of industrial
                glass used in home heating devices, it has succeeded in the
                field of optimal management. Obtain ISO9001 and ISO14001
                standards.
              </p>
              <div className={`${styles["about-title"]} mr-auto`}>
                <h3 className={styles["title"]}>The mission </h3>
                <h3 className={styles["title"]}>& the vision in IGT</h3>
              </div>
              <p
                className={`${styles["paragraph"]} ml-auto ${styles["mr-75"]}`}
              >
                Using the latest and most accurate specialized machines in the
                glass industry, such as CNC tables and 5-axis CNC machine tools,
                Iran Glass Technology has been able to meet the needs of the
                domestic market by using the experienced production staff and
                using the creativity and innovation of the young workforce.
                Designing and producing mirror frame decorative products, the
                country does not need to import these products and introduces
                itself as one of the most well-known and reputable brands in the
                country. 1
              </p>
            </div>
          </div>
        </section>

        <section className={styles["gallery"]}>
          <div className={`grid ${styles["gallery-row"]}`}>
            <div className={styles["image-holder"]}>
              <img src="/images/about/gallery-1.avif" alt="gallery-item-1" />
            </div>
            <div className={styles["image-holder"]}>
              <img src="/images/about/gallery-2.avif" alt="gallery-item-2" />
            </div>
            <div className={styles["image-holder"]}>
              <img src="/images/about/gallery-3.avif" alt="gallery-item-3" />
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
