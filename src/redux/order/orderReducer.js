const initialState = {
    orders: [],
    selectedOrder: null,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ORDERS_SUCCESS':
        return { ...state, orders: action.payload, error: null };
      case 'FETCH_ORDERS_FAILURE':
        return { ...state, orders: [], error: action.payload };
      case 'FETCH_ORDER_BY_ID_SUCCESS':
        return { ...state, selectedOrder: action.payload, error: null };
      case 'FETCH_ORDER_BY_ID_FAILURE':
        return { ...state, selectedOrder: null, error: action.payload };
      case 'CREATE_ORDER_SUCCESS':
        return { ...state, orders: [...state.orders, action.payload], error: null };
      case 'CREATE_ORDER_FAILURE':
        return { ...state, error: action.payload };
      case 'UPDATE_ORDER_SUCCESS':
        return {
          ...state,
          orders: state.orders.map((order) =>
            order.id === action.payload.id ? action.payload : order
          ),
          error: null,
        };
      case 'UPDATE_ORDER_FAILURE':
        return { ...state, error: action.payload };
      case 'DELETE_ORDER_SUCCESS':
        return {
          ...state,
          orders: state.orders.filter((order) => order.id !== action.payload),
          error: null,
        };
      case 'DELETE_ORDER_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  