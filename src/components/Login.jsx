import React, { useState, useContext } from 'react';
import ThemeContext from '../ThemeContext';
import './Login.css'; // Import the CSS file for LoginForm

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
    } else {
      // Perform login logic
      setError('');
      // ...
    }
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: theme.background, color: theme.text }}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: theme.background, color: theme.text }}
            className="login-input"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

export default LoginForm;
