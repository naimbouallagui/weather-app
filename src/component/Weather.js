/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Weather = props =>
  <div className='weather'>
    <p>City: </p>
    <p>{props.city}</p>

    <p>Temperature: </p>
    <p>{props.temp}</p>

    <p>Sky: </p>
    <p>{props.clouds}</p>
  </div>
  
export default Weather;