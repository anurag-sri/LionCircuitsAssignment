// frontend/src/components/LoginPage.js

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // Example:
    if (email === 'example@example.com' && password === 'password') {
      history.push('/upload');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <Link to="/user-profile">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
