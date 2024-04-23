import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const MainNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="bg-light text-dark badge fs-5">Kal Tak</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">General</Nav.Link>
              <Nav.Link href="/technology">Techonlogy</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/health">Health</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
    </div>
  );
};

export default MainNavbar;
