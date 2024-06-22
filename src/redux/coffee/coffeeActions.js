import axios from 'axios';
import axiosInstance from '../../services/axiosConfig';


export const fetchCoffees = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/coffees');
    dispatch({ type: 'FETCH_COFFEES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COFFEES_FAILURE', payload: error.message });
  }
};

export const createCoffee = (coffeeData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/coffees', coffeeData);
    dispatch({ type: 'CREATE_COFFEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CREATE_COFFEE_FAILURE', payload: error.message });
  }
};

export const updateCoffee = (id, coffeeData) => async (dispatch) => {
  try {
    const res = await axiosInstance.put(`/coffees/${id}`, coffeeData);
    dispatch({ type: 'UPDATE_COFFEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_COFFEE_FAILURE', payload: error.message });
  }
};

export const deleteCoffee = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`coffees/${id}`);
    dispatch({ type: 'DELETE_COFFEE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_COFFEE_FAILURE', payload: error.message });
  }
};
