'use client';

// components/SignupComponent.js
import React, { useState } from 'react';
import styles from './SignupComponent.module.css'; // Import CSS Modules for this component

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // To display validation errors
  const handleSignup = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors

    // --- Validation ---
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return; // Stop the signup process
    }

    if (password.length < 8) { // Example: Minimum password length
      setError('Password must be at least 8 characters long.');
      return;
    }
    // Add more validation as needed (e.g., username format)
    // --- End of Validation ---
    // --- Placeholder for actual signup logic ---
    // Here you would typically make an API call to your backend
    // to register the new user.
    console.log('Attempting signup with:');
    console.log('Username:', username);
    console.log('Password:', password); // In a real app, never log passwords directly!
    // eslint-disable-next-line no-alert
    alert(`Signup attempt for Username: ${username}. Check console for details.`); // Replace with actual feedback
    // Reset fields after attempt (optional)
    // setUsername('');
    // setPassword('');
    // setConfirmPassword('');
    // --- End of placeholder ---
  };

  return (
    <div className={styles.signupContainer}>
      {' '}
      {/* Similar container */}
      <div className={styles.signupBox}>
        {' '}
        {/* Similar box */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className={styles.inputField} // Reusing style class
            value={username}
            onChange={(e: { target: { value: any; }; }) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField} // Reusing style class
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.inputField} // Reusing style class
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
          {' '}
          {/* Display error message */}
          <button type="submit" className={styles.submitButton}>
            {' '}
            {/* Similar button style */}
            Sign Up
          </button>
        </form>
        {/* Optional: Add a link back to login */}
        <p className={styles.loginLink}>
          Already have an account?
          {' '}
          <a href="/auth/signin">Log In</a>
        </p>
      </div>
      {/* You can optionally add the logo here too if desired */}
      {/* <div className={styles.logoContainer}> ... </div> */}
    </div>
  );
};

export default SignupComponent;
