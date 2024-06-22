import axiosInstance from '../../services/axiosConfig';

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get('/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER_BY_ID_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_BY_ID_FAILURE', payload: error.message });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/users', user);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
  }
};