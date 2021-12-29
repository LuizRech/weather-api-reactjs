import React from 'react';
import './searchBarStyle.css';

function SearchBarComponent() {
  return(
      <div className="SearchBarComponent_container">
        <div className="label">
          Search your city
        </div>

        <div className="containerBottom">
          <div className="searchBar">
            <div className="searchDiv">
                <input type="text" placeholder="City" className="searchInput" />
            </div>

            <div className="separator">
              
            </div>

            <div className="date">
              <input type="date" className="dateInput" />
            </div>
          </div>

          <button className="searchButton">
            Search
          </button>
        </div>
      </div>
  );
}

export default SearchBarComponent;