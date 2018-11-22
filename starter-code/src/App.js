import React, { Component } from 'react';
import './App.css';
import countriesJSON from "./countries.json";
import CountryDetail from './components/CountryDetail';
import { Route, NavLink } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftColumn">
          <ul>
            {countriesJSON.map(ctr => (
              <NavLink to={"/" + ctr.cca3}> 
                <li className="countries-list">
                  {unescape(ctr.flag)}
                    {ctr.name.common}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="rightColumn">
          <Route path='/:cca3' component={CountryDetail}/>
        </div>

      </div>
    );
  }
}

export default App;
