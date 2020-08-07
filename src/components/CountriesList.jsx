import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class CountriesList extends Component {
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
          <Link to={'/' + pais.alpha3Code} className="btn ">
            {pais.alpha3Code}
          </Link>
          <p>{pais.name}</p>
          <img className="flag" src={pais.flag} alt="bandera"></img>
          <hr></hr>
        </div>
      );
    });
    return (
      <div style={{ width: 400, float: 'left' }} class="col">
        {countriesList}
      </div>
    );
  }
}

export default CountriesList;
