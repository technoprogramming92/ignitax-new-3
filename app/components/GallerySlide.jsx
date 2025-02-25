import React from "react";

export default function GallerySlide() {
  return (
    <section className="gallery-slide-area bg_color_gray section-padding-bottom section-padding-top">
      <div className="swiper gallery-slide">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="gallery-slide-box overflow-hidden">
              <img
                className="w-100"
                src="/images/gallery/slide-g-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-slide-box overflow-hidden">
              <img
                className="w-100"
                src="/images/gallery/slide-g-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-slide-box overflow-hidden">
              <img
                className="w-100"
                src="/images/gallery/slide-g-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
