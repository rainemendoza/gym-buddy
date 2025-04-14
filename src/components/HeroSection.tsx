import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => (
  <section className="hero-section py-4">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          {/* <Image
            src="/api/placeholder/1920/1080"
            alt="Find your gym buddy"
            className="img-fluid rounded shadow"
          /> */}
          <iframe
            src="https://www.youtube.com/embed/lAuAWGu2us0?si=HH4d3hNLLS0E3omO"
            title="YouTube video player"
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '400px' }}
            allowFullScreen
          />
        </Col>
        <Col lg={6} className="text-center">
          <h1 className="display-4 fw-bold">Find your next gym buddy!</h1>
          <p className="lead mt-3">
            Explore buddies in the Explore page.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
