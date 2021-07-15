import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class CountryList extends React.Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log(response.data);

    this.setState({
      countries: response.data,
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <>
        <ul>
          {countries.map((country) => {
            return (
              <li>
                <NavLink to={`/${country.alpha3Code}`}>{country.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CountryList;
