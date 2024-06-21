import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { thunk } from 'redux-thunk';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import orderReducer from './order/orderReducer';
import coffeeReducer from './coffee/coffeeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  orders: orderReducer,
  coffees: coffeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;