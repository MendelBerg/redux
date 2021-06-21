import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
