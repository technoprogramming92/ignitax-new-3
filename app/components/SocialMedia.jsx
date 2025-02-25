import React from "react";

export default function SocialMedia() {
  return (
    <div className="hero-two-area hero-area-three">
      <div className="container custom-container custom-container-semi-large">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="swiper hero-info-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="hero-two-info">
                    <span className="text_black fnt-weight-500 hero-three-sub d-inline-block mb-1">
                      Axole Design
                    </span>
                    <h1>CREATIVE IDEAS!</h1>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-two-info">
                    <span className="text_black fnt-weight-500 hero-three-sub d-inline-block mb-1">
                      Axole Design
                    </span>
                    <h1>GENIUS SPARKS</h1>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-two-info">
                    <span className="text_black fnt-weight-500 hero-three-sub d-inline-block mb-1">
                      Axole Design
                    </span>
                    <h1>CREATIVE MINDS</h1>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-two-info">
                    <span className="text_black fnt-weight-500 hero-three-sub d-inline-block mb-1">
                      Axole Design
                    </span>
                    <h1>INVENTIVE IDEAS</h1>
                  </div>
                </div>
              </div>
              <div className="hero-slide-control w-100 d-flex flex-column mt-lg-5 mt-3">
                <div className="hero-number-pagination d-flex align-items-center justify-content-between pe-lg-2">
                  <p className="text_black">Selected Projects</p>
                  <div className="hero-img-fraction-pagination text_black fnt-weight-500" />
                </div>
                <div className="hero-img-pagination d-flex justify-content-md-end mt-3 flex-wrap gap-2">
                  <div className="hero-images d-none">
                    <span data-image-url="/images/hero/hero-slide-dot-1.png" />
                    <span data-image-url="/images/hero/hero-slide-dot-2.png" />
                    <span data-image-url="/images/hero/hero-slide-dot-3.png" />
                    <span data-image-url="/images/hero/hero-slide-dot-4.png" />
                  </div>
                </div>
              </div>
              <div className="hero-three-btn-wrap mt-4 mt-lg-5">
                <a
                  className="common-design-btn only-border"
                  href="service.html"
                >
                  <span className="btn-flip">
                    <span data-text="Explore Works">Explore Works</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pe-lg-0">
            <div className="swiper hero-img-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="w-100 hero-three-img"
                    src="/images/hero/hero-slide-1.png"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="w-100 hero-three-img"
                    src="/images/hero/hero-slide-2.png"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="w-100 hero-three-img"
                    src="/images/hero/hero-slide-3.png"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="w-100 hero-three-img"
                    src="/images/hero/hero-slide-4.png"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="w-100 hero-three-img"
                    src="/images/hero/hero-slide-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
