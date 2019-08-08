import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CountriesMenu.css";
import axios from 'axios';


class CountriesMenu extends Component {

  constructor(props){
    super(props)
    this.state = {
        countriesData: []
    };
  };

  componentDidMount() {
    // axios.get("https://countries.tech-savvy.tech/countries")
    axios.get("http://localhost:3000/countries")
    .then(response => {
      this.setState({countriesData: response.data})
      debugger
    })
    .catch((err) => {
      debugger
      console.log(err);
    });
  };
  
  render() {

    // Create array of "country link" objects for the menu:
    let CountryLinks = this.state.countriesData.map((country) => {
      return (
        <Link to={`/country/${country.cca3}`}>
          <a className="list-group-item list-group-item-action">
            {country.flag.normalize()} {country.name.common}
          </a>
        </Link>
      );
    });

    
    return (
      <div className="col-5">
        <div className="list-group">
          {CountryLinks}
        </div>
      </div>
    );
  };
};

export default CountriesMenu;