import axios from 'axios';

// Login
export const login = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3001/auth/login', { username, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

// Register
export const register = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3001/auth/register', { username, password });
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};

//Users

