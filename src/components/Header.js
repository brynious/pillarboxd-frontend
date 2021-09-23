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
                <Link to={`/${authState.username}/watchlist`}>Watchlist</Link>
              </li>
              <li>
                <Link to={`/${authState.username}/watching`}>Watching</Link>
              </li>
              <li>
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
