import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "../css/contact_us.css";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      {/* <div className="Header">
        <NavBar />
      </div> */}
      <Container>
        <div className="container mt-5 mb-2">
          <div className="contact__wrapper shadow-lg mt-n9">
            <div className="row no-gutters">
              {/* <div className="col-lg-5 contact-info__wrapper  p-5 order-lg-2">
                <h3 className=" mb-5">Get in Touch</h3>
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <i className="fas fa-envelope"></i>
                    </span>
                    Info@IndianPublicSchool.com
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <i className="fas fa-phone"></i>
                    </span>
                    +91 6265173931
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    INDIAN PUBLIC SCHOOL
                    <br /> VILL. Suhili Ramnagar DISTT: Satna
                    <br /> Madhya-Pradesh INDIA
                    <div className="mt-3">
                      <a
                        href="https://www.google.com/maps/place/Indian+public+school+suhila+satna/@24.2904649,81.3395471,17z/data=!4m14!1m7!3m6!1s0x398449367d2beb37:0x5e8e66964a3b3168!2sIndian+public+school+suhila+satna!8m2!3d24.2904649!4d81.3421274!16s%2Fg%2F11j8_g22st!3m5!1s0x398449367d2beb37:0x5e8e66964a3b3168!8m2!3d24.2904649!4d81.3421274!16s%2Fg%2F11j8_g22st?entry=ttu"
                        target="_blank"
                        className="text-link link--right-icon "
                        rel="noreferrer">
                        Get directions
                        <i className="link__icon fa fa-directions"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div> */}

              <div className="col-lg-12 contact-form__wrapper p-5 order-lg-1">
                <form
                  action="#"
                  className="contact-form form-validate"
                  noValidate>
                  <div className="row">
                    <div className="col-sm-5 mb-0 ml-5">
                      <div className="form-group">
                        <label className="required-field" htmlFor="Name">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Your name"
                        />
                      </div>
                    </div>



                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Sample123@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-0">
                      <div className="form-group">
                        <label className="required-field" htmlFor="message">
                          How can we help?
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Hi there, I would like to....."></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary mt-5" size="lg" >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
