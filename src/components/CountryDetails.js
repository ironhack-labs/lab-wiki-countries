import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../App.css';

class CountryDetail extends React.Component {
  state = {
    name: '',
    capital: '',
    area: '',
    borders: [],
  };

  getCountry = async () => {
    const countryId = this.props.match.params.countryId;
    const country = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${countryId}`
    );
    this.setState({
      name: country.data.name,
      capital: country.data.capital,
      area: country.data.area,
      borders: country.data.borders,
    });
  };

  async componentDidMount() {
    this.getCountry();
  }

  componentDidUpdate(prevState, prevProps) {
    //To prevent an infinite loo
    if (prevProps !== this.props) {
      this.getCountry();
    }
  }

  render() {
    const { name, capital, area, borders } = this.state;
    return (
      <>
        <div class="col-7">
          <h1>{name}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td className="capital">Capital</td>
                <td>{capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{area}</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {borders.map((border) => {
                      return (
                        <li>
                          <NavLink to="#">{border}</NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}


export default CountryDetail;
