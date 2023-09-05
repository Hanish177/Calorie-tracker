import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    sessionStorage.setItem('username', event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the backend endpoint
    axios
      .post('https://easytickets.onrender.com/login', { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200 && response.data === 'Login successful') {
          navigate('/home'); // Redirect to the desired page
        } else {
          // Handle unsuccessful login
          console.log('Invalid');
          alert('Invalid Credentials');
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle network errors or other exceptions here
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method='post'>
        <label><h2>Username:</h2>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label><h2>Password:</h2>
          
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br /><h2>
        <button type="submit">Submit</button></h2>
      </form>
      <h2><a href="signup">New User?</a></h2>
    </div>
  );
};

export default Login;
