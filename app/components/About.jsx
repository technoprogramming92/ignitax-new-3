"use client";
import React, { useEffect } from "react";
import OdometerCounter from "./OdometerCounter";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        gsap.from(".char-animation", {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.1,
          delay: 0.5,
        });

        gsap.from(".fade_bottom", {
          opacity: 0,
          y: 50,
          duration: 1.5,
          stagger: 0.2,
          delay: 1,
        });

        gsap.from(".btn-bounce", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          delay: 1.5,
          ease: "bounce.out",
        });
      });
    }
  }, []);

  return (
    <>
      <OdometerCounter />
      <section className="about-area-two bg_color_gray border-about-two overflow-hidden">
        <div className="container container-semi-large">
          <div className="row justify-content-between section-padding-top section-padding-bottom gy-5 align-items-center">
            <div className="col-lg-8 order-1 order-lg-0">
              <div className="about-two-info-wrap">
                <div className="section-title-two">
                  <span className="d-inline-block position-relative">
                    ABOUT US
                  </span>
                </div>
                <div className="about-two-fun-fact-wrap d-flex flex-xl-wrap flex-wrap mt-5">
                  <div className="about-two-fun-fact d-flex flex-column align-items-center text-center fade_bottom">
                    <h2 className="counter-item">
                      <span
                        className="odometer d-inline-block"
                        data-odometer-final="320"
                      >
                        .
                      </span>
                    </h2>
                    <p className="text_black mt-0 mt-lg-3">
                      Successfully Completed Projects
                    </p>
                  </div>
                  <div className="about-two-fun-fact d-flex flex-column align-items-center text-center fade_bottom">
                    <h2 className="counter-item">
                      <span
                        className="odometer d-inline-block"
                        data-odometer-final="15"
                      >
                        .
                      </span>
                    </h2>
                    <p className="text_black mt-0 mt-lg-3">
                      Years of Experience
                    </p>
                  </div>
                  <div className="about-two-fun-fact d-flex flex-column align-items-center text-center fade_bottom">
                    <h2 className="counter-item">
                      <span
                        className="odometer d-inline-block"
                        data-odometer-final="2"
                      >
                        .
                      </span>
                      <em>K</em>
                    </h2>
                    <p className="text_black mt-0 mt-lg-3">Happy Clients</p>
                  </div>
                </div>
                <a
                  className="common-design-btn only-border mt-5"
                  href="about.html"
                >
                  <span className="btn-flip">
                    <span data-text="Learn More">Learn More</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="about-two-cta-wrap h-100 position-relative d-flex justify-content-xxl-center justify-content-lg-end justify-content-center btn-trigger"
                data-lag="0.2"
                data-stagger="0.08"
              >
                <div className="about-two-cta-box btn-bounce position-relative overflow-hidden">
                  <img className="img-1" src="/images/cta-1.svg" alt="" />
                  <a href="about.html">
                    <svg
                      className="img-2"
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5" clipPath="url(#clip0_3364_2431)">
                        <path
                          d="M36.0869 6.60696L42.5739 13.094L17.2421 38.4259L16.2178 39.4502L17.6664 39.4502L48.4221 39.4502L37.4936 49.4L11.1792 49.4L0.629288 49.4L0.62929 38.8502L0.629295 12.4798L10.5792 1.55035L10.5792 30.6652L10.5792 32.1137L11.6034 31.0895L36.0869 6.60696Z"
                          stroke="#1A1A1A"
                          strokeWidth="1.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3364_2431">
                          <rect width={50} height={50} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
