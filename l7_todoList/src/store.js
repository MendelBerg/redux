import { createStore, combineReducers } from 'redux';
import { tasksReducer } from './tasks/tasks.reducer.js';

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(reducer);

export default store;
