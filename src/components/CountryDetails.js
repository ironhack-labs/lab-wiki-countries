import React, { Component } from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  componentDidMount() {
    Axios.get(
      'https://restcountries.eu/rest/v2/alpha/' + this.props.countryCode
    ).then((response) =>
      this.props.setState({
        countryData: response.data,
      })
    );
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.props.countryCode) {
      Axios.get(
        'https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id
      ).then((response) => this.props.setState({ countryData: response.data }));
    }
  }

  render() {
    let { name, capital, area, borders } = this.props.countryData;
    let bordersList = '';
    if (borders) {
      bordersList = borders.map((border) => (
        <li key={border}>
          <Link to={'/' + border}>{border}</Link>
        </li>
      ));
    }
    return (
      <div>
        <span>Country Details</span>
        <h1>{name}</h1>
        <Table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{bordersList}</ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CountryDetails;
