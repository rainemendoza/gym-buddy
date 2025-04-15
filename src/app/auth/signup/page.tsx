/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
// pages/signup.js
import React from 'react';
import Head from 'next/head';
import SignupComponent from '@/components/SignUp'; // Adjust the import path as necessary
import TopMenu from '@/components/TopMenu';
import '@/app/style.css';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Create a new account" />
      </Head>
      {/* Centering the component on the page */}
      <div>
        <TopMenu />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px 0' }}>
        <SignupComponent />
      </div>
    </>
  );
}
