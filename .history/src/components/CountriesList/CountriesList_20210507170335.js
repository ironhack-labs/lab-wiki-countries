import React from 'react';
import { Link } from 'react-router-dom';
import countriesList from '../../countries.json';

//class
class CountriesList extends React.Component {
  state = {
    countries: countriesList,
  };

  displayCountries = () => {
      return this.state.countries.map((country) => {
          return 
      })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.countries.map((country) => (
            
          ))}
        </div>
      </div>
    );
  }
}

export default CountriesList;
