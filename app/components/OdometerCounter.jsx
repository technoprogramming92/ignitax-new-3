"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function OdometerCounter() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Odometer) {
      document.querySelectorAll(".odometer").forEach((el) => {
        el.innerHTML = el.getAttribute("data-odometer-final");
      });
    }
  }, []);

  return (
    <>
      {/* Ensure Odometer loads before use */}
      <Script src="/js/odometer.min.js" strategy="lazyOnload" />
    </>
  );
}
