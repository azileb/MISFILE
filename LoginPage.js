import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/authService'; // Import the function from the correct path
import '../CSS/LoginPage.css';

export default function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Use the dummy authentication function
    if (authenticateUser(email, password)) {
      localStorage.setItem('jwtToken', 'dummy-token'); // Simulate storing a token
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2 className='login-title'>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}
