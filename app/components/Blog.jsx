import React from "react";

export default function Blog() {
  return (
    <section className="blog-area section-padding-top section-padding-bottom">
      <div className="container">
        <div className="row align-items-lg-end gy-4">
          <div className="col-lg-9">
            <div className="section-title text-center text-lg-start">
              <span className="d-inline-block text_black position-relative">
                OUR BLOG &amp; NEWS
              </span>
              <h2 className="h2 mt-2 title-anim">Our Latest News</h2>
            </div>
          </div>
          <div className="col-lg-3 text-center text-lg-end">
            <a
              className="common-design-btn only-border btn-trigger btn-bounce"
              href="blog-classic.html"
            >
              <span className="btn-flip">
                <span data-text="See All Blogs">See All Blogs</span>
              </span>
            </a>
          </div>
        </div>
        <div className="row gy-4 row-top-padding">
          <div className="col-xl-4 col-md-6">
            <article className="blog-wrap">
              <div className="blog-box">
                <div className="blog-img position-relative w-100 overflow-hidden">
                  <a href="blog-single.html">
                    <img
                      className="w-100 h-100 ft_object position-absolute start-0 top-0"
                      src="/images/blog/blog-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog-info mt-3">
                  <span className="blog-meta text-uppercase">
                    FEBRUARY 6, 2024
                  </span>
                  <h3 className="h3 mt-3 mb-4">
                    <a href="blog-single.html">
                      The Design Chronicles: Crafting User Experiences
                    </a>
                  </h3>
                  <ul className="custom-ul blog-meta-list d-flex flex-wrap gap-2">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-speed="1.1">
            <article className="blog-wrap">
              <div className="blog-box">
                <div className="blog-img position-relative w-100 overflow-hidden">
                  <a href="blog-single.html">
                    <img
                      className="w-100 h-100 ft_object position-absolute start-0 top-0"
                      src="/images/blog/blog-2.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog-info mt-3">
                  <span className="blog-meta text-uppercase">
                    FEBRUARY 6, 2024
                  </span>
                  <h3 className="h3 mt-3 mb-4">
                    <a href="blog-single.html">
                      Behind the Pixels Stories of Success
                    </a>
                  </h3>
                  <ul className="custom-ul blog-meta-list d-flex flex-wrap gap-2">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-md-6">
            <article className="blog-wrap">
              <div className="blog-box">
                <div className="blog-img position-relative w-100 overflow-hidden">
                  <a href="blog-single.html">
                    <img
                      className="w-100 h-100 ft_object position-absolute start-0 top-0"
                      src="/images/blog/blog-3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog-info mt-3">
                  <span className="blog-meta text-uppercase">
                    FEBRUARY 6, 2024
                  </span>
                  <h3 className="h3 mt-3 mb-4">
                    <a href="blog-single.html">
                      Web Wonders Exploring Digital Frontiers
                    </a>
                  </h3>
                  <ul className="custom-ul blog-meta-list d-flex flex-wrap gap-2">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
