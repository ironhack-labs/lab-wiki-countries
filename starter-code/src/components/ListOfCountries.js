import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListOfCountries extends Component {
  constructor(props) {
    super(props);
    this.makeListOfCountries = this.makeListOfCountries.bind(this);
  }

  makeListOfCountries = () => {
    let listOfCountriesArr = this.props.countriesInfo.map((country, index) =>
      <Link key={index} className="list-group-item list-group-item-action" to={{
        pathname: `/about/${country.cca3}`,
        state: {
          borders: country.borders,
          countryName: country.name.common,
          capital: country.capital,
          area: country.area,
          countryNameArr: this.props.makeCountryNameArr(country.borders),
          listOfCountries: this.props.countriesInfo
        }
      }}>
        <span>{country.flag}</span>{country.name.common}
      </Link>);

    return listOfCountriesArr
  }

  render() {
    return (
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
          {this.makeListOfCountries()}
        </div>
      </div>
    );
  }
}

export default ListOfCountries;