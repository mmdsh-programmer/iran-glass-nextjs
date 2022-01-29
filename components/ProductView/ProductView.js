import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./ProductView.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function ProductView() {
  const handleNext = () => {
    const nextButton = document.querySelector(
      ".product-view-slider .swiper-button-next"
    );
    nextButton.click();
  };

  const handlePrev = () => {
    const prevButton = document.querySelector(
      ".product-view-slider .swiper-button-prev"
    );
    prevButton.click();
  };

  return (
    <section className={styles["product-view"]}>
      <div className={`container row flex-column`}>
        <div className={styles["container"]}>
          <div className="row align-center justify-space-between">
            <header className={styles["product-view-title"]}>
              <h2 className={styles["product-title"]}>Classic Mirror</h2>
            </header>
            <a href="#" className={styles["close-button"]}>
              <Image
                src="/images/product-view/close-button.svg"
                alt="close button"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>

        <div className={`${styles["container"]} ${styles["order-md-2"]}`}>
          <div className="row wrap">
            <div className={styles["product-sort"]}>
              <ul className={`row wrap ${styles["sort-list"]}`}>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>Model</h5>
                  <span className={styles["item-description"]}>
                    Classic Part 01
                  </span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>material</h5>
                  <span className={styles["item-description"]}>Wood</span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>miror color</h5>
                  <span className={styles["item-description"]}>Silver</span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>Wood color</h5>
                  <span className={styles["item-description"]}>Gold</span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>Length</h5>
                  <span className={styles["item-description"]}>90 CM</span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>Width</h5>
                  <span className={styles["item-description"]}>70 CM</span>
                </li>
                <li className={styles["list-item"]}>
                  <h5 className={styles["item-title"]}>Weight</h5>
                  <span className={styles["item-description"]}>6 KG</span>
                </li>
              </ul>
            </div>

            <div className={`row ${styles["product-navigations"]}`}>
              <button className={styles["navigator"]} onClick={handlePrev}>
                <span
                  className={`${styles["left"]} ${styles["navigator-icon"]}`}
                >
                  <Image
                    src="/images/product-view/left-arrow.svg"
                    alt="prev"
                    width="100%"
                    height="100%"
                  />
                </span>
                <span className={styles["navigator-text"]}>PREV PRODUCT</span>
              </button>
              <button className={styles["navigator"]} onClick={handleNext}>
                <span className={styles["navigator-text"]}>NEXT PRODUCT</span>
                <span
                  className={`${styles["right"]} ${styles["navigator-icon"]}`}
                >
                  <Image
                    src="/images/product-view/right-arrow.svg"
                    alt="next"
                    width="100%"
                    height="100%"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={`row ${styles["product-images"]}`}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="product-view-slider"
          >
            <SwiperSlide>
              <img
                src="/images/product-view/product-image.avif"
                alt="product 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/product-view/product-image-2.avif"
                alt="product 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/product-view/product-image.avif"
                alt="product 1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
