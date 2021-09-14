import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import { TextInput, Button } from "./utils/Utils";
import { AuthContext } from '../context/AuthContext';

export const Signup = () => {
  const { authState, dispatch } = useContext(AuthContext);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: 'testusername',
    email: 'test@google.com',
    password: 'test12',
  });
  const [submissionErrors, setSubmissionErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const body = JSON.stringify(userDetails);

      console.log('request', { body });
      const res = await axios.post('http://localhost:3000/signup', body, {
        exposedHeaders: ['set-cookie'],
      });

      const { userID, username, email } = res.data;

      dispatch({
        type: 'login',
        payload: { isAuthenticated: true, userID, username, email },
      });

      console.log('logged in');
    } catch (err) {
      const errors = err.response.data.errors;
      setSubmissionErrors({
        username: errors.username,
        email: errors.email,
        password: errors.password,
      });
      console.log(err.response.data);
    }
  };

  return (
    <div>
      {authState.isAuthenticated && <Redirect to="/" />}
      <form className="user-form" onSubmit={e => handleSubmit(e)}>
        <header className="form-header">
          <h2>Sign up</h2>
          <span>
            <Link to="/login">Login here</Link>
          </span>
        </header>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userDetails.username}
            onChange={e => handleChange(e)}
          />
          {submissionErrors.username && <p>{submissionErrors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            // type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={e => handleChange(e)}
          />
          {submissionErrors.email && <p>{submissionErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={e => handleChange(e)}
          />
          {submissionErrors.password && <p>{submissionErrors.password}</p>}
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};
