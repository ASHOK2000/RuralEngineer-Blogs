import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  const centerStyle = {
    color: "rgb(96, 2, 133)",
    fontFamily: "gothamhtf-medium ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>

      <div
        style={{
          fontSize: "16px",
          fontFamily: "Gotham, Arial, sans-serif",
          letterSpacing: "1px",
        }}>
        <div style={ centerStyle }>
          <h2>CHAIRMAN'S MESSAGE</h2>
        </div>
        <ul style={{ listStyle: "none" }}>
          <li style={centerStyle}>
            <h4>
              &ldquo; Our mission is to provide the children of India with the
              necessary skills to face the challenges of the 21st century.
              &rdquo;
            </h4>
          </li>
          <Container>
            <li style={{ marginTop: "30px" }}>
              <h5>Dear Esteemed Parents, Teachers, and Beloved Students,</h5>
            </li>

            <li>
              I am delighted to address you as the Chairman of Indian Public
              School, Suhili. It fills me with immense pride to see our school
              thriving with over 450+ bright young minds.
            </li>
            <li>
              Our commitment to providing quality education is unwavering. We
              are equipped with state-of-the-art facilities, including
              well-maintained school buses and a dedicated <br />
              team of highly skilled teachers.
            </li>
            <li>
              Our vision is to empower each student with knowledge, values, and
              skills that will prepare them for a bright future. Together, we
              will continue to foster an environment where <br />
              learning is not just a task but a lifelong journey of discovery
              and growth.
            </li>
            <li>
              I want to express my gratitude to the entire school community for
              their dedication and support. Let's work hand in hand to ensure
              that every student reaches their full potential.
            </li>

            <li>Thank you for entrusting us with your child's education.</li>

            <div className="mt-4">
              <li>
                <h5>Warm regards,</h5>
              </li>
              <li> RAJESH KUMAR KUSHWAHA</li>
              <li>Chairman, Indian Public School, Suhili</li>
            </div>
          </Container>
        </ul>
      </div>

      <div className="Footer mt-4">
        <Footer />
      </div>
    </div>
  );
}
