import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

console.log(store.getState());
store.dispatch(addUser({id:1, name: 'Tom'}));

console.log(store.getState());
store.dispatch(addUser({id:2, name: 'Sarah'}));

console.log(store.getState());
store.dispatch(deleteUser(1));

console.log(store.getState());
