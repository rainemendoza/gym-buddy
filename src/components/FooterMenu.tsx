'use client';

import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Facebook, TwitterX, Pinterest, Instagram } from 'react-bootstrap-icons';

const FooterMenu = () => (
  <footer className="py-3">
    <Container>
      <Row>
        <Col>
          <strong>NAVIGATION</strong>
          <hr />
          <p>About Us</p>
          <p>Campus Map</p>
        </Col>
        <Col>
          CONNECT
          <hr />
          <p>Sign Up</p>
          <Nav className="me-auto">
            <Nav.Link>
              <Facebook />
            </Nav.Link>
            <Nav.Link>
              <TwitterX />
            </Nav.Link>
            <Nav.Link>
              <Pinterest />
            </Nav.Link>
            <Nav.Link>
              <Instagram />
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
