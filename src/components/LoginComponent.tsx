'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LoginComponent.module.css';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Attempting login:', username, password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className={styles.inputField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
            <Link href="/auth/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.logoContainer}>
        <Image
          src="/image.png" // Corrected path
          alt="University Logo"
          width={150}
          height={150}
          priority
          className={styles.logoImage}
        />
      </div>
    </div>
  );
};

export default LoginComponent;
