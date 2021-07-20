import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CountryDetail extends React.Component {
  state = {
    country: null,
  };

  getCountry = () => {
    const countryCode = this.props.match.params.id;
    axios
      .get(`/api/countries/${countryCode}`)
      .then((response) => {
        console.log(response);
        this.setState({
          country: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getCountry();
  }

  componentDidUpdate(prevProps) {
    console.log('updated');
    // when the component is updated then we need to check if the props are
    // different to the props before and get the new country
    if (prevProps !== this.props) {
      this.getCountry();
    }
  }

  render() {
    const country = this.state.country;
    if (!country) return <></>;
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {country.borders.length > 0 && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((el) => {
                      return (
                        <li key={el.cca3}>
                          <Link to={`/${el.cca3}`}>{el.name.common}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
