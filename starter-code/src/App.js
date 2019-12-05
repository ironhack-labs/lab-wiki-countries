import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import countries from './countries.json'

function App() {
  return (
    <div id="root">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-5" >
              <div class="list-group">
               
                {countries.map((elm, idx) => (
                  <Link
                    className="list-group-item list-group-item-action"
                    to={elm.cca3}
                  >
                     {elm.name.official}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> 
     </div> 
  );
}

export default App;
