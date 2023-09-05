import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      shouldRedirect: false, // Added for redirection
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;
    // Make a POST request to the backend endpoint
    axios
      .post('https://easytickets.onrender.com/signup', { username, password, email })
      .then((response) => {
        console.log(response.data);
        // Redirect to login page after successful registration
        this.setState({ shouldRedirect: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { username, password, email, shouldRedirect } = this.state;
    if (shouldRedirect) {
      alert("User created Successfully");
      return <Navigate to="/" />;
    }

    return (
      <div className="container">
        <h1 className="heading">Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="label">
           <h2>Username:</h2> 
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
              className="input-field"
            />
          </label>
          <br />
          <label className="label"><h2>Password:</h2>
            
            <input
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
              className="input-field"
            />
          </label>
          <br />
          <label className="label">
          <h2>Email:</h2>  
            <input
              type="text"
              value={email}
              onChange={this.handleEmailChange}
              className="input-field"
            />
          </label>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form><h2>
        <a href="/" className="link">Existing User?</a></h2>
      </div>
    );
  }
}

export default Signup;
