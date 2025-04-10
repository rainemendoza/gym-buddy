'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../app/style.css'

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="mb-4 about-heading">About</h1>
            
            <div className="about-content">
              <p className="mb-3">
                "Welcome to our website! We are a passionate team dedicated to delivering high-quality
                services and exceptional experiences. With years of expertise in our field, we strive to provide
                innovative solutions tailored to meet your unique needs.
              </p>
              
              <p className="mb-3">
                Our mission is to empower individuals and businesses by offering reliable, efficient, and user-
                focused products. We believe in building strong relationships with our clients and continuously
                improving our offerings. Thank you for visiting, and we look forward to working with you!"
              </p>
              
              <p className="text-muted fst-italic small">
                (Random blurb created with ChatGPT)
              </p>
              
              <p className="mt-4">
                If this is your first time visiting our site and want to sign up or wish to log in, please click here:
              </p>
              
              {/* Raine Signup Component */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
