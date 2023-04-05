import React from 'react'
import { useState } from 'react';
import './SignupStyle.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='signupform'>
        <div className="signupformdiv">
          <label>Username:</label>
          <input
            type="text"
            className='signupcred'
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required/>
        </div>
        <div className="signupformdiv">
          <label>Email:</label>
          <input
            type="email"
            className='signupcred'
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required/>
        </div>
        <div className="signupformdiv">
          <label>Password:</label>
          <input
            type="password"
            className='signupcred'
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required/>
        </div>
        <div className="signupformdiv">
          <label>Confirm Password:</label>
          <input
            type="password"
            className='signupcred'
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup