"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type"; // Ensure SplitType is properly imported

export default function Preloader({ onComplete }) {
  useEffect(() => {
    document.querySelector("html").classList.add("scroll-hide");

    // ✅ Animate Progress Bar Using GSAP
    gsap.to("#progress-bar", {
      width: "100%",
      duration: 2.5,
      ease: "power3.inOut",
      onComplete: () => {
        setTimeout(() => {
          // ✅ Split Text into Characters for Animation
          const loaderText = document.querySelector(".loader-text h3");
          if (loaderText) {
            const splitText = new SplitType(loaderText, { types: "chars" });

            // ✅ Animate Text Letters Using GSAP
            gsap.from(splitText.chars, {
              opacity: 0,
              x: 50,
              duration: 0.5,
              stagger: 0.1,
              delay: 0.3,
              ease: "power3.out",
            });
          }

          // ✅ Animate Preloader Exit
          gsap.to(".progress-wrapper", {
            scale: 1.5,
            opacity: 0,
            display: "none",
            ease: "power3.inOut",
            delay: 0.2,
          });

          gsap.to(".revealer", {
            top: "0%",
            ease: "power3.inOut",
            delay: 1,
          });

          gsap.to(".loader", {
            yPercent: -100,
            ease: "power3.inOut",
            delay: 1.9,
            onComplete: () => {
              document.querySelector("html").classList.remove("scroll-hide");

              // ✅ Call the callback function to reinitialize scripts
              if (onComplete) onComplete();
            },
          });
        }, 500);
      },
    });
  }, []);

  return (
    <div className="loader overflow-hidden">
      <div className="revealer"></div>
      <div className="loader-text-wrapper">
        <div className="loader-text">
          <h3>IGNITAX</h3>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-line-wrapper">
          <span className="progress-line" id="progress-bar"></span>
        </div>
      </div>
    </div>
  );
}
