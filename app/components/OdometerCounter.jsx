"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function OdometerCounter() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const odometerElements = document.querySelectorAll(".odometer");

      if (odometerElements.length > 0) {
        odometerElements.forEach((el) => {
          el.innerHTML = "0"; // Ensure the initial state is 0
        });

        setTimeout(() => {
          odometerElements.forEach((el) => {
            const finalValue = el.getAttribute("data-odometer-final");
            el.innerHTML = finalValue; // Trigger the animation
          });
        }, 500); // Small delay to ensure smooth animation
      }
    }
  }, []);

  return (
    <>
      {/* ✅ Odometer Script (Ensuring it loads before use) */}
      <Script src="/js/odometer.min.js" strategy="lazyOnload" />
      <Script
        id="odometer-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function () {
              setTimeout(() => {
                document.querySelectorAll(".odometer").forEach((el) => {
                  el.innerHTML = el.getAttribute("data-odometer-final");
                });
              }, 1000);
            });
          `,
        }}
      />
    </>
  );
}
