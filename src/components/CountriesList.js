import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

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
        <div class="container">
          <div class="row">
            <div class="col-5 list">
              <div class="list-group">
                {countries.map((country) => {
                  return (
                    <div className="flag-country">
                      <img
                        className="flag-img"
                        src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}
                        alt=""
                      />
                      <NavLink
                        className="country"
                        to={`/${country.alpha3Code}`}
                      >
                        {country.name}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CountryList;
