'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Form,
  Image,
  Row,
  Col
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap';

export default function ProfileForm(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();

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

  // UI state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    if (status === 'authenticated') {
      const fetchUserProfile = async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/profile');

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch profile data');
          }

          const userData = await response.json();

          // Update state with fetched data
          setContactInfo({
            email: userData.email || '',
            phone: userData.phone || '',
            instagram: userData.instagram || '',
            twitter: userData.twitter || '',
            linkedin: userData.linkedIn || '',
          });

          setPreferredDays(userData.days || []);
          setPreferredWorkouts(userData.types || []);
          setGender(userData.gender || '');
          setExperience(userData.experience || '');
        } catch (err: any) {
          console.error('Error loading profile:', err);
          setError(err.message || 'Failed to load profile data. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [status]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSave = async () => {
    try {
      setError('');
      setSuccess('');

      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: contactInfo.phone,
          instagram: contactInfo.instagram,
          twitter: contactInfo.twitter,
          linkedin: contactInfo.linkedin,
          preferredDays,
          preferredWorkouts,
          gender,
          experience,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update profile');
      }

      setSuccess('Profile updated successfully!');
    } catch (err: any) {
      console.error('Error saving profile:', err);
      setError(err.message || 'Failed to save profile changes. Please try again.');
    }
  };

  // Handle authentication states
  if (status === 'loading' || loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading your profile data...</p>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="text-center my-5">
        <Alert variant="warning">
          Please sign in to view and edit your profile.
        </Alert>
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-4 text-center">My Profile</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" onClose={() => setSuccess('')} dismissible>
          {success}
        </Alert>
      )}

      {/* Profile Info Section */}
      <section className="mb-5">
        <h4 className="mb-3">Account Information</h4>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={contactInfo.email}
                  disabled
                />
                <Form.Text className="text-muted">
                  Email cannot be changed here
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4} className="text-center">
            <Image src="/image.png" alt="Profile" fluid className="logo w-50" />
          </Col>
        </Row>
      </section>

      {/* Other sections remain unchanged */}
    </>
  );
}
