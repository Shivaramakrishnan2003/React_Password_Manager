import React from 'react'
import { useState } from 'react';
import './LoginStyle.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered')
    console.log(`Username: ${username}, Password: ${password}`);
  };
  
  return (
    <div className='login' style={{marginTop:'10%'}}>
      <center>
      <form onSubmit={handleSubmit}>
        <div className='formdiv'>
          <label className='credlabel'>Username:</label>
          <input
            className='logincred'
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required/>
        </div>
        <div className='formdiv'>
          <label className='credlabel'>Password:</label>
          <input
            className='logincred'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required/>
        </div>
        <button className='but' type="submit">Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Login