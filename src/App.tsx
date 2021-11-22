import React, { useState, useEffect } from 'react';
import './App.css';

import Connection from './config/Connection';

function App() {

  const [temp_c, setTemp_c] = useState();
  const [locationName, setLocationName] = useState();
  const [keywords, setKeywords] = useState('')

  useEffect(() => {

    fetch(Connection('Dublin')).then(response => response.json())
    .then(data => {
      setTemp_c(data.current.temp_c);
      setLocationName(data.location.name);
    });

  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    fetch(Connection(keywords)).then(response => response.json())
    .then(data => {
      if(data.current) {        
        setTemp_c(data.current.temp_c);
        setLocationName(data.location.name);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit}>

          <input type="text" 
            placeholder="Search Location" 
            name="searchLocation" 
            id="searchLocation" 
            className="searchLocationBar" 
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
          />
        
        </form>

        <p>
          <h1>Location: {locationName}</h1>
          <h2>Temp: {temp_c}</h2>
        </p>
      </header>
    </div>
  );
}

export default App;
