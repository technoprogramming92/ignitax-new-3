import React from "react";

export default function Hero() {
  return (
    <section className="hero-two-area bg_color_white overflow-hidden">
      <div className="container container-semi-large">
        <div className="row gy-5">
          <div className="col-lg-12">
            <div className="hero-two-info">
              <h1 className="reveal_anim_after_loader">Creating Digital</h1>
            </div>
          </div>
          <div className="col-lg-12 hero-two-bottom-info hero-two-border position-relative">
            <div className="row">
              <div className="col-lg-6 overflow-hidden order-1 order-lg-0">
                <div className="hero-two-box h-100 d-flex align-items-center justify-content-center position-relative">
                  <p className="h-box box-1">MARKETER</p>
                  <p className="h-box box-2">CODERS</p>
                  <p className="h-box box-3">DESIGNERS</p>
                </div>
              </div>
              <div className="col-lg-6 h-100 overflow-hidden about-two-cta-wrap position-relative">
                <div className="hero-two-info hero-two-info-second text-lg-end">
                  <h1 className="reveal_anim_after_loader">Solutions</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
