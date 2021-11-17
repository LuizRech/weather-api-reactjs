import React from 'react';
import logo from './logo.svg';
import './App.css';

import Connection from './config/Connection';


  fetch(Connection()).then(response => response.json())
    .then(data => {console.log(data)});



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
      </header>
    </div>
  );
}

export default App;
