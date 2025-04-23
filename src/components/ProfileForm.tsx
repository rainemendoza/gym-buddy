'use client';

// Still needed here as it uses hooks and event handlers

import React, { useState, ChangeEvent } from 'react';
import {
  Form,
  Image,
  Row,
  Col,
  Button,
  InputGroup,
} from 'react-bootstrap';
import { Envelope, Telephone, Instagram, Twitter, Linkedin } from 'react-bootstrap-icons';

// Define props if needed in the future, for now it's self-contained
// interface ProfileFormProps {
//  // potential props like initialUserData, onSave callback, etc.
// }

// export default function ProfileForm(props: ProfileFormProps): JSX.Element {
export default function ProfileForm(): JSX.Element { // Using no props for now
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
    console.log('Saving profile data:', {
      contactInfo,
      preferredDays,
      preferredWorkouts,
      gender,
      experience,
      // Include username, userId if they were managed by state
    });
    // TODO: Hook this to backend API call
  };

  const handleDayToggle = (day: string): void => {
    setPreferredDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      }
      return [...prev, day];
    });
  };

  const handleWorkoutToggle = (type: string): void => {
    setPreferredWorkouts((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  // Type assertion needed for textarea onChange event
  const handleExperienceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExperience(e.target.value);
  };

  // Note: We are not managing username, userId, password state here yet.
  // You might want to add state and handlers for them if they need to be saved.

  return (
    <>
      {' '}
      {/* Use Fragment to wrap sections */}
      <h1 className="mb-4 text-center">My Profile</h1>

      {/* Profile Info Section */}
      <section className="mb-5">
        <h4 className="mb-3">Account Information</h4>
        <Row>
          <Col md={8}>
            <Form>
              {/* Consider adding state management for these if needed */}
              <Form.Group controlId="username" className="mb-3">
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="change_username" className="mb-3">
                <Form.Control type="text" placeholder="Change Username (optional)" readOnly />
                {' '}
                {/* Often IDs are read-only */}
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Control type="password" placeholder="New Password (optional)" />
                {' '}
                {/* Typically for changing password */}
              </Form.Group>
            </Form>
          </Col>
          <Col md={4} className="text-center">
            <Image src="/image.png" alt="Profile" fluid className="logo w-50" />
            {/* Add a button/input for changing profile picture if needed */}
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
                placeholder="Instagram Username"
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
                placeholder="Twitter Handle"
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
                placeholder="LinkedIn Profile URL"
                value={contactInfo.linkedin}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>

          {/* Save button moved below all sections */}
        </Form>
      </section>

      <hr />

      {/* Schedule Section */}
      <section className="mb-5">
        <h4 className="mb-3">Preferred Workout Days</h4>
        <Row className="text-center">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <Col key={day} xs={4} md={3} className="mb-2">
              <Form.Check
                type="checkbox"
                id={`day-${day}`} // Add unique id for accessibility
                label={day}
                checked={preferredDays.includes(day)}
                onChange={() => handleDayToggle(day)}
              />
            </Col>
          ))}
        </Row>
      </section>

      <hr />

      {/* Workout Types Section */}
      <section className="mb-5">
        <h4 className="mb-3">Preferred Workout Types</h4>
        <Row className="text-center">
          {['Running', 'Free Weights', 'Calisthenics', 'Mixed', 'Machines'].map((type) => (
            <Col key={type} xs={6} md={4} className="mb-2">
              <Form.Check
                type="checkbox"
                id={`workout-${type}`} // Add unique id
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
        <h4 className="mb-3">About You</h4>

        <Form.Group controlId="gender" className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select value={gender} onChange={handleGenderChange}>
            <option value="">Select your gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
            {/* Consider adding an "Other" option with a text input */}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="experience">
          <Form.Label>Describe your fitness experience</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tell us about your past workouts, goals, or fitness background..."
            value={experience}
            onChange={handleExperienceChange} // Corrected onChange handler type in definition
          />
        </Form.Group>
      </section>

      {/* Moved Save button to the end */}
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" size="lg" onClick={handleSave}>Save Profile</Button>
      </div>
    </>
  );
}
