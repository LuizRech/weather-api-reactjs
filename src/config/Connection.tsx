import React from 'react';

const Connection = (Loc: String) => {
  const urlApi = 'https://api.weatherapi.com/v1/';
  const typeReq = 'forecast.json';
  const key = '?key='; //YOUR_KEY
  let location = '&q=Dublin';  
 
  if(Loc) {
    location = `&q=${Loc}`;
  }
  
  const days = null; //should have the days s

  const ret = urlApi+typeReq+key+location;
  
  return ret;
}

export default Connection;