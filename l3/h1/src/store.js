import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer.js';
import { userReducer } from './user.reducer.js';
import { cartReducer } from './cart.reducer.js';

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(appReducer);

export default store;
