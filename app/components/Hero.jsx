"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Hero() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for Preloader to Finish
    const checkPreloader = () => {
      const preloader = document.querySelector(".loader");
      if (!preloader) {
        setPreloaderComplete(true);
      } else {
        setTimeout(checkPreloader, 100); // Keep checking every 100ms
      }
    };

    checkPreloader();
  }, []);

  useEffect(() => {
    if (!preloaderComplete) return; // Only run GSAP animations after preloader is gone

    // Animate Hero Heading
    gsap.from(".reveal_anim_after_loader", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3,
    });

    // Animate Hero Boxes (MARKETER, CODERS, DESIGNERS)
    gsap.from(".h-box", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-two-box",
        start: "top 90%", // **Increase the trigger start position**
        end: "top 50%",
        scrub: 1, // **Smooth scrolling effect**
        toggleActions: "play none none reverse",
      },
    });

    // Animate the "Solutions" heading
    gsap.from(".hero-two-info-second h1", {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-two-info-second",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [preloaderComplete]); // Run when preloader is finished

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
              <div className="col-lg-6 overflow-hidden order-1 order-lg-0">
                <div className="hero-two-box h-100 d-flex align-items-center justify-content-center position-relative">
                  <p className="h-box box-1">MARKETER</p>
                  <p className="h-box box-2">CODERS</p>
                  <p className="h-box box-3">DESIGNERS</p>
                </div>
              </div>
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
