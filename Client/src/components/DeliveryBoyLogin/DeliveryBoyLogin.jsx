import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DeliveryBoyLogin.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Here you can add your logic for authentication, such as sending the data to a server for validation
  };

  return (
    <div className="form-container"> {/* Apply form-container class */}
      <h2>Login for Delivery Boy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <NavLink to="/delivery">
          <button type="submit">Login</button>
        </NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
