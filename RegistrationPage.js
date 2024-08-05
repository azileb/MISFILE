// src/components/RegistrationPage.js
import React, { useState } from 'react';

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration
    if (email && password) {
      alert('Registration successful! You can now log in.');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
