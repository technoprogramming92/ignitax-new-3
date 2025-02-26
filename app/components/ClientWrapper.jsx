"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ClientWrapper({ children }) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    console.log("✅ External Scripts Loaded Successfully!");
    setScriptsLoaded(true);
  }, []);

  return (
    <>
      {/* ✅ jQuery (Required for other scripts) */}
      <Script
        src="/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("✅ jQuery Loaded")}
      />

      {/* ✅ Bootstrap */}
      <Script
        src="/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log("✅ Bootstrap Loaded")}
      />

      {/* ✅ GSAP Animation Files */}
      <Script src="/js/gsap.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
      <Script src="/js/gsap-scroll-trigger.js" strategy="lazyOnload" />
      <Script src="/js/gsap-split-text.js" strategy="lazyOnload" />

      {/* ✅ Swiper for Sliders */}
      <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />

      {/* ✅ Magnific Popup */}
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />

      {/* ✅ MeanMenu for Responsive Navigation */}
      <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />

      {/* ✅ MixItUp for Filtering */}
      <Script src="/js/jquery.mixitup.min.js" strategy="lazyOnload" />

      {/* ✅ Odometer for Counters */}
      <Script src="/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/js/viewport.jquery.js" strategy="lazyOnload" />

      {/* ✅ Chroma for Color Manipulation */}
      <Script src="/js/chroma.min.js" strategy="lazyOnload" />

      {/* ✅ SplitType for Animations */}
      <Script src="/js/split-type.js" strategy="lazyOnload" />

      {/* ✅ Main.js (Handles most interactions) */}
      <Script src="/js/main.js" strategy="lazyOnload" />

      {/* ✅ Render children (your app content) */}
      {children}

      {/* ✅ Re-run animations after scripts load */}
      {scriptsLoaded && (
        <Script id="reinit-animations" strategy="lazyOnload">
          {`
            console.log("✅ Re-running animations after scripts load");
            if (typeof window !== "undefined" && window.gsap) {
              gsap.from(".hero-two-box p", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
              });
            }
          `}
        </Script>
      )}
    </>
  );
}
