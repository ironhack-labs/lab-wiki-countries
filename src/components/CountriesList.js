import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
      )
      .then((res) => {
        this.setState({
          countries: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.countries.map((country, index) => {
          return (
            <p key={index}>
              <p>{country.name.official}</p>
              <img src={country.image} alt="oh oh   "></img>
            </p>
          );
        })}
      </div>
    );
  }
}
