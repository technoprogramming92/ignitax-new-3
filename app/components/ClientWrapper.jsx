"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ClientWrapper({ children }) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    if (scriptsLoaded) {
      console.log("✅ All External Scripts Loaded Successfully!");

      // ✅ Reinitialize scripts after preloader finishes
      setTimeout(() => {
        if (typeof window.gsap !== "undefined") {
          console.log("✅ GSAP Initialized");
        }
        if (typeof window.jQuery !== "undefined") {
          console.log("✅ jQuery Initialized");
        }
        if (typeof window.odometer !== "undefined") {
          console.log("✅ Odometer Initialized");
        }
      }, 500);
    }
  }, [scriptsLoaded]);

  return (
    <>
      {/* ✅ Load jQuery First */}
      <Script
        src="/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("✅ jQuery Loaded")}
      />

      {/* ✅ Load Bootstrap Next */}
      <Script
        src="/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log("✅ Bootstrap Loaded")}
      />

      {/* ✅ Load GSAP Animations in Proper Order */}
      <Script src="/js/gsap.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-trigger.js" strategy="lazyOnload" />
      <Script src="/js/gsap-split-text.js" strategy="lazyOnload" />

      {/* ✅ Load Swiper After Animations */}
      <Script
        src="/js/swiper-bundle.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log("✅ Swiper Loaded")}
      />

      {/* ✅ Load jQuery Plugins After jQuery */}
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.mixitup.min.js" strategy="lazyOnload" />

      {/* ✅ Load Odometer & Other Counter Dependencies */}
      <Script src="/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/js/viewport.jquery.js" strategy="lazyOnload" />

      {/* ✅ Load Chroma for Color Manipulation */}
      <Script src="/js/chroma.min.js" strategy="lazyOnload" />

      {/* ✅ Load SplitType for Animations */}
      <Script src="/js/split-type.js" strategy="lazyOnload" />

      {/* ✅ Load Main.js LAST (Ensures All Other Scripts Are Loaded) */}
      <Script
        src="/js/main.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("✅ Main.js Loaded");
          setScriptsLoaded(true); // Mark scripts as loaded
        }}
      />

      {/* ✅ Render children (your app content) */}
      {children}
    </>
  );
}
