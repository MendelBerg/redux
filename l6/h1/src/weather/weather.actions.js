export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';
import { getWeatherData } from './weather.gateway.js';

export const weatherDataRecieved = weatherData => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: {
      weatherData,
    },
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    getWeatherData().then(weatherData => {
      dispatch(weatherDataRecieved(weatherData));
    });
  };
};
