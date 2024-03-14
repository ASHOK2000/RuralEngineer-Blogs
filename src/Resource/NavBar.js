import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import logoImage from "../res_images/Ruralengineer.png";
import { Container } from "react-bootstrap";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <Container className="">
      <div className="NavBody">
        <Navbar bg="" expand="lg">
          <Navbar.Brand href="/">
            <div className="navbar_logo">
              <Image
                src={logoImage}
                alt="indian Public school"
                className="navbar_logo"
              />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav" className="nav_link ">
            <Nav className="ml-auto  list-item">
              <LinkContainer to="/">
                <Nav.Link>
                  <p className="nav-title  NavStyle Nav-name">All&nbsp;BLOGS</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title NavStyle Nav-name ">PROGRAMMING</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title NavStyle Nav-name ">INTEGRATION</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title NavStyle Nav-name ">DEVOPS</p>
                </Nav.Link>
              </LinkContainer>


              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title NavStyle Nav-name ">
                    INFORMATION TECHNOLOGY
                  </p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title  NavStyle Nav-name">LEARNING</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title  NavStyle Nav-name">
                    &nbsp;S E O&nbsp;
                  </p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Integration">
                <Nav.Link>
                  <p className="nav-title  NavStyle Nav-name">OTHERS</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}
