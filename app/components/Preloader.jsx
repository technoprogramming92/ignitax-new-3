"use client";

import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.querySelector("html").classList.add("scroll-hide");

    const updateProgressBar = (progress) => {
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = progress + "%";
      }
    };

    const simulateProgress = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setProgress(progress);
        updateProgressBar(progress);

        if (progress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            const loaderText = document.querySelectorAll(".loader-text h3");
            loaderText.forEach((text) => {
              const loaderSingleText = new SplitType(text, { types: "chars" });

              gsap.from(loaderSingleText.chars, {
                opacity: 0,
                x: 50,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.8,
              });
            });

            gsap.to(".progress-wrapper", {
              scale: 1.5,
              opacity: 0,
              display: "none",
              ease: "power3.inOut",
              duration: 1.2,
              delay: 0.2,
            });

            gsap.to(".revealer", {
              top: "0%",
              ease: "power3.inOut",
              duration: 2.2,
              delay: 1,
            });

            gsap.to(".loader", {
              yPercent: -100,
              ease: "power3.inOut",
              duration: 1,
              delay: 1.9,
            });

            setTimeout(() => {
              document.querySelector("html").classList.remove("scroll-hide");
            }, 2600);
          }, 500);
        }
      }, 10);
    };

    simulateProgress();
  }, []);
  return (
    <div className="loader overflow-hidden">
      <div className="revealer" />
      <div className="loader-text-wrapper">
        <div className="loader-text">
          <h3>IGNITAX</h3>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-line-wrapper">
          <span className="progress-line" id="progress-bar" />
        </div>
      </div>
    </div>
  );
}
