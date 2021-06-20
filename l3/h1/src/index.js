import store from './store.js';
import { setLanguage } from './language.actions.js';
import { setUser, removeUser } from './user.actions.js';
import { addProduct, deleteProduct } from './cart.actions.js';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(removeUser());

store.dispatch(setLanguage('jb'));

store.dispatch(addProduct({ id: 1, name: 'Cheese' }));
store.dispatch(addProduct({ id: 2, name: 'Tomato' }));
store.dispatch(deleteProduct(1));
