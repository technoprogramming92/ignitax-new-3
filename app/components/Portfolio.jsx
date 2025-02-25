import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio-area bg_color_gray section-padding-top section-padding-bottom">
      <div className="container container-semi-large">
        <div className="row align-items-end  section-border-black pb-4 pb-lg-5 gy-4">
          <div className="col-lg-8">
            <div className="section-title-two">
              <span className="d-inline-block position-relative">
                PORTFOLIO
              </span>
              <h2 className="h2 char-animation">Our Portfolio Showcases</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="common-design-btn only-border btn-trigger btn-bounce"
              href="service.html"
            >
              <span className="btn-flip">
                <span data-text="See All Works">See All Works</span>
              </span>
            </a>
          </div>
        </div>
        <div className="portfolio-box-wrapper row-top-padding">
          <div className="row portfolio-box">
            <div className="col-lg-3">
              <ul className="portfolio-subject">
                <li className="text_black fnt-weight-500">PRODUCT DESIGN</li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row align-items-end gy-3">
                <div className="col-lg-7 col-xxl-8">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <p className="fnt-weight-500 text_black">Grameen Life</p>
                      <h3 className="h3 mt-2">Brand: Green Earth Solutions</h3>
                    </div>
                    <div className="overflow-hidden">
                      <div className="portfolio-img-box img-box-reveal overflow-hidden">
                        <div
                          className="portfolio-img img portfolio-img-1"
                          style={{
                            backgroundImage: "url(/images/portfolio/pf-1.png)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-4">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <div className="portfolio-info-meta d-flex align-items-end justify-content-between">
                        <span className="fnt-weight-500 text_black">2024</span>
                        <a
                          className="fnt-weight-500 text_black"
                          href="product-single.html"
                        >
                          View Full Project
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="d-none d-lg-block">
                        <div className="portfolio-img-box img-box-reveal">
                          <div
                            className="portfolio-img img portfolio-img-2"
                            style={{
                              backgroundImage:
                                "url(/images/portfolio/pf-2.png)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-box">
            <div className="col-lg-3">
              <ul className="portfolio-subject">
                <li className="text_black fnt-weight-500">APP DEVELOPMENT</li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row align-items-end gy-3">
                <div className="col-lg-7 col-xxl-8">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <p className="fnt-weight-500 text_black">The Slack</p>
                      <h3 className="h3 mt-2">App Innovation: FitLife</h3>
                    </div>
                    <div className="overflow-hidden">
                      <div className="portfolio-img-box img-box-reveal overflow-hidden">
                        <video
                          className="w-100 portfolio-img img portfolio-video ft_object"
                          id="player-hero"
                          playsInline="playsinline"
                          autoPlay="autoplay"
                          muted={true}
                          loop="loop"
                        >
                          <source src="/images/video/1.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-4">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <div className="portfolio-info-meta d-flex align-items-end justify-content-between">
                        <span className="fnt-weight-500 text_black">2024</span>
                        <a
                          className="fnt-weight-500 text_black"
                          href="product-single.html"
                        >
                          View Full Project
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="d-none d-lg-block">
                        <div className="portfolio-img-box img-box-reveal">
                          <div
                            className="portfolio-img img portfolio-img-2"
                            style={{
                              backgroundImage:
                                "url(/images/portfolio/pf-4.png)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-box">
            <div className="col-lg-3">
              <ul className="portfolio-subject">
                <li className="text_black fnt-weight-500">UI/UX DESIGN</li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row align-items-end gy-3">
                <div className="col-lg-7 col-xxl-8">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <p className="fnt-weight-500 text_black">Royal Hotel</p>
                      <h3 className="h3 mt-2">
                        Website Redesign: Luxury Living
                      </h3>
                    </div>
                    <div className="overflow-hidden">
                      <div className="portfolio-img-box img-box-reveal overflow-hidden">
                        <div
                          className="portfolio-img img portfolio-img-1"
                          style={{
                            backgroundImage: "url(/images/portfolio/pf-5.png)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-4">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <div className="portfolio-info-meta d-flex align-items-end justify-content-between">
                        <span className="fnt-weight-500 text_black">2024</span>
                        <a
                          className="fnt-weight-500 text_black"
                          href="product-single.html"
                        >
                          View Full Project
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="d-none d-lg-block">
                        <div className="portfolio-img-box img-box-reveal">
                          <div
                            className="portfolio-img img portfolio-img-2"
                            style={{
                              backgroundImage:
                                "url(/images/portfolio/pf-6.png)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-box">
            <div className="col-lg-3">
              <ul className="portfolio-subject">
                <li className="text_black fnt-weight-500">WEB DEVELOPMENT</li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row align-items-end gy-3">
                <div className="col-lg-7 col-xxl-8">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <p className="fnt-weight-500 text_black">Amazon Fly</p>
                      <h3 className="h3 mt-2">
                        Digital Transformation: Tech Innovators
                      </h3>
                    </div>
                    <div className="overflow-hidden">
                      <div className="portfolio-img-box img-box-reveal overflow-hidden">
                        <div
                          className="portfolio-img img portfolio-img-1"
                          style={{
                            backgroundImage: "url(/images/portfolio/pf-7.png)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-4">
                  <div className="portfolio-info-wrap">
                    <div className="portfolio-info">
                      <div className="portfolio-info-meta d-flex align-items-end justify-content-between">
                        <span className="fnt-weight-500 text_black">2024</span>
                        <a
                          className="fnt-weight-500 text_black"
                          href="product-single.html"
                        >
                          View Full Project
                        </a>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="d-none d-lg-block">
                        <div className="portfolio-img-box img-box-reveal">
                          <div
                            className="portfolio-img img portfolio-img-2"
                            style={{
                              backgroundImage:
                                "url(/images/portfolio/pf-8.png)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
