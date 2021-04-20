import React from 'react';
import { Link } from "react-router-dom";
import countries from '../countries.json';

class CountryDetails extends React.Component {
    state = {
        name: "",
        capital: "",
        area: 0,
        borders: []
        
    }

    componentDidUpdate = (prevProps) => {
        const foundCountry = countries.find((country) => {
          // O país atual do loop tem o seu cca3 igual ao cca3 da URL
          return country.cca3 === this.props.match.params.cca3;
        });
    
        if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
          this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital,
            area: foundCountry.area,
            borders: [...foundCountry.borders],
          });
        }
      };
    
      renderBorderName = (cca3) => {
        const foundCountry = countries.find((country) => {
          return country.cca3 === cca3;
        });
    
        if (foundCountry) {
          return foundCountry.name.common;
        } else {
          return 'Country Not Found';
        }
      };

    render() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{this.state.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.state.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link to={`/${border}`}>
                              {this.renderBorderName(border)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

}

export default CountryDetails