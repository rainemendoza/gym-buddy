import React from 'react';
import { Container } from 'react-bootstrap';

// Adjust the import path based on your file structure
import TopMenu from '../../components/TopMenu';
import ProfileForm from '../../components/ProfileForm'; // Import the new component

export default function ProfilePage(): JSX.Element {
  return (
    <>
      <title>Profile</title>
      <meta name="description" content="User Profile Page" />
      <main>
        <div>
          <TopMenu />
        </div>
        <Container
          className="mt-5 mb-5" // Added mb-5 for bottom spacing
          style={{ maxWidth: '800px', backgroundColor: '#d5f5e3', borderRadius: '12px', padding: '2rem' }}
        >
          {/* Render the ProfileForm component here */}
          <ProfileForm />
        </Container>
      </main>
    </>
  );
}
