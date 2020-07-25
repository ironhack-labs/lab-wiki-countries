import React, { Component } from 'react';
import axios from 'axios';


export class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countryCode: '',
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/').then((response) => {
      console.log(response.data);
      this.setState({ ...this.state, countries: response.data });
    });
  }

  mostrarPais(codigoDelPais) {
    console.log(codigoDelPais);
    this.setState({ ...this.state, countryCode: codigoDelPais });
  }

  render() {
    const listado = this.state.countries.map((pais) => (
      <a
        key={pais.alpha3Code}
        className="list-group-item list-group-item-action"
        onClick={() => this.mostrarPais(pais.alpha3Code)}
        href={`/${pais.alpha3Code}`}
      >
        <img
          src={pais.flag}
          alt="flag"
          style={{
            width: '20px',
            'margin-right': '10px',
          }}
        ></img>
        {pais.name}
      </a>
    ));

    return <div className="list-group">{listado}</div>;
  }
}

export default CountriesList;
