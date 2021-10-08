import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {
  const { authState, dispatch } = useContext(AuthContext);

  return (
    <header className="navbar">
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Pillarboxd</Link>
          </div>

          {authState.isAuthenticated ? (
            <ul className="nav-links">
              <li>
                <svg class="w-8 h-8 inline-block" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <Link to={`/${authState.username}/watchlist`}>Watchlist</Link>
              </li>
              <li>
                <svg class="w-8 h-8 inline-block" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <Link to={`/${authState.username}/watching`}>Watching</Link>
              </li>
              <li>
                <svg class="w-8 h-8 inline-block" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <Link to={`/${authState.username}/watched`}>Watched</Link>
              </li>
              <li>
                <Link to="/add" className="btn">
                  + Add
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => dispatch({ type: 'logout' })}>
                  Sign out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-links">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
