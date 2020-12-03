import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  state = {
    countriesList: [],
  };

  render() {
    return (
      <div>
        {this.state.countriesList.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.flag}
              {country.name.common}
            </Link>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch('https://countries.tech-savvy.tech/countries')
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        this.setState({ countriesList: data });
      })
      .catch((err) => console.log(err));
  }
}

export default CountriesList;
