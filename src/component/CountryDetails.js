import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
export default class CountryDetails extends Component {
  state = {
    countryDetails: null,
  };

  getData = async () => {
    // incrementing the id because pokemon ids start from 1
    let countryIndex = this.props.match.params.countryIndex;
    let response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${countryIndex}`
    );

    console.log(response.data);

    // we save the pokemon id as well to be checked later in our componentDidUpdate
    let countryDetails = {
      countryIndex: this.props.match.params.countryIndex,
      name: response.data.name,
      capital: response.data.capital,
      area: response.data.area,
      borders: response.data.borders,
    };
    this.setState({
      countryDetails: countryDetails,
    });
  };

  componentDidMount() {
    console.log('Detail MOUNTED');
    this.getData();
  }

  componentDidUpdate() {
    let newcountryindex = this.props.match.params.countryIndex;
    let statedcountryindex = this.state.countryDetails.countryIndex;
    // compare the id in the state with the id in the props
    if (newcountryindex !== statedcountryindex) {
      this.getData();
    }
  }

  render() {
    console.log('Detail RENDERED');

    if (!this.state.countryDetails) {
      return <p>Loading Details. . . </p>;
    }

    const { countryDetails } = this.state;

    return (
      <div>
        Country Details
        <h4>{countryDetails.name}</h4>
        <p>Capital : {countryDetails.capital}</p>
        <p>Area : {countryDetails.area} km2</p>
        {this.state.countryDetails.borders.map((boader) => {
          return (
            <Link to={`/country/${boader}`}>
              <li>{boader}</li>
            </Link>
          );
        })}
      </div>
    );
  }
}
