const initialState = {
    users: [],
    selectedUser: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return { ...state, users: action.payload, error: null };
      case 'FETCH_USERS_FAILURE':
        return { ...state, users: [], error: action.payload };
      case 'FETCH_USER_BY_ID_SUCCESS':
        return { ...state, selectedUser: action.payload, error: null };
      case 'FETCH_USER_BY_ID_FAILURE':
        return { ...state, selectedUser: null, error: action.payload };
      default:
        return state;
    }
  };
  
export default userReducer;
  