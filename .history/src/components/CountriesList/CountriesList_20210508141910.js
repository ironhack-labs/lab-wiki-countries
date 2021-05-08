import React from 'react';
import {Link} from "react-router-dom"
import countriesList from '../../countries.json';
import "./CountriesList.css";

//class
class CountriesList extends React.Component {
  state = {
    countries: countriesList,
  };

  displayCountries = () => {
      return this.state.countries.map((country) => {
          return (
            <li>

            </li>
            
          )
      })
  }

  render() {
    return (
      <div>
        <ul>
        {this.displayCountries()}
        </ul>
        
         
        
      </div>
    );
  }
}

export default CountriesList;
