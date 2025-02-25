"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    document.querySelectorAll(".reveal_anim-2").forEach((el) => {
      const split = new SplitType(el, {
        types: "lines, words, chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        duration: 2,
        delay: 0.1,
        ease: "circ.out",
        y: 200,
        stagger: 0.05,
        opacity: 0,
      });
    });
  }, []);

  return (
    <section className="service-area-two section-padding-top bg_color_gray">
      <div className="container container-semi-large">
        <div className="row align-items-end gy-4">
          <div className="col-lg-8">
            <div className="section-title-two">
              <span className="d-inline-block position-relative">
                OUR SERVICES
              </span>
              <h2 className="h2 char-animation">Our unique services</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="common-design-btn only-border btn-trigger btn-bounce"
              href="service.html"
            >
              <span className="btn-flip">
                <span data-text="See All Services">See All Services</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="work-process-count service-two-wrapper row-top-margin">
        <div
          className="service-two-box-wrap"
          style={{ borderTop: "1px solid #ddd" }}
        >
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        href="service.html"
                        className="text-[#1A1A1A] hover:text-black"
                      >
                        Design
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>UI/UX DESIGN</li>
                    <li>PRODUCT DESIGN</li>
                    <li>BRAND IDENTITY DESIGN</li>
                    <li>GRAPHICS / 3D DESIGN</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="service-two-box-wrap"
          style={{ backgroundColor: "#65DA7C" }}
        >
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        href="service.html"
                        className="text-[#1A1A1A] hover:text-black"
                      >
                        Coding
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Backend Development</li>
                    <li>Frontend Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="service-two-box-wrap"
          style={{ backgroundColor: "#E6EBD4" }}
        >
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        href="service.html"
                        className="text-[#1A1A1A] hover:text-black"
                      >
                        Marketing
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>SEO EXPERT</li>
                    <li>SOCIAL MEDIA MARKETING</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
