import { WEATHER_DATA_RECIEVED } from './weather.actions.js';

const initialData = {
  weatherData: null,
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
