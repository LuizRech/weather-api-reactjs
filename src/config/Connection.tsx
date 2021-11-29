import React from 'react';
import config_token from '../configTokenAccess';

const Connection = (Loc: String) => {
  const urlApi = 'https://api.weatherapi.com/v1/';
  const typeReq = 'forecast.json';
  const key = `?key=${config_token.MY_API_TOKEN}`; //YOUR_KEY
  let location = '&q=Dublin';  
 
  if(Loc) {
    location = `&q=${Loc}`;
  }
  
  const days = null; //should have the days s

  const ret = urlApi+typeReq+key+location;
    console.log(config_token.MY_API_TOKEN);
    console.log("passu")
  return ret;
}

export default Connection;