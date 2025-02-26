"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import Preloader from "./Preloader";

export default function ClientWrapper({ children }) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // 🔄 Function to reinitialize scripts after preloader
  const reinitializeScripts = () => {
    console.log("🔄 Reinitializing scripts after preloader...");
    setScriptsLoaded(true);
  };

  useEffect(() => {
    if (scriptsLoaded) {
      console.log("✅ External Scripts Reloaded Successfully!");

      // ✅ Reinitialize Sticky Navbar
      const handleScroll = () => {
        const scroll = window.scrollY;
        const menu = document.querySelector(".menu-area");
        if (menu) {
          if (scroll >= 20) {
            menu.classList.add("sticky");
          } else {
            menu.classList.remove("sticky");
          }
        }
      };
      window.addEventListener("scroll", handleScroll);

      // ✅ Reinitialize Odometer
      document.querySelectorAll(".odometer").forEach((el) => {
        el.innerHTML = el.getAttribute("data-odometer-final");
      });

      // ✅ Reinitialize GSAP Animations
      if (window.gsap) {
        document.querySelectorAll(".reveal_anim-2").forEach((el) => {
          const split = new SplitType(el, { type: "lines,words,chars" });
          gsap.from(split.chars, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            duration: 2,
            delay: 0.1,
            ease: "circ.out",
            y: 200,
            stagger: 0.05,
            opacity: 0,
          });
        });
      }
    }
  }, [scriptsLoaded]);

  return (
    <>
      <Preloader onComplete={reinitializeScripts} />

      {/* ✅ jQuery */}
      <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

      {/* ✅ Bootstrap */}
      <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />

      {/* ✅ GSAP Animation */}
      <Script src="/js/gsap.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-trigger.js" strategy="lazyOnload" />
      <Script src="/js/gsap-split-text.js" strategy="lazyOnload" />

      {/* ✅ Swiper for Sliders */}
      <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />

      {/* ✅ Magnific Popup */}
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />

      {/* ✅ MeanMenu */}
      <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />

      {/* ✅ MixItUp */}
      <Script src="/js/jquery.mixitup.min.js" strategy="lazyOnload" />

      {/* ✅ Odometer */}
      <Script src="/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/js/viewport.jquery.js" strategy="lazyOnload" />

      {/* ✅ Chroma */}
      <Script src="/js/chroma.min.js" strategy="lazyOnload" />

      {/* ✅ SplitType */}
      <Script src="/js/split-type.js" strategy="lazyOnload" />

      {/* ✅ Main.js (Handles interactions) */}
      <Script src="/js/main.js" strategy="lazyOnload" />

      {/* Render children */}
      {children}
    </>
  );
}
