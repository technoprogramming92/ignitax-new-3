import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-two-area bg_dp_black ">
      <div className="container container-semi-large">
        <div className="row gy-5 justify-content-between section-padding-top section-padding-bottom overflow-hidden">
          <div className="col-lg-4">
            <div className="footer-widgets-two">
              <div className="footer-two-company-info text-center text-lg-start">
                <h2 className="text_light_white bounce-text">IGNITAX</h2>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.1727410582016!2d72.5403329!3d22.997035399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85480247891b%3A0x7b58ed03d93c3e66!2sIgnitax!5e1!3m2!1sen!2sin!4v1740475657581!5m2!1sen!2sin"
                  width="450"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widgets-two">
              <ul className="custom-ul footer-two-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="career.html">Careers</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widgets-two">
              <div className="footer-two-address-wrap d-flex flex-column">
                <div className="address-info-box text-center text-lg-start">
                  <h2 className="text_light_white footer-address-title">
                    Location
                  </h2>
                  <p className="text_light_white">
                    A-427, Siddhivinayak Arcade, Beside Cancer society, Gupta
                    Nagar, Vasna, Ahmedabad, Gujarat 380051
                  </p>
                </div>
                <div className="address-info-box text-center text-lg-start">
                  <h2 className="text_light_white footer-address-title">
                    Follow Us
                  </h2>
                  <ul className="custom-ul address-info-social d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
                    <li>
                      <a href="#">
                        <FaFacebook className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram className="text-xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pe-0 ps-0">
        <div className="col-lg-12">
          <div className="swiper footer-two-touch">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h2 className="text_light_white footer-two-touch-text d-flex align-items-center">
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4393 61.0897L10.018 51.6685L45.6523 16.034L46.6766 15.0097L45.228 15.0097L1.54986 15.0097L17.377 0.600005L54.3101 0.600011L69.3199 0.600014L69.3199 15.6097L69.3199 52.6211L54.9101 68.4496L54.9101 27.0687L54.9101 25.6202L53.8858 26.6444L19.4393 61.0897Z"
                      stroke="#FFFCF4"
                      strokeWidth="1.2"
                    />
                  </svg>
                  GET IN TOUCH
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-semi-large">
        <div className="row">
          <div className="col-lg-12">
            <div className=" pt-3 pb-3 d-flex flex-wrap justify-content-center">
              <p className="text_light_white">
                © 2025 All Rights Reserved By IGNITAX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
