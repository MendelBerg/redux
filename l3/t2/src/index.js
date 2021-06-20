import { store, increment, decrement } from './counter.js';

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());
