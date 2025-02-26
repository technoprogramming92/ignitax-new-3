"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsSticky(window.scrollY >= 20);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null); // Close dropdowns when closing menu
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header>
      <div className={`menu-area menu-area-two ${isSticky ? "sticky" : ""}`}>
        <div className="container container-semi-large">
          <div className="row align-items-center position-relative">
            {/* ✅ Logo Section */}
            <div className="col-lg-3 col-6">
              <div className="menu-logo-wrap">
                <Link href="/" passHref>
                  <Image
                    src="/images/logo.svg"
                    alt="Company Logo"
                    width={150}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* ✅ Mobile Menu Toggle Button */}
            <div className="col-6 d-lg-none text-end">
              <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
              >
                ☰
              </button>
            </div>

            {/* ✅ Mobile Menu */}
            <div
              className={`mobile-menu-wrapper ${
                isMobileMenuOpen ? "show-mobile-menu" : ""
              }`}
            >
              <button className="close-menu" onClick={closeMobileMenu}>
                ✖
              </button>
              <nav className="mobile-menu">
                <ul>
                  <li>
                    <Link href="/" onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>

                  {/* ✅ Blog Dropdown */}
                  <li className="has-child-menu">
                    <button
                      className="menu-toggle-btn"
                      onClick={() => toggleDropdown("blog")}
                    >
                      Blog ▼
                    </button>
                    <ul
                      className={`dropdown ${
                        openDropdown === "blog" ? "open" : ""
                      }`}
                    >
                      <li>
                        <Link href="/blog-classic" onClick={closeMobileMenu}>
                          Blog Classic
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-single" onClick={closeMobileMenu}>
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* ✅ Pages Dropdown */}
                  <li className="has-child-menu">
                    <button
                      className="menu-toggle-btn"
                      onClick={() => toggleDropdown("pages")}
                    >
                      Pages ▼
                    </button>
                    <ul
                      className={`dropdown ${
                        openDropdown === "pages" ? "open" : ""
                      }`}
                    >
                      <li>
                        <Link href="/service" onClick={closeMobileMenu}>
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio-grid" onClick={closeMobileMenu}>
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/team" onClick={closeMobileMenu}>
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" onClick={closeMobileMenu}>
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/contact" onClick={closeMobileMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* ✅ Desktop Menu */}
            <div className="col-lg-9 d-none d-lg-block">
              <div className="nav-wrap d-flex justify-content-between align-items-center">
                <nav className="mainmenu">
                  <ul className="home-menu">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Blog</a>
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
                      <a href="#">Pages</a>
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
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
