import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Image from "react-bootstrap/Image";
import logoImage from "../res_images/Ruralengineer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#3b5998",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Facebook</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#55acee",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; Twitter &nbsp;</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#ac2bac",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Instagram</p>
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#dd4b39",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; Google &nbsp;</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#25d366",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>Whatsapp</p>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#ed302f",
                maxHeight: "35px",
                maxWidth: "100px",
              }}
              href="#!"
              role="button">
              <p>&nbsp; YouTube</p>
            </MDBBtn>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="4" xl="3" className="mx-auto mb-4">
                <p className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  <Image
                    src={logoImage}
                    alt="Rural Engineer Blogs"
                    className="mb-5"
                    style={{ height: "80px" }}
                  />
               
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4"></MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/Contact_us" className="text-reset">
                    Help
                  </Link>
                </p>
                <p>
                  <Link to="/Pricing" className="text-reset">
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to="/Admisson" className="text-reset">
                    Admisson
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Resources</h6>

                <p>
                  <Link to="/" className="text-reset">
                    Blogs
                  </Link>
                </p>

                <p>
                  <Link to="/" className="text-reset">
                    Course info
                  </Link>
                </p>

                <p>
                  <Link to="/" className="text-reset">
                    Interview Questions
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-left"
          style={{ backgroundColor: "rgba(117, 17, 17, 0.05)" }}>
          <div className="text-center p-2">
            © 2023 Copyright: &nbsp;
            <a
              className="text-reset fw-bold"
              href="https://ruralEngeer.com/">
              ruralEngineer.com</a>
              
          </div>
          <Link to="/Developer" style={{ textDecoration: "none" }}>
            {" "}
            Design and developed By Ashok Kushwaha{" "}
          </Link>
        </div>
      </MDBFooter>
    </div>
  );
}
