import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  searchCountry(id, countries) {
    for (let index = 0; index < countries.length; index++) {
      if (countries[index].cca3 === id) return countries[index];
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { countries } = this.props.location.state;
    const { flag, name, capital, area, borders } = this.searchCountry(
      id,
      countries
    );
    return (
      <div>
        <h1>
          {flag} {name}
        </h1>
        <table className="uk-table uk-table-divider uk-table-small uk-width-1-2@m uk-width-expand@s">
          <tbody>
            <tr>
              <td className="uk-width-small">Capital</td>
              <td className="uk-width-medium">{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{area} km2</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {" "}
                <ul>
                  {borders.map((border, index) => {
                    const { name: borderName } = this.searchCountry(
                      border,
                      countries
                    );
                    return (
                      <li key={index}>
                        <Link
                          to={{
                            pathname: `/detail/${border}`,
                            state: { countries }
                          }}
                        >
                          {borderName}
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

export default CountryDetail;
