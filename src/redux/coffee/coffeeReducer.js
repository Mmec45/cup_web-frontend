const initialState = {
    coffees: [],
    error: null,
  };
  
  const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COFFEES_SUCCESS':
        return { ...state, coffees: action.payload, error: null };
      case 'FETCH_COFFEES_FAILURE':
        return { ...state, coffees: [], error: action.payload };
      case 'CREATE_COFFEE_SUCCESS':
        return { ...state, coffees: [...state.coffees, action.payload], error: null };
      case 'CREATE_COFFEE_FAILURE':
        return { ...state, error: action.payload };
      case 'UPDATE_COFFEE_SUCCESS':
        return {
          ...state,
          coffees: state.coffees.map((coffee) =>
            coffee.id === action.payload.id ? action.payload : coffee
          ),
          error: null,
        };
      case 'UPDATE_COFFEE_FAILURE':
        return { ...state, error: action.payload };
      case 'DELETE_COFFEE_SUCCESS':
        return {
          ...state,
          coffees: state.coffees.filter((coffee) => coffee.id !== action.payload),
          error: null,
        };
      case 'DELETE_COFFEE_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default coffeeReducer;
  