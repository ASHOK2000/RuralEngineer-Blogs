import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container } from 'react-bootstrap';

export default function WhyUs() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <Container></Container>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
