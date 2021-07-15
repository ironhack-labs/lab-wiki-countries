import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class CountriesList extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    let response = await axios.get('https://restcountries.eu/rest/v2/all');

    console.log(response.data);
    this.setState({
      countries: response.data,
    });
  }
  render() {
    if (this.state.countries.length == 0) {
      return <p>Loading . . . </p>;
    }

    return (
      <div>
        {this.state.countries.map((country) => {
          return (
            <p key={country.alpha3Code}>
              <Link to={`/country/${country.alpha3Code}`}>
                <img className="flagpic" src={country.flag} alt="flagpic"></img>
                {country.name}
              </Link>
            </p>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
