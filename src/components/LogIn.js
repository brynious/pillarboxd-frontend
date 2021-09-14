import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LogIn = () => {
  const { authState, dispatch } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    email: 'bryn@google.com',
    password: 'test12',
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
      const res = await axios.post('http://localhost:3000/login', body, {
        exposedHeaders: ['set-cookie'],
      });

      const { userID, username, email } = res.data;

      dispatch({
        type: 'login',
        payload: { isAuthenticated: true, userID, username, email },
      });

      console.log('logged in');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {authState.isAuthenticated && <Redirect to="/" />}
      <form className="user-form" onSubmit={e => handleSubmit(e)}>
        <header className="form-header">
          <h2>Log in</h2>
          <span>
            <Link to="/createaccount">Create an account</Link>
          </span>
        </header>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={e => handleChange(e)}
          />
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
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};
