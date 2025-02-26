"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // ✅ Next.js optimized routing

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsSticky(window.scrollY >= 20);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className={`menu-area menu-area-two ${isSticky ? "sticky" : ""}`}>
        <div className="container container-semi-large">
          <div className="row align-items-center position-relative">
            {/* ✅ Logo Section */}
            <div className="col-lg-3 hamburger-menu position-relative">
              <div className="menu-logo-wrap">
                <Link href="/">
                  <img src="/images/logo.svg" alt="Company Logo" />
                </Link>
              </div>
            </div>

            {/* ✅ Main Navigation */}
            <div className="col-lg-9 d-none d-lg-block">
              <div className="nav-wrap d-flex justify-content-between align-items-center">
                <nav className="mainmenu text-right">
                  <ul className="home-menu">
                    <li>
                      <Link href="/" className="no-underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="no-underline">
                        About
                      </Link>
                    </li>
                    <li className="has-child-menu">
                      <a href="#" className="no-underline">
                        Blog
                      </a>
                      <ul>
                        <li>
                          <Link href="/blog-classic">Blog Classic</Link>
                        </li>
                        <li>
                          <Link href="/blog-single">Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#" className="no-underline">
                        Pages
                      </a>
                      <ul>
                        <li>
                          <Link href="/service">Service</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-grid">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact" className="no-underline">
                        Contact
                      </Link>
                    </li>
                  </ul>

                  {/* ✅ Mobile Menu Button */}
                  <div className="menu-btn-wrap flex-shrink-0 d-lg-none pb-5 pt-3 ps-4">
                    <Link
                      className="common-design-btn only-border border-white"
                      href="/contact"
                    >
                      <span className="btn-flip">
                        <span data-text="Let's Connect">Let's Connect</span>
                      </span>
                    </Link>
                  </div>
                </nav>

                {/* ✅ Desktop Menu Button */}
                <div className="menu-btn-wrap flex-shrink-0 d-none d-lg-block">
                  <Link
                    className="common-design-btn only-border"
                    href="/contact"
                  >
                    <span className="btn-flip">
                      <span data-text="Let's Connect">Let's Connect</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
