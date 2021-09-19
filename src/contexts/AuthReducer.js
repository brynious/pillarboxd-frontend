import axios from 'axios';

const authReducer = (authState, action) => {
  switch (action.type) {
    case 'login':
      const { isAuthenticated, userID, username, email } = action.payload;
      localStorage.setItem('isAuthenticated', isAuthenticated);
      localStorage.setItem('userID', userID);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);

      axios.defaults.headers.post = {
        'Content-Type': 'application/json',
      };

      return {
        ...authState,
        isAuthenticated: true,
        userID,
        username,
        email,
      };
    case 'logout':
      localStorage.clear();
      return {
        ...authState,
        isAuthenticated: false,
      };
    default:
      return authState;
  }
};

export default authReducer;
