'use client';

import { Container, Row, Col } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="py-3">
    <Container>
      <Row>
        <Col>
          NAVIGATION
          <hr />
          <p>About Us</p>
          <p>Campus Map</p>
        </Col>
        <Col>
          CONNECT
          <hr />
          <p>Sign Up</p>
          <p>(Social Media goes here)</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
