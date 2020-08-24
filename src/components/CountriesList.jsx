import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2')
      .then((response) => {
        console.log(response.data);
        this.setState({ countries: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const countriesList = this.state.countries.map((pais) => {
      return (
        <div>
          <Link to={'/' + pais.alpha3Code} className="btn btn-primary">
            {pais.alpha3Code}
          </Link>
          <p>{pais.name}</p>
          <img style={{ width: '30px' }} src={pais.flag} alt="flag"></img>
          <hr></hr>
        </div>
      );
    });
    return (
      <div
        style={{
          width: 440,
          float: 'left',
        }}
        class="col"
      >
        {countriesList}
      </div>
    );
  }
}
