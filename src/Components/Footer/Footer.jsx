import React from "react";
import style from './Footer.module.css'
import EndFooter from "../EndFooter/EndFooter";

const Footer = () => {
  return (
    <footer className=" ">
      <div className="container-fluid p-5 padding-mob border">
        <div className="row">
          <div className="col-md-2 col-6">
            <div className="footer-text d-flex flex-column">
              <span className={`text-muted footer-fs ${style.footerFs}`}>NAVIGATE</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Home</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Our Communities</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Latest Launches</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Latest Updates</span>
            </div>
          </div>
          <div className="col-md-2 col-6 ">
            <div className="footer-text d-flex flex-column ">
              <span className={`text-muted footer-fs ${style.footerFs}`}>ABOUT</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>WHAT WE DO </span>
            </div>
          </div>
          <div className={`col-md-2  ${style.mTop}`}>
            <div className="footer-text d-flex flex-column">
              <span className={`text-muted footer-fs ${style.footerFs}`}>Support</span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Contact US </span>
              <span className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}>Careers </span>
            </div>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="item-search ">
              <h6 className={`colorBlue fw-semibold footer-fs ${style.footerFs}`}> NEWSLETTER </h6>
              <p className={`footer-fs text-muted ${style.footerFs}`}>
                Join our mailing list to receive monthly news and updates about
                our developments
              </p>
            </div>
            <div className="d-flex w-100">
              <input
                type="text"
                className={`w-75 px-2 py-2  mob-input ${style.input}`}
                placeholder="Your Email"
              />
              <button className={` text-center fs-6 fw-bolder ${style.footerBtn} px-4`}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      <EndFooter />
    </footer>
  );
};

export default Footer;
