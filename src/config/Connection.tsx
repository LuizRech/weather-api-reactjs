import React from 'react';

const Connection = () => {
  const urlApi = 'https://api.weatherapi.com/v1/';
  const typeReq = 'forecast.json';
  const key = '?key='; //YOUR_KEY
  const location = '&q=Dublin';
  const days = null; //should have the days s

  const ret = urlApi+typeReq+key+location;

  return ret;
}

export default Connection;