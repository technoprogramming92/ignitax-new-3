import React from "react";

export default function Testimonial() {
  return (
    <section className="testimonial-area bg_color_white section-padding-top section-padding-bottom">
      <div className="container">
        <div className="row align-items-lg-end gy-4">
          <div className="col-lg-9">
            <div className="section-title text-center text-lg-start">
              <span className="d-inline-block text_black position-relative">
                OUR TESTIMONIALS
              </span>
              <h2 className="h2 mt-2 title-anim">OUR TESTIMONIALS</h2>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="slider-button-wrap-arrow arrow-two color-blue d-flex justify-content-center justify-content-lg-end align-items-center">
              <div className="testimonial-button-prev slide-btn black-button slide-btn-prev">
                <svg
                  width={9}
                  height={16}
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="testimonial-button-next slide-btn black-button slide-btn-next ms-3">
                <svg
                  width={9}
                  height={16}
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999999 1L8 8L1 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-top-padding align-items-center justify-content-between gy-4">
          <div className="col-lg-4">
            <div className="testimonial-img-wrap position-relative">
              <div className="swiper testimonial-img-slide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      className="testimonial-img"
                      src="/images/testimonial/tm-1.png"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      className="testimonial-img"
                      src="/images/testimonial/tm-2.png"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      className="testimonial-img"
                      src="/images/testimonial/tm-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <img
                className="start-0 bottom-0 position-absolute"
                src="/images/testimonial/round-sp.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="swiper testimonial-info-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-info position-relative">
                    <ul className="custom-ul rating-mark d-flex align-items-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p className="text_black testimonial-text mb-4 mt-2">
                      “Axole exceeded our expectations with their innovative
                      solutions and impeccable design. Their team's commitment
                      to excellence transformed our digital presence and
                      significantly enhanced user engagement. Truly a reliable
                      partner in the digital landscape!”
                    </p>
                    <h3 className="h3">Thomas Martin</h3>
                    <span>Designer, International Company</span>
                    <svg
                      className="testimonial-qt position-absolute end-0 bottom-0"
                      width={79}
                      height={62}
                      viewBox="0 0 79 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.51">
                        <path
                          opacity="0.1"
                          d="M70.0846 0.00638884C70.6553 0.00638889 71.2006 0.316127 71.4827 0.849399L78.8123 14.6442C79.0469 15.0849 79.0627 15.6118 78.8535 16.0652C78.6442 16.5187 78.2385 16.8507 77.7566 16.9561C75.7245 17.4096 70.6394 19.0062 67.3582 24.0451C65.7383 26.5358 65.0757 29.0649 64.8379 31.0926L76.2571 31.0926C77.1321 31.0926 77.8422 31.8079 77.8422 32.6892L77.8422 60.4034C77.8422 61.2847 77.1321 62 76.2571 62L45.5851 62C44.7101 62 44 61.2847 44 60.4034L44 36.2337C44 27.2256 47.0878 18.6613 52.6991 12.1152C53.0193 11.7415 53.349 11.3679 53.6819 11.0071C58.0473 6.25237 63.5191 2.48753 69.5045 0.111762C69.6947 0.0351249 69.8913 6.83308e-06 70.0846 6.84999e-06L70.0846 0.00638884ZM75.0873 14.3983L69.3682 3.63391C64.3338 5.84363 59.737 9.12629 56.012 13.1817C55.7045 13.517 55.4001 13.8619 55.1021 14.2067C49.9886 20.1717 47.1734 27.9983 47.1734 36.2369L47.1734 58.8099L74.6751 58.8099L74.6751 34.289L63.1418 34.289C62.717 34.289 62.3081 34.1166 62.0101 33.81C61.7121 33.5035 61.5504 33.0884 61.5567 32.6605C61.6138 30.058 62.2034 26.1463 64.7079 22.2984C67.7894 17.566 72.177 15.3818 75.0841 14.4015L75.0873 14.3983Z"
                          fill="#0C0C25"
                        />
                        <path
                          opacity="0.1"
                          d="M26.0846 0.00319975C26.6553 0.0031998 27.2006 0.312957 27.4827 0.846256L34.8123 14.6418C35.0469 15.0825 35.0627 15.6094 34.8535 16.0628C34.6443 16.5163 34.2385 16.8484 33.7566 16.9538C31.7245 17.4073 26.6394 19.004 23.3582 24.0432C21.7383 26.534 21.0757 29.0632 20.8379 31.091L32.2571 31.091C33.1321 31.091 33.8422 31.8063 33.8422 32.6877L33.8422 60.4033C33.8422 61.2847 33.132 62 32.2571 62L1.58511 62C0.710125 62 -3.75216e-06 61.2847 -3.67511e-06 60.4033L-1.56202e-06 36.2324C-7.74465e-07 27.2238 3.0878 18.6591 8.69911 12.1126C9.0193 11.739 9.35218 11.3653 9.68188 11.0045C14.0473 6.2495 19.5191 2.48448 25.5045 0.111774C25.6947 0.0351325 25.8913 3.01838e-06 26.0846 3.03529e-06L26.0846 0.00319975ZM31.0873 14.3959L25.3682 3.6309C20.3338 5.84074 15.737 9.12037 12.012 13.1792C11.7045 13.5113 11.4001 13.8562 11.1021 14.2043C5.98856 20.1696 3.1734 27.9966 3.1734 36.2388L3.1734 58.813L30.6751 58.813L30.6751 34.2908L19.1418 34.2908C18.717 34.2908 18.3081 34.1184 18.0101 33.8118C17.7121 33.5052 17.5504 33.0901 17.5567 32.6622C17.6106 30.0595 18.2034 26.1476 20.7111 22.2996C23.7926 17.5669 28.1802 15.3826 31.0873 14.4023L31.0873 14.3959Z"
                          fill="#0C0C25"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-info position-relative">
                    <ul className="custom-ul rating-mark d-flex align-items-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p className="text_black testimonial-text mb-4 mt-2">
                      “Axole exceeded our expectations with their innovative
                      solutions and impeccable design. Their team's commitment
                      to excellence transformed our digital presence and
                      significantly enhanced user engagement. Truly a reliable
                      partner in the digital landscape!”
                    </p>
                    <h3 className="h3">Alexander Carter</h3>
                    <span>Designer, International Company</span>
                    <svg
                      className="testimonial-qt position-absolute end-0 bottom-0"
                      width={79}
                      height={62}
                      viewBox="0 0 79 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.51">
                        <path
                          opacity="0.1"
                          d="M70.0846 0.00638884C70.6553 0.00638889 71.2006 0.316127 71.4827 0.849399L78.8123 14.6442C79.0469 15.0849 79.0627 15.6118 78.8535 16.0652C78.6442 16.5187 78.2385 16.8507 77.7566 16.9561C75.7245 17.4096 70.6394 19.0062 67.3582 24.0451C65.7383 26.5358 65.0757 29.0649 64.8379 31.0926L76.2571 31.0926C77.1321 31.0926 77.8422 31.8079 77.8422 32.6892L77.8422 60.4034C77.8422 61.2847 77.1321 62 76.2571 62L45.5851 62C44.7101 62 44 61.2847 44 60.4034L44 36.2337C44 27.2256 47.0878 18.6613 52.6991 12.1152C53.0193 11.7415 53.349 11.3679 53.6819 11.0071C58.0473 6.25237 63.5191 2.48753 69.5045 0.111762C69.6947 0.0351249 69.8913 6.83308e-06 70.0846 6.84999e-06L70.0846 0.00638884ZM75.0873 14.3983L69.3682 3.63391C64.3338 5.84363 59.737 9.12629 56.012 13.1817C55.7045 13.517 55.4001 13.8619 55.1021 14.2067C49.9886 20.1717 47.1734 27.9983 47.1734 36.2369L47.1734 58.8099L74.6751 58.8099L74.6751 34.289L63.1418 34.289C62.717 34.289 62.3081 34.1166 62.0101 33.81C61.7121 33.5035 61.5504 33.0884 61.5567 32.6605C61.6138 30.058 62.2034 26.1463 64.7079 22.2984C67.7894 17.566 72.177 15.3818 75.0841 14.4015L75.0873 14.3983Z"
                          fill="#0C0C25"
                        />
                        <path
                          opacity="0.1"
                          d="M26.0846 0.00319975C26.6553 0.0031998 27.2006 0.312957 27.4827 0.846256L34.8123 14.6418C35.0469 15.0825 35.0627 15.6094 34.8535 16.0628C34.6443 16.5163 34.2385 16.8484 33.7566 16.9538C31.7245 17.4073 26.6394 19.004 23.3582 24.0432C21.7383 26.534 21.0757 29.0632 20.8379 31.091L32.2571 31.091C33.1321 31.091 33.8422 31.8063 33.8422 32.6877L33.8422 60.4033C33.8422 61.2847 33.132 62 32.2571 62L1.58511 62C0.710125 62 -3.75216e-06 61.2847 -3.67511e-06 60.4033L-1.56202e-06 36.2324C-7.74465e-07 27.2238 3.0878 18.6591 8.69911 12.1126C9.0193 11.739 9.35218 11.3653 9.68188 11.0045C14.0473 6.2495 19.5191 2.48448 25.5045 0.111774C25.6947 0.0351325 25.8913 3.01838e-06 26.0846 3.03529e-06L26.0846 0.00319975ZM31.0873 14.3959L25.3682 3.6309C20.3338 5.84074 15.737 9.12037 12.012 13.1792C11.7045 13.5113 11.4001 13.8562 11.1021 14.2043C5.98856 20.1696 3.1734 27.9966 3.1734 36.2388L3.1734 58.813L30.6751 58.813L30.6751 34.2908L19.1418 34.2908C18.717 34.2908 18.3081 34.1184 18.0101 33.8118C17.7121 33.5052 17.5504 33.0901 17.5567 32.6622C17.6106 30.0595 18.2034 26.1476 20.7111 22.2996C23.7926 17.5669 28.1802 15.3826 31.0873 14.4023L31.0873 14.3959Z"
                          fill="#0C0C25"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-info position-relative">
                    <ul className="custom-ul rating-mark d-flex align-items-center">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <p className="text_black testimonial-text mb-4 mt-2">
                      “Axole exceeded our expectations with their innovative
                      solutions and impeccable design. Their team's commitment
                      to excellence transformed our digital presence and
                      significantly enhanced user engagement. Truly a reliable
                      partner in the digital landscape!”
                    </p>
                    <h3 className="h3">Alexander Carter</h3>
                    <span>Designer, International Company</span>
                    <svg
                      className="testimonial-qt position-absolute end-0 bottom-0"
                      width={79}
                      height={62}
                      viewBox="0 0 79 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.51">
                        <path
                          opacity="0.1"
                          d="M70.0846 0.00638884C70.6553 0.00638889 71.2006 0.316127 71.4827 0.849399L78.8123 14.6442C79.0469 15.0849 79.0627 15.6118 78.8535 16.0652C78.6442 16.5187 78.2385 16.8507 77.7566 16.9561C75.7245 17.4096 70.6394 19.0062 67.3582 24.0451C65.7383 26.5358 65.0757 29.0649 64.8379 31.0926L76.2571 31.0926C77.1321 31.0926 77.8422 31.8079 77.8422 32.6892L77.8422 60.4034C77.8422 61.2847 77.1321 62 76.2571 62L45.5851 62C44.7101 62 44 61.2847 44 60.4034L44 36.2337C44 27.2256 47.0878 18.6613 52.6991 12.1152C53.0193 11.7415 53.349 11.3679 53.6819 11.0071C58.0473 6.25237 63.5191 2.48753 69.5045 0.111762C69.6947 0.0351249 69.8913 6.83308e-06 70.0846 6.84999e-06L70.0846 0.00638884ZM75.0873 14.3983L69.3682 3.63391C64.3338 5.84363 59.737 9.12629 56.012 13.1817C55.7045 13.517 55.4001 13.8619 55.1021 14.2067C49.9886 20.1717 47.1734 27.9983 47.1734 36.2369L47.1734 58.8099L74.6751 58.8099L74.6751 34.289L63.1418 34.289C62.717 34.289 62.3081 34.1166 62.0101 33.81C61.7121 33.5035 61.5504 33.0884 61.5567 32.6605C61.6138 30.058 62.2034 26.1463 64.7079 22.2984C67.7894 17.566 72.177 15.3818 75.0841 14.4015L75.0873 14.3983Z"
                          fill="#0C0C25"
                        />
                        <path
                          opacity="0.1"
                          d="M26.0846 0.00319975C26.6553 0.0031998 27.2006 0.312957 27.4827 0.846256L34.8123 14.6418C35.0469 15.0825 35.0627 15.6094 34.8535 16.0628C34.6443 16.5163 34.2385 16.8484 33.7566 16.9538C31.7245 17.4073 26.6394 19.004 23.3582 24.0432C21.7383 26.534 21.0757 29.0632 20.8379 31.091L32.2571 31.091C33.1321 31.091 33.8422 31.8063 33.8422 32.6877L33.8422 60.4033C33.8422 61.2847 33.132 62 32.2571 62L1.58511 62C0.710125 62 -3.75216e-06 61.2847 -3.67511e-06 60.4033L-1.56202e-06 36.2324C-7.74465e-07 27.2238 3.0878 18.6591 8.69911 12.1126C9.0193 11.739 9.35218 11.3653 9.68188 11.0045C14.0473 6.2495 19.5191 2.48448 25.5045 0.111774C25.6947 0.0351325 25.8913 3.01838e-06 26.0846 3.03529e-06L26.0846 0.00319975ZM31.0873 14.3959L25.3682 3.6309C20.3338 5.84074 15.737 9.12037 12.012 13.1792C11.7045 13.5113 11.4001 13.8562 11.1021 14.2043C5.98856 20.1696 3.1734 27.9966 3.1734 36.2388L3.1734 58.813L30.6751 58.813L30.6751 34.2908L19.1418 34.2908C18.717 34.2908 18.3081 34.1184 18.0101 33.8118C17.7121 33.5052 17.5504 33.0901 17.5567 32.6622C17.6106 30.0595 18.2034 26.1476 20.7111 22.2996C23.7926 17.5669 28.1802 15.3826 31.0873 14.4023L31.0873 14.3959Z"
                          fill="#0C0C25"
                        />
                      </g>
                    </svg>
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
