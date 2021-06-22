import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Weather from './weather/Weather.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Weather title="Weather data" />
    </Provider>
  );
};

export default App;
