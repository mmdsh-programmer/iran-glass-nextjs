import React from "react";
import styles from "./Contact.module.css";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
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
        className={styles["contact-body"]}
      >
        <section className={styles["contact-row"]}>
          <div
            className={`${styles["mobile-image-holder"]} ${styles["d-md-block"]} ${styles["d-none"]}`}
          >
            <img
              src="/images/contact/1.avif"
              alt="contact banner"
              title="Iran Glass"
            />
          </div>
          <div className={`${styles["container"]} container`}>
            <div className={`${styles["row"]} row`}>
              <div className={`${styles["col"]} ${styles["contact-info"]}`}>
                <h1 className={styles["contact-title"]}>Contact us</h1>
                <h2 className={styles["contact-subtitle"]}>
                  Get in touch with us to inform about all the things that cames
                  to your mind
                </h2>

                <div className={`${styles["mobile-wrap"]} row`}>
                  <dl className={styles["info-list"]}>
                    <dt>Manufacture</dt>
                    <dd>
                      <address>No 20, 117th Azadi St, Mashhad, Iran</address>
                    </dd>
                    <dd className={styles["view-map-holder"]}>
                      <a href="#" className={styles["view-map"]}>
                        View map
                      </a>
                    </dd>
                  </dl>

                  <dl className={styles["info-list"]}>
                    <dt>Sale office</dt>
                    <dd>
                      <address>No 88, Sanabad St, Mashhad, Iran</address>
                    </dd>
                    <dd className={styles["view-map-holder"]}>
                      <a href="#" className={styles["view-map"]}>
                        View map
                      </a>
                    </dd>
                  </dl>
                </div>

                <div className={`${styles["mobile-wrap"]} row`}>
                  <dl className={styles["info-list"]}>
                    <dt>Phone</dt>
                    <dd>
                      <a href="tel:05136661225">051 36661225</a>
                    </dd>
                    <dd>
                      <a href="tel:05136651122">0513 6651122</a>
                    </dd>
                    <dd>
                      <a href="tel:05136652076">0513 6652076</a>
                    </dd>
                  </dl>

                  <dl className={styles["info-list"]}>
                    <dt>Fax</dt>
                    <dd>
                      <a href="tel:05136652076">0513 6652076</a>
                    </dd>
                  </dl>

                  <dl className={styles["info-list"]}>
                    <dt>Telegram</dt>
                    <dd>
                      <a href="https://t.me/glass_iran" target="_blank">
                        @glass_iran
                      </a>
                    </dd>
                    <dd>
                      <a href="https://t.me/09303032020" target="_blank">
                        0930 303 2020
                      </a>
                    </dd>
                  </dl>
                </div>

                <div className={`${styles["mobile-wrap"]} row`}>
                  <dl className={styles["info-list"]}>
                    <dt>Management</dt>
                    <dd>
                      <a href="mailto:info@glassiran.com">info@glassiran.com</a>
                    </dd>
                  </dl>

                  <dl className={styles["info-list"]}>
                    <dt>Sale & Order</dt>
                    <dd>
                      <a href="mailto:order@glassiran.com">
                        order@glassiran.com
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div
                className={`${styles["col"]} ${styles["image-holder"]} ${styles["d-block"]} ${styles["d-md-none"]}`}
              >
                <img
                  src="/images/contact/1.avif"
                  alt="contact banner"
                  title="Iran Glass"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
