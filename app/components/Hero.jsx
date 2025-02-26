"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  useEffect(() => {
    // Ensure animations only run after the DOM is loaded
    setTimeout(() => {
      // Animate text split after preloader finishes
      const textElements = document.querySelectorAll(
        ".reveal_anim_after_loader"
      );
      textElements.forEach((el) => {
        const splitText = new SplitType(el, { types: "words, chars" });
        gsap.from(splitText.chars, {
          opacity: 0,
          y: 50,
          stagger: 0.05,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // Animate the "MARKETER", "CODERS", "DESIGNERS" text with GSAP
      gsap.from(".h-box", {
        opacity: 0,
        y: 40,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    }, 2000); // Adjust timing to match preloader duration
  }, []);

  return (
    <section className="hero-two-area bg_color_gray overflow-hidden">
      <div className="container container-semi-large">
        <div className="row gy-5">
          <div className="col-lg-12">
            <div className="hero-two-info">
              <h1 className="reveal_anim_after_loader">Creating Digital</h1>
            </div>
          </div>
          <div className="col-lg-12 hero-two-bottom-info hero-two-border position-relative">
            <div className="row">
              {/* ✅ Animated Box Section */}
              <div className="col-lg-6 overflow-hidden order-1 order-lg-0">
                <div className="hero-two-box h-100 d-flex align-items-center justify-content-center position-relative">
                  <p className="h-box box-1">MARKETER</p>
                  <p className="h-box box-2">CODERS</p>
                  <p className="h-box box-3">DESIGNERS</p>
                </div>
              </div>

              {/* ✅ "Solutions" Text Animation */}
              <div className="col-lg-6 h-100 overflow-hidden about-two-cta-wrap position-relative">
                <div className="hero-two-info hero-two-info-second text-lg-end">
                  <h1 className="reveal_anim_after_loader">Solutions</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
