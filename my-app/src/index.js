import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import data from './countries.json'
import Country from './Country'
import CountryDetail from './CountryDetail';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="">WikiCountries</header>
        <div class="list-group">
          <ul>
            {data.map((oneCountry) => 
              <Country/>
            )}
          </ul>
        </div>
        <CountryDetail /> 
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);