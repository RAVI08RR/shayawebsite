import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Row, Col, Image } from 'react-bootstrap';
import './NewHeader.css';

const NewHeader = () => {
  return (
    <Navbar expand="lg" bg="white" className="border-bottom px-4 py-3">
      <Container fluid>
        <Navbar.Brand href="/" className="text-success font-weight-bold">
          SHAYA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#">ABOUT</Nav.Link>

            <NavDropdown title="PRODUCTS" id="products-menu" className="position-static">
              <div className="dropdown-menu w-100 p-4 mega-menu show">
                <Row>
                  <Col md={2}>
                    <Image src="/images/indoor.jpg" fluid rounded className="mb-2" />
                    <h6>Indoor</h6>
                    <a href="#">Petit</a>
                    <a href="#">Omado</a>
                    <a href="#">Olev</a>
                    <a href="#">Atala</a>
                    <a href="#">Thea</a>
                    <a href="#">Nur</a>
                  </Col>

                  <Col md={2}>
                    <h6>Surface & Modular</h6>
                    <a href="#">Luere</a>
                    <a href="#">Visea</a>
                    <h6 className="mt-3">Linear Profiles</h6>
                    <a href="#">Lanky</a>
                    <a href="#">Lerida</a>
                  </Col>

                  <Col md={2}>
                    <h6>AC & Magnetic Track</h6>
                    <a href="#">Piste</a>
                    <a href="#">Beck</a>
                    <h6 className="mt-3">Strip & Neon</h6>
                    <a href="#">Corda</a>
                    <a href="#">Zahi</a>
                    <a href="#">Ravine</a>
                  </Col>

                  <Col md={2}>
                    <Image src="/images/outdoor.jpg" fluid rounded className="mb-2" />
                    <h6>Outdoor</h6>
                    <a href="#">Bollard</a>
                    <a href="#">Inground</a>
                    <a href="#">Spotlights</a>
                  </Col>

                  <Col md={2}>
                    <Image src="/images/controls.jpg" fluid rounded className="mb-2" />
                    <h6>Lighting Controls</h6>
                    <a href="#">Bollard</a>
                    <a href="#">Inground</a>
                    <a href="#">Spotlights</a>
                  </Col>
                </Row>
              </div>
            </NavDropdown>

            <Nav.Link href="#">PROJECTS</Nav.Link>
            <Nav.Link href="#">BLOG</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
          <Button variant="dark" className="rounded-pill px-4">
            GET A FREE CONSULTATION
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewHeader;
