import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="mt-4 header">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo" className="logo" src={"/assets/logo.png"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <ul className="menu">
                <li>
                  <Nav.Link className="menu-btn" href={"#hero"}>
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="menu-btn" href={"#about"}>
                    About
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="menu-btn" href={"#experiences"}>
                    Experiences
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="menu-btn" href={"#projects"}>
                    Projects
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="menu-btn" href={"#contact"}>
                    Contact
                  </Nav.Link>
                </li>{" "}
                <li>
                  <Nav.Link
                    className="menu-btn"
                    href={"/assets/resume/giwa-muhammad.pdf"}
                  >
                    My Resume
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <section id="header" className="header-section">
        <div className="container">
          <div className="header ">
            <div className="logo">
              <Image
                width={330}
                height={34}
                alt="logo"
                src={"/assets/logo.png"}
              />
            </div>
            <ul className="menu">
              <li>
                <Link className="menu-btn" href={"#hero"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu-btn" href={"#about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="menu-btn" href={"#experiences"}>
                  Experiences
                </Link>
              </li>
              <li>
                <Link className="menu-btn" href={"#projects"}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="menu-btn" href={"#contact"}>
                  Contact
                </Link>
              </li>{" "}
              <li>
                <Link className="menu-btn" href={"#resume"}>
                  My Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>{" "} */}
    </>
  );
};

export default Header;
