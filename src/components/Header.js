import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Header = () => {
  const { authState, dispatch } = useContext(AuthContext);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/watching">Watching</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
            {authState.isAuthenticated ? (
              <li>
                <button onClick={() => dispatch({ type: 'logout' })}>
                  Sign out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  {/* TODO: create sign up page */}
                  <Link to="/">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
