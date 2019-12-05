 import React, {Component} from "react";

class CountryDetail extends Component {
  render() {
    return (
      <div className="col-7">
        <h1>{this.props.country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.country.borders.map((border, idx) => (
                    <li key={idx}>
                      <a href={border}>{this.props.findName(border)}</a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail