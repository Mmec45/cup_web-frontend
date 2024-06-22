import axiosInstance from '../../services/axiosConfig';

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get('/orders');
    dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ORDERS_FAILURE', payload: error.message });
  }
};

export const fetchOrderById = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/orders/${id}`);
    dispatch({ type: 'FETCH_ORDER_BY_ID_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ORDER_BY_ID_FAILURE', payload: error.message });
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/orders', orderData);
    dispatch({ type: 'CREATE_ORDER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CREATE_ORDER_FAILURE', payload: error.message });
  }
};

export const updateOrder = (id, orderData) => async (dispatch) => {
  try {
    const res = await axiosInstance.put(`/orders/${id}`, orderData);
    dispatch({ type: 'UPDATE_ORDER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_ORDER_FAILURE', payload: error.message });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/orders/${id}`);
    dispatch({ type: 'DELETE_ORDER_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_ORDER_FAILURE', payload: error.message });
  }
};
