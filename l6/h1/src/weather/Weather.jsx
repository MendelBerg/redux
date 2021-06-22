import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as weatherActions from './weather.actions.js';
import { weatherDataSelector } from './weather.selectors.js';

const Weather = ({ title, getWeatherData, weather }) => {
  if (!weather) {
    getWeatherData();
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">{title}</h1>
      <ul className="cities-list">
        {weather.map(({ id, name, temperature }) => (
          <li key={id} className="city">
            <span className="city__name">{name}</span>
            <span className="city__temperature">{temperature}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

const mapState = state => {
  return {
    weather: weatherDataSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Weather);
