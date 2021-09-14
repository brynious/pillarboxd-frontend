import React, { createContext, useReducer, useEffect } from 'react';
import authReducer from './AuthReducer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    userID: null,
    username: null,
  };
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userID = localStorage.getItem('userID');
    const username = localStorage.getItem('username');

    isAuthenticated &&
      dispatch({
        type: 'login',
        payload: {
          isAuthenticated,
          userID,
          username,
        },
      });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
