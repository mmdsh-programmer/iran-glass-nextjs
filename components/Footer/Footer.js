import React, { useEffect, useRef } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Footer.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useWindowSize from "src/hooks/useWindowSize";
import { motion } from "framer-motion";

export default function Footer(props) {
  gsap.registerPlugin(ScrollTrigger);
  const { classes, curvedTextColor, borderColor } = props;
  const customFooter = classNames(styles["main-footer"], classes);
  const footerRef = useRef(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const movementClamp = gsap.utils.clamp(55, 200);
    gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        scrub: 2,
        onUpdate: ({ progress }) => {
          let percentAmount = progress * 100 * 3;
          gsap.fromTo(
            "#masterTextPath",
            {
              attr: {
                startOffset:
                  gsap.getProperty("#masterTextPath", "startOffset")?.animVal
                    ?.value || 0,
              },
            },
            {
              ease: "power3.out",
              duration: 2,
              attr: {
                startOffset: movementClamp(percentAmount),
              },
            }
          );
        },
      },
    });
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={customFooter}
      ref={footerRef}
    >
      <svg
        id={styles["textPath"]}
        viewBox={`0 0 ${
          width ? (width > 768 ? width : width + 400) : 1920
        } 1080`}
      >
        <path
          id="master"
          d="M0,120.673s303.155-270.779,676.947,0,132.446,756.415,0,841.769S291.382,1174.357,0,962.443"
          fill="none"
        />
        <text
          id="mainText"
          className={styles["master-text-path"]}
          fill={curvedTextColor}
        >
          <textPath id="masterTextPath" xlinkHref="#master" startOffset="0">
            Interested in our products? get in touch for more information
          </textPath>
        </text>
      </svg>
      <div className={`container ${styles["container"]}`}>
        <div className={`row flex-column ${styles["contact"]}`}>
          <h4 className={styles["contact-title"]}>Simply contact us via</h4>
          <a
            className={styles["contact-email"]}
            href="mailto:contact@iranglass.com"
          >
            contact@iranglass.com
          </a>

          <p className={styles["follow-instagram"]}>
            Also you can follow us on
            <a
              className={styles["instagram-link"]}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles["instagram-icon"]}>
                <img
                  src="/images/home/instagram-sketched.svg"
                  alt="instagram"
                  title="instagram"
                  width="100%"
                  height="100%"
                />
              </span>
              Instagram
            </a>
          </p>
        </div>
        <div className="row wrap">
          <dl className={styles["subscribe"]}>
            <dt>IGT</dt>
            <dd>Iran Glass Technology</dd>
          </dl>
        </div>

        <div className="row wrap footer-info">
          <div className={styles["col-3"]}>
            <h4 className={styles["footer-info-title"]}>
              Get in touch with us
            </h4>
            <ul className={styles["footer-info-menu"]}>
              <li className={styles["menu-item"]}>
                <address className={styles["footer-info-address"]}>
                  No 20, Azadi 117th, Mashhad,Iran
                </address>
              </li>
              <li className={styles["menu-item"]}>
                <span className={styles["footer-info-postcode"]}>
                  Po Box: 91784 7718
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles["col-3"]} ${styles["no-title"]}`}>
            <ul className={styles["footer-info-menu"]}>
              <li className={styles["menu-item"]}>
                <a
                  href="mailto:contact@iranglass.com"
                  className={`${styles["footer-info-email"]} ${styles["menu-link"]}`}
                >
                  contact@iranglass.com
                </a>
              </li>
              <li className={styles["menu-item"]}>
                <a
                  href="tel:+985136661225"
                  className={`${styles["footer-info-tel"]} ${styles["menu-link"]}`}
                >
                  +98 513 6661225
                </a>
              </li>
              <li className={styles["menu-item"]}>
                <a
                  href="tel:+989103002020"
                  className={`${styles["footer-info-phone"]} ${styles["menu-link"]}`}
                >
                  +98 910 3002020
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["col-3"]}>
            <h4 className={styles["footer-info-title"]}>Products</h4>
            <ul className={styles["footer-info-menu"]}>
              <li className={styles["menu-item"]}>
                <Link href="/" scroll={false}>
                  <a className={styles["menu-link"]}>Decoration mirors</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/" scroll={false}>
                  <a className={styles["menu-link"]}>Smart mirors</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/" scroll={false}>
                  <a className={styles["menu-link"]}>Oridinary mirors</a>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={styles["col-3"]}
            style={{ borderBottom: `1px solid ${borderColor}` }}
          >
            <h4 className={styles["footer-info-title"]}>Socials</h4>
            <ul className={styles["footer-info-menu"]}>
              <li className={styles["menu-item"]}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles["menu-link"]} ${styles["instagram"]}`}
                >
                  <span className={styles["instagram-icon"]}>
                    <img
                      src="/images/social-icons/instagram.svg"
                      alt="instagram"
                      title="instagram"
                      width="100%"
                      height="100%"
                    />
                  </span>
                  <span className={styles["instagram-text"]}>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`row wrap ${styles["footer-copyright"]}`}>
          <nav className={styles["footer-copyright-navbar"]}>
            <ul className={`${styles["footer-copyright-menu"]} wrap`}>
              <li className={styles["menu-item"]}>
                <Link href="/" scroll={false}>
                  <a className={styles["menu-link"]}>Home</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/about" scroll={false}>
                  <a className={styles["menu-link"]}>About</a>
                </Link>
              </li>
              <li className={styles["menu-item"]}>
                <Link href="/contact" scroll={false}>
                  <a className={styles["menu-link"]}>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`${styles["copyright-link-container"]} row flex-column`}
          >
            <Link href="/" scroll={false}>
              <a className={styles["copyright-link"]}>
                2021 ?? All right reserved to IGT Co
              </a>
            </Link>

            <a
              href="https://wearecolorz.com"
              target="_blank"
              rel="noreferrer"
              className={styles["copyright-link"]}
            >
              Design & development by Colorz.
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
