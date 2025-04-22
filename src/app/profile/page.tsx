'use client';

import React, { useState, ChangeEvent } from 'react';
import {
  Container,
  Form,
  Image,
  Row,
  Col,
  Button,
  InputGroup,
} from 'react-bootstrap';

import { Envelope, Telephone, Instagram, Twitter, Linkedin } from 'react-bootstrap-icons';

import TopMenu from '../../components/TopMenu';

export default function ProfilePage(): JSX.Element {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  });

  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredWorkouts, setPreferredWorkouts] = useState<string[]>([]);
  const [gender, setGender] = useState('');
  const [experience, setExperience] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    console.log('Saving contact info:', contactInfo);
    // TODO: Hook this to backend
  };

  const handleDayToggle = (day: string): void => {
    setPreferredDays((prev) => {
      // If the day is already in the array, remove it; otherwise, add it.
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      }
      return [...prev, day];
    });
  };

  const handleWorkoutToggle = (type: string): void => {
    // eslint-disable-next-line no-confusing-arrow
    setPreferredWorkouts((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]);
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleExperienceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExperience(e.target.value);
  };

  return (
    <main>
      <TopMenu />

      <Container
        className="mt-5"
        style={{ maxWidth: '800px', backgroundColor: '#d5f5e3', borderRadius: '12px', padding: '2rem' }}
      >
        <h1 className="mb-4 text-center">My Profile</h1>

        {/* Profile Info Section */}
        <section className="mb-5">
          <h4 className="mb-3">Account Information</h4>
          <Row>
            <Col md={8}>
              <Form>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="userId" className="mb-3">
                  <Form.Control type="text" placeholder="User ID" />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Col>
            <Col md={4} className="text-center">
              <Image src="/image.png" alt="Profile" fluid className="logo w-50" />
            </Col>
          </Row>
        </section>

        <hr />

        {/* Contact Section */}
        <section className="mb-5">
          <h4 className="mb-3">Contact & Social Media</h4>

          <Form>
            <Form.Group controlId="email" className="mb-3">
              <InputGroup>
                <InputGroup.Text><Envelope /></InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={contactInfo.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <InputGroup>
                <InputGroup.Text><Telephone /></InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  value={contactInfo.phone}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="instagram" className="mb-3">
              <InputGroup>
                <InputGroup.Text><Instagram /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Instagram"
                  value={contactInfo.instagram}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="twitter" className="mb-3">
              <InputGroup>
                <InputGroup.Text><Twitter /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Twitter"
                  value={contactInfo.twitter}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="linkedin" className="mb-3">
              <InputGroup>
                <InputGroup.Text><Linkedin /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="LinkedIn"
                  value={contactInfo.linkedin}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={handleSave}>Save</Button>
            </div>
          </Form>
        </section>

        <hr />

        {/* Schedule Section */}
        <section className="mb-5">
          <h4 className="mb-3">Preferred Workout Days</h4>
          <Row className="text-center">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <Col key={day} xs={4} md={3}>
                <Form.Check
                  type="checkbox"
                  label={day}
                  checked={preferredDays.includes(day)}
                  onChange={() => handleDayToggle(day)}
                />
              </Col>
            ))}
          </Row>
        </section>

        <hr />

        <section className="mb-5">
          <h4 className="mb-3">Preferred Workout Types</h4>
          <Row className="text-center">
            {['Running', 'Free Weights', 'Calisthenics', 'Mixed', 'Machines'].map((type) => (
              <Col key={type} xs={6} md={4}>
                <Form.Check
                  type="checkbox"
                  label={type}
                  checked={preferredWorkouts.includes(type)}
                  onChange={() => handleWorkoutToggle(type)}
                />
              </Col>
            ))}
          </Row>
        </section>

        <hr />

        {/* Gender & Experience Section */}
        <section className="mb-5">
          <h4 className="mb-3">Gender & Fitness Experience</h4>

          <Form.Group controlId="gender" className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender} onChange={handleGenderChange}>
              <option value="">Select your gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-Binary">Non-Binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="experience">
            <Form.Label>Describe your fitness experience</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Tell us about your past workouts, goals, or fitness background..."
              value={experience}
              onChange={handleExperienceChange}
            />
          </Form.Group>
        </section>
      </Container>
    </main>
  );
}
