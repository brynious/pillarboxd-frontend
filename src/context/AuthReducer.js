// import { connectSocket, disconnectFromSocket } from './socket/Socket';
import axios from 'axios';

const authReducer = (authState, action) => {
  switch (action.type) {
    case 'login':
      const { isAuthenticated, userID, userName } = action.payload;
      localStorage.setItem('isAuthenticated', isAuthenticated);
      localStorage.setItem('userID', userID);
      localStorage.setItem('userName', userName);

      // axios.defaults.headers.common = {
      //   Authorization: 'Bearer ' + localStorage.getItem('token'),
      // };
      axios.defaults.headers.post = {
        'Content-Type': 'application/json',
      };

      return {
        ...authState,
        isAuthenticated: true,
        userID,
        userName,
        // socket,
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
