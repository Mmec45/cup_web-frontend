import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    dispatch({ type: 'FETCH_USER_BY_ID_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_BY_ID_FAILURE', payload: error.message });
  }
};
