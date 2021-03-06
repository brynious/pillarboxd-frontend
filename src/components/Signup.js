import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import { TextInput, Button } from "./utils/Utils";
import { AuthContext } from '../contexts/AuthContext';
import { SiteBackground } from './SiteBackground';

export const Signup = () => {
  const { authState, dispatch } = useContext(AuthContext);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
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
      const res = await axios.post('https://pillarboxd-backend.herokuapp.com/signup', body, {
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
    <SiteBackground>
      {authState.isAuthenticated && <Redirect to="/" />}

      <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <header class="max-w-lg mx-auto">
          <Link to="/">
            <h1 class="text-4xl font-bold text-white text-center">Pillarboxd</h1>
          </Link>
        </header>

        <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 class="font-bold text-2xl">Welcome to Pillarboxd</h3>
            <p class="text-gray-600 pt-2">Create an account.</p>
          </section>

          <section class="mt-10">
            <form className="flex flex-col" onSubmit={e => handleSubmit(e)}>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userDetails.username}
                  onChange={e => handleChange(e)}
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={e => handleChange(e)}
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userDetails.password}
                  onChange={e => handleChange(e)}
                  class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                />
              </div>

              <button
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </section>
        </main>

        <div class="max-w-lg mx-auto text-center mt-12 mb-6">
          <p class="text-white">
            Already have an account?{' '}
            <Link to="/createaccount" class="font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </SiteBackground>
  );
};
