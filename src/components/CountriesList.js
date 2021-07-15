import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class CountryList extends React.Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    //you can use fetch or axios

    //Make a call to the API
    //https://restcountries.eu/rest/v2/all
    //Wait for the response from the API
    //Set the state with response

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
        <div className="country-list">
          {countries && countries.length ? (
            this.state.countries.map((country) => {
              return (
                <div>
                  <NavLink
                    key={country.alpha3Code}
                    to={`/countries/${country.alpha3Code}`}
                  >
                    <img src={country.flag} width="50px" alt="flag" />
                    {country.name}
                  </NavLink>
                </div>
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </div>
      </>
    );
  }
}

export default CountryList;