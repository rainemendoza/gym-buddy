'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Image, Offcanvas, Button, Row, Col } from 'react-bootstrap';

const Background = () => (
  <>
    {/* orange block */}
    <Container fluid className="top-bg p-0">
      <div className="d-flex align-items-center gap-4 me-1 p-0">
        <div>
          <Image src="/school.png" fluid className="school-bg" />
        </div>
        {/* sign up text */}
        <Row className="fullwidth-row align-items-center me-3">
          <Col className="textright">
            <p className="text1">A new way to enjoy the gym.</p>
            <p className="text1">Meet with fellow students.</p>
            <p className="text2">Register now to get started.</p>
            <Button variant="outline-light" className="border-0 signup-button">
              Sign Up
            </Button>
          </Col>
        </Row>
      </div>
    </Container>

    {/* content block */}
    <Container fluid className="py-5 green section1">
      <h2>Section 1</h2>
    </Container>

    {/* features block */}
    <Container fluid className="py-5 orange section2">
      <h2>Section 2</h2>
    </Container>
  </>
);

export default Background;
